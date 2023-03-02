import { check } from './check'

jest.mock('chalk', () => ({
  gray: jest.fn((...args) => args),
  yellow: jest.fn((...args) => args),
  red: jest.fn((...args) => args),
  green: jest.fn((...args) => args),
}))

jest.spyOn(process, 'exit').mockImplementation(
  jest.fn(() => {
    throw new Error('mockExit')
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
