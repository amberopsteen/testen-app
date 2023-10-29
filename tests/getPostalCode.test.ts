import { getPostalCode } from "../src/getPostalCode";
import { getUserInput } from "../src/getUserInput";

jest.mock("../src/getUserInput", () => ({
  getUserInput: jest.fn(),
}));

describe("getPostalCode", () => {
  beforeEach(() => {
    (getUserInput as jest.Mock).mockClear();
  });

  it("should return the parsed postal code as a number", async () => {
    (getUserInput as jest.Mock).mockResolvedValueOnce("12345");

    const postalCode = await getPostalCode();

    expect(postalCode).toBe(12345);
    expect(getUserInput).toHaveBeenCalledWith("Voer uw postcode in: ");
  });

  it("should handle non-numeric input and return NaN", async () => {
    (getUserInput as jest.Mock).mockResolvedValueOnce("ABC123");

    const postalCode = await getPostalCode();

    expect(isNaN(postalCode)).toBe(true);
    expect(getUserInput).toHaveBeenCalledWith("Voer uw postcode in: ");
  });
});
