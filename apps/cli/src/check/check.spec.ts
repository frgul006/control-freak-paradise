import fs from 'fs'

import { check } from './check'

jest.mock('chalk', () => ({
  gray: jest.fn((...args) => args),
  yellow: jest.fn((...args) => args),
  red: jest.fn((...args) => args),
  green: jest.fn((...args) => args),
}))

jest.mock('./runCommand', () => ({
  runCommand: jest.fn(() => {
    return new Promise<{ stdout: string; stderr: string; exitCode: number | null }>((resolve) => {
      resolve({
        stdout: '0.0.0',
        stderr: '',
        exitCode: 0,
      })
    })
  }),
}))

jest.spyOn(fs, 'readFileSync').mockImplementation(
  jest.fn(() => {
    return JSON.stringify([
      {
        name: 'docker',
        version: '^20.10.23',
        check: "docker version --format '{{.Server.Version}}'",
        install: 'brew install docker',
      },
      {
        name: 'volta',
        version: '^1.1.1',
        check: 'volta -v',
        install: "curl -s https://get.volta.sh | bash -s -- --version '$VERSION'",
      },
    ])
  }),
)

jest.spyOn(global.console, 'log').mockImplementation(jest.fn())
jest.spyOn(global.console, 'warn').mockImplementation(jest.fn())
jest.spyOn(global.console, 'error').mockImplementation(jest.fn())

describe('check', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('throws without args', async () => {
    try {
      await check(undefined)
    } catch (error) {
      expect(error).toEqual(new Error('mockExit'))
      expect(process.exit).toBeCalledWith(1)
    }
    expect(console.error).toBeCalled()
  })

  it('prints a message', async () => {
    await check({ verbose: false })
    expect(console.log).toBeCalled()
  })

  afterAll(() => {
    jest.restoreAllMocks()
  })
})
