#!/usr/bin/env node
import chalk from 'chalk'
import * as dotenv from 'dotenv'
import { hideBin } from 'yargs/helpers'
import yargs from 'yargs/yargs'

import { check } from './check' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()

// eslint-disable-next-line no-unused-expressions
yargs(hideBin(process.argv))
  .scriptName('cfp')
  .usage(chalk.bold('$0 <cmd> [args]'))
  .command(
    'check',
    'checks tooling',
    (yargs) => {
      yargs.positional('verbose', {
        type: 'boolean',
        default: false,
        describe: 'show verbose logging',
      })
    },
    check,
  )
  .help().argv
