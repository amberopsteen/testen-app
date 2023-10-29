import { mortgageWithInterestPeriod } from "../src/mortgageWithInterestPeriod";

describe("mortgageWithInterestPeriod", () => {
  it("should calculate interest for a 1-year interest period", async () => {
    const income = 60000;
    const interest = 1;
    const expectedInterest = (income * 0.02) / 12;
    const result = await mortgageWithInterestPeriod(income, interest);
    expect(result).toBe(expectedInterest);
  });

  it("should calculate interest for a 5-year interest period", async () => {
    const income = 60000;
    const interest = 5;
    const expectedInterest = (income * 0.03) / 12;
    const result = await mortgageWithInterestPeriod(income, interest);
    expect(result).toBe(expectedInterest);
  });

  it("should calculate interest for a 10-year interest period", async () => {
    const income = 60000;
    const interest = 10;
    const expectedInterest = (income * 0.035) / 12;
    const result = await mortgageWithInterestPeriod(income, interest);
    expect(result).toBe(expectedInterest);
  });

  it("should calculate interest for a 20-year interest period", async () => {
    const income = 60000;
    const interest = 20;
    const expectedInterest = (income * 0.045) / 12;
    const result = await mortgageWithInterestPeriod(income, interest);
    expect(result).toBe(expectedInterest);
  });

  it("should calculate interest for a 30-year interest period", async () => {
    const income = 60000;
    const interest = 30;
    const expectedInterest = (income * 0.05) / 12;
    const result = await mortgageWithInterestPeriod(income, interest);
    expect(result).toBe(expectedInterest);
  });
});
