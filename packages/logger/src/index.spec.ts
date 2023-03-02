import { log } from "./index";

jest.mock("chalk", () => ({
  gray: jest.fn((...args) => args),
  yellow: jest.fn((...args) => args),
  red: jest.fn((...args) => args),
  green: jest.fn((...args) => args),
}));

const spy = jest.spyOn(global.console, "log");

describe("logger", () => {
  it("prints a message", () => {
    spy.mockImplementation(jest.fn());
    log("hello");
    expect(console.log).toBeCalled();
  });
});
