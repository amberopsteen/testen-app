import { getAllMortgageInfo } from "../src/getAllMortgageInfo";

describe("getAllMorgageInfo", () => {
  let mockConsoleLog: jest.SpyInstance;

  beforeAll(() => {
    mockConsoleLog = jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterAll(() => {
    mockConsoleLog.mockRestore();
  });

  it("should calculate mortgage info correctly", () => {
    getAllMortgageInfo(50000, 1000);

    expect(mockConsoleLog).toHaveBeenCalledWith(
      "Totale hypotheeksom: 50000.00"
    );
    expect(mockConsoleLog).toHaveBeenCalledWith(
      "Maandelijkse aflossing: 138.89"
    );
    expect(mockConsoleLog).toHaveBeenCalledWith(
      "Totale maandelijkse kosten: 1138.89"
    );
    expect(mockConsoleLog).toHaveBeenCalledWith("Maandelijkse rentesom: 1000");
    expect(mockConsoleLog).toHaveBeenCalledWith(
      "Totaal betaald na 30 jaar: 410000.40"
    );
  });
});
