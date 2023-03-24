import { spawn } from 'child_process'

export interface RunCommandError extends Error {
  stdout: string
  stderr: string
  exitCode: number | null
}

export const runCommand = (command: string) => {
  return new Promise<{ stdout: string; stderr: string; exitCode: number | null }>(
    (resolve, reject) => {
      try {
        const process = spawn(command, { shell: true })

        let stdout = ''
        process.stdout.setEncoding('utf8')
        process.stdout.on('data', (data) => {
          stdout += data.toString()
        })

        let stderr = ''
        process.stderr.setEncoding('utf8')
        process.stderr.on('data', (data) => {
          stderr += data.toString()
        })

        stdout = stdout.trim()
        stderr = stderr.trim()

        process.on('exit', (exitCode) => {
          resolve({ stdout, stderr, exitCode })
        })
      } catch (e) {
        reject(e)
      }
    },
  )
}
