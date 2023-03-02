#!/usr/bin/env node
'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
exports.__esModule = true
var chalk_1 = __importDefault(require('chalk'))
var helpers_1 = require('yargs/helpers')
var yargs_1 = __importDefault(require('yargs/yargs'))
var check_1 = require('./check')
// eslint-disable-next-line no-unused-expressions
;(0, yargs_1['default'])((0, helpers_1.hideBin)(process.argv))
  .scriptName('cfp')
  .usage(chalk_1['default'].bold('$0 <cmd> [args]'))
  .command(
    'check',
    'checks tooling',
    function (yargs) {
      yargs.positional('verbose', {
        type: 'boolean',
        default: false,
        describe: 'show verbose logging',
      })
    },
    check_1.check,
  )
  .help().argv
