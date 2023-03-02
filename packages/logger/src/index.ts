/* eslint-disable security-node/detect-crlf */
import chalk from 'chalk'

export const logInfo = (...args: unknown[]) => {
  console.log(...args)
}

export const log = logInfo

export const logVerbose = (message: unknown, ...args: unknown[]) => {
  console.log('[verbose]', chalk.gray(message), ...args)
}

export const logWarning = (message: unknown, ...args: unknown[]) => {
  console.warn('🟡', chalk.yellow(message), ...args)
}

export const logError = (message: unknown, ...args: unknown[]) => {
  console.error('❌', chalk.red(message), ...args)
}

export const logSuccess = (message: unknown, ...args: unknown[]) => {
  console.log(`✅`, chalk.green(message), ...args)
}
