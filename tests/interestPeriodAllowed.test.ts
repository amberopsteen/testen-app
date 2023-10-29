import { interestPeriodAllowed } from "../src/interestPeriodAllowed";

describe("InterestPeriodAllowed", () => {
  it("should return true for valid interest periods", () => {
    expect(interestPeriodAllowed(1)).toBe(true);
    expect(interestPeriodAllowed(5)).toBe(true);
    expect(interestPeriodAllowed(10)).toBe(true);
    expect(interestPeriodAllowed(20)).toBe(true);
    expect(interestPeriodAllowed(30)).toBe(true);
  });

  it("should return false for invalid interest periods", () => {
    expect(interestPeriodAllowed(15)).toBe(false);
    expect(interestPeriodAllowed(25)).toBe(false);
    expect(interestPeriodAllowed("invalid")).toBe(false);
  });
});
