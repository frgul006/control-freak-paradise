import { log, logError, logSuccess, logVerbose } from '@cfp/logger'
import chalk from 'chalk'
import { $ } from 'execa'
import fs from 'fs'
import { satisfies } from 'semver'
import { z } from 'zod'

const optionsSchema = z.object({
  verbose: z.boolean(),
})

type Tool = {
  name: string
  version: string
  check: string
  install: string
}

type ToolResult = {
  tool: Tool
  status: 'INSTALLED' | 'NOT_INSTALLED' | 'WRONG_VERSION' | 'UNKNOWN_ERROR'
  actual: string
}

export const check = async (args: unknown) => {
  process.exitCode = 1

  const parsedOptions = optionsSchema.safeParse(args)
  if ('error' in parsedOptions) {
    logError('Invalid arguments passed to deploy function', parsedOptions)
    return
  }

  const options = parsedOptions.data

  const verbose = process.env.CFP_CLI_VERBOSE
    ? process.env.CFP_CLI_VERBOSE === 'true'
    : options.verbose

  const checkTool = async (tool: Tool): Promise<ToolResult> => {
    try {
      log(`Checking ${tool.name}...`)
      verbose && logVerbose(`${tool.name}`, tool)

      try {
        const { stdout } = await $`${tool.check}`
        const result = {
          tool,
          actual: stdout,
        }

        if (satisfies(stdout, tool.version)) {
          return {
            ...result,
            status: 'INSTALLED',
          }
        } else {
          return {
            ...result,
            status: 'WRONG_VERSION',
          }
        }
      } catch (err) {
        logError(err)
        return {
          tool,
          actual: '',
          status: 'NOT_INSTALLED',
        }
      }
    } catch (err) {
      logError(err)
      return {
        tool,
        actual: '',
        status: 'UNKNOWN_ERROR',
      }
    }
  }

  const getJson = (filePath: string): Tool[] => {
    verbose && logVerbose(`filePath: ${filePath}`)
    const jsonFile = JSON.parse(
      fs.readFileSync(filePath, {
        encoding: 'utf8',
        flag: 'r',
      }),
    )
    return jsonFile
  }

  verbose && logVerbose('options', options)

  const tools = getJson('tools.json')
  log()
  const results = await Promise.all(tools.map(checkTool))

  const failures = results.filter((r) => r.status !== 'INSTALLED')
  if (failures.length > 0) {
    logError(
      `One or more tools needs updating/installing:\n\n`,
      failures
        .map(
          (f) =>
            `\t${f.tool.name}:\n\t expected: ${f.tool.version}\n\t actual: ${chalk.red(
              f.actual !== '' ? f.actual : 'NOT INSTALLED',
            )}`,
        )
        .join('\n'),
    )
    log(
      `\nRun the following command to install required tooling: \n`,
      chalk.green(
        failures
          .map((result) =>
            result.tool.install.replace('$VERSION', result.tool.version.replace('^', '')),
          )
          .join(' && '),
      ),
    )
    return
  }

  log(``)
  logSuccess(`Tooling was up to date\n`)
  process.exitCode = 0
}
