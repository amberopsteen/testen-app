import { getInterestPeriod } from "../src/getInterestPeriod";
import { getUserInput } from "../src/getUserInput";

jest.mock("../src/getUserInput", () => ({
  getUserInput: jest.fn(),
}));

describe("getinterestPeriod", () => {
  beforeEach(() => {
    (getUserInput as jest.Mock).mockClear();
  });

  it("should return the chosen interest period as a number", async () => {
    (getUserInput as jest.Mock).mockResolvedValueOnce("10");

    const interestPeriod = await getInterestPeriod();

    expect(interestPeriod).toBe(10);
    expect(getUserInput).toHaveBeenCalledWith(
      "Kies je rentevaste periode, kies hierbij uit 1, 5, 10, 20 of 30 jaar : "
    );
  });

  it("should handle invalid input and return NaN", async () => {
    (getUserInput as jest.Mock).mockResolvedValueOnce("invalid");

    const interestPeriod = await getInterestPeriod();

    expect(isNaN(interestPeriod)).toBe(true);
    expect(getUserInput).toHaveBeenCalledWith(
      "Kies je rentevaste periode, kies hierbij uit 1, 5, 10, 20 of 30 jaar : "
    );
  });
});
