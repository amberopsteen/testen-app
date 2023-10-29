import { getAnnualIncome } from "../src/getAnnualIncome";
import { getUserInput } from "../src/getUserInput";

jest.mock("../src/getUserInput", () => ({
  getUserInput: jest.fn(),
}));

describe("getAnnualIncome", () => {
  beforeEach(() => {
    (getUserInput as jest.Mock).mockClear();
  });

  it("should return the correct income without a partner", async () => {
    (getUserInput as jest.Mock).mockResolvedValueOnce("50000");

    const income = await getAnnualIncome(false);
    expect(income).toBe(212500);
    expect(getUserInput).toHaveBeenCalledWith("Wat is je inkomen? ");
  });

  it("should return the correct income with a partner", async () => {
    (getUserInput as jest.Mock).mockResolvedValueOnce("40000");
    (getUserInput as jest.Mock).mockResolvedValueOnce("30000");

    const income = await getAnnualIncome(true);
    expect(income).toBe(297500);
    expect(getUserInput).toHaveBeenCalledWith("Wat is je inkomen? ");
    expect(getUserInput).toHaveBeenCalledWith("wat is het inkomen van je partner? ");
  });
});
