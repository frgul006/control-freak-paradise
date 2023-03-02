import { log, logError, logVerbose } from '@cfp/logger'
import { z } from 'zod'

const argsSchema = z.object({
  verbose: z.boolean(),
})

export const check = async (args: unknown) => {
  const parsedArgs = argsSchema.safeParse(args)
  if ('error' in parsedArgs) {
    logError('Invalid arguments passed to deploy function', parsedArgs)
    process.exit(1)
  }
  const { verbose } = parsedArgs.data
  if (verbose) {
    logVerbose('check', parsedArgs.data)
  }
  log('Checking')
}
