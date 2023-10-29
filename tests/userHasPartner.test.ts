import { userHasPartner } from "../src/userHasPartner";
import { getUserInput } from "../src/getUserInput";

jest.mock("../src/getUserInput", () => ({
  getUserInput: jest.fn(),
}));

describe("userHasPartner", () => {
  beforeEach(() => {
    (getUserInput as jest.Mock).mockClear();
  });

  it('should return true when the user enters "ja"', async () => {
    (getUserInput as jest.Mock).mockResolvedValueOnce("ja");

    const result = await userHasPartner();

    expect(result).toBe(true);
    expect(getUserInput).toHaveBeenCalledWith("Heb je een partner? ");
  });

  it('should return false when the user enters something other than "ja"', async () => {
    (getUserInput as jest.Mock).mockResolvedValueOnce("nee");

    const result = await userHasPartner();

    expect(result).toBe(false);
    expect(getUserInput).toHaveBeenCalledWith("Heb je een partner? ");
  });
});
