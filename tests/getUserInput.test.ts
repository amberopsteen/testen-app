import * as readline from "readline";
import { getUserInput } from "../src/getUserInput";

jest.mock("readline");

describe("getUserInput", () => {
  beforeEach(() => {
    (readline.createInterface as jest.Mock).mockClear();
  });

  it("should resolve with user input", async () => {
    const question = "What is your name? ";
    const userInput = "John";

    const mockInterface = {
      question: jest.fn().mockImplementationOnce((q, callback) => {
        callback(userInput);
      }),
      close: jest.fn(),
    };

    (readline.createInterface as jest.Mock).mockReturnValue(mockInterface);

    const result = await getUserInput(question);

    expect(result).toBe(userInput);
    expect(readline.createInterface).toHaveBeenCalledWith({
      input: process.stdin,
      output: process.stdout,
    });
    expect(mockInterface.question).toHaveBeenCalledWith(
      question,
      expect.any(Function)
    );
    expect(mockInterface.close).toHaveBeenCalled();
  });
});
