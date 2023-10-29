import { postalCodeIsAllowed } from "../src/postalCodeIsAllowed";

describe("postalCodeIsAllowed", () => {
  it("should return true for a valid postal code", async () => {
    const validPostalCode = 1234;

    const result = await postalCodeIsAllowed(validPostalCode);

    expect(result).toBe(true);
  });

  it("should return false for an invalid postal code", async () => {
    const invalidPostalCode = 9681;

    const result = await postalCodeIsAllowed(invalidPostalCode);

    expect(result).toBe(false);
  });
});
