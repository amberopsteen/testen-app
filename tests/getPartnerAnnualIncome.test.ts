import { getPartnerAnnualIncome } from "../src/getPartnerAnnualIncome";
import { getUserInput } from "../src/getUserInput";

jest.mock("../src/getUserInput", () => ({
  getUserInput: jest.fn(),
}));

describe("getPartnerAnnualIncome", () => {
  beforeEach(() => {
    (getUserInput as jest.Mock).mockClear();
  });

  it("should return the partner's annual income", async () => {
    (getUserInput as jest.Mock).mockResolvedValueOnce("50000");

    const incomePartner = await getPartnerAnnualIncome();

    expect(incomePartner).toBe("50000");
    expect(getUserInput).toHaveBeenCalledWith(
      "Wat is het jaarinkomen van je partner? "
    );
  });
});
