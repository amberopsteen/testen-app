import { getPostalCode } from "../src/getPostalCode";
import { postalCodeIsAllowed } from "../src/postalCodeIsAllowed";
import { getInterestPeriod } from "../src/getInterestPeriod";
import { interestPeriodAllowed } from "../src/interestPeriodAllowed";


jest.mock("../src/getUserInput", () => {
  return {
    getUserInput: jest.fn(),
  };
});

describe("Integration Test with Mocked User Input", () => {
  it("test getPostalCode and postalCodeIsAllowed where postal code is allow", async () => {
    const getUserInputMock = require("../src/getUserInput")
      .getUserInput as jest.Mock;

    getUserInputMock.mockResolvedValueOnce("1234");

    const postalCode = await getPostalCode();
    expect(postalCode).toBe(1234);

    const isAllowed = await postalCodeIsAllowed(postalCode);
    expect(isAllowed).toBe(true);
  });

  it("test getPostalCode and postalCodeIsAllowed where postal code is not allow", async () => {
    const getUserInputMock = require("../src/getUserInput")
      .getUserInput as jest.Mock;

    getUserInputMock.mockResolvedValueOnce("9679");

    const postalCode = await getPostalCode();
    expect(postalCode).toBe(9679);

    const isAllowed = await postalCodeIsAllowed(postalCode);
    expect(isAllowed).toBe(false);
  });
  it("test getInterestPeriod and interestPeriodAllowed where interestperiode is allow", async () => {
    const getUserInputMock = require("../src/getUserInput")
      .getUserInput as jest.Mock;

    getUserInputMock.mockResolvedValueOnce("10"); 

    const log = jest.spyOn(console, "log");
    log.mockImplementation(() => {});

    const interestPeriod = await getInterestPeriod();
    expect(interestPeriod).toBe(10);

    log.mockRestore();

    const isAllowed = interestPeriodAllowed(interestPeriod);
    expect(isAllowed).toBe(true);
  });
  it("test getInterestPeriod and interestPeriodAllowed where interestperiode is not allow", async () => {
    const getUserInputMock = require("../src/getUserInput")
      .getUserInput as jest.Mock;

    getUserInputMock.mockResolvedValueOnce("15"); 

    const log = jest.spyOn(console, "log");
    log.mockImplementation(() => {});

    const interestPeriod = await getInterestPeriod();
    expect(interestPeriod).toBe(15);

    log.mockRestore();

    const isAllowed = interestPeriodAllowed(interestPeriod);
    expect(isAllowed).toBe(false);
  });
});
