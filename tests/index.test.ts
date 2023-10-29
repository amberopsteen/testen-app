import { main } from "../src/index";
import { getPostalCode } from "../src/getPostalCode";
import { postalCodeIsAllowed } from "../src/postalCodeIsAllowed";
import { userHasPartner } from "../src/userHasPartner";
import { getAnnualIncome } from "../src/getAnnualIncome";
import { userHasStudyDebt } from "../src/userHasStudyDebt";
import { mortgageWithStudyDebt } from "../src/mortgageWithStudyDebt";
import { getInterestPeriod } from "../src/getInterestPeriod";
import { interestPeriodAllowed } from "../src/interestPeriodAllowed";




jest.mock("../src/getPostalCode");
jest.mock("../src/postalCodeIsAllowed");
jest.mock("../src/interestPeriodAllowed");
jest.mock("../src/userHasStudyDebt");
jest.mock("../src/mortgageWithStudyDebt");
jest.mock("../src/userHasPartner");
jest.mock("../src/getAnnualIncome");
jest.mock("../src/getInterestPeriod");


describe("main function", () => {
  beforeEach(() => {
    (getPostalCode as jest.Mock).mockClear();
    (userHasStudyDebt as jest.Mock).mockClear();
    (mortgageWithStudyDebt as jest.Mock).mockClear();
    (userHasPartner as jest.Mock).mockClear();
    (getAnnualIncome as jest.Mock).mockClear();
  });

  //integratietest 1:
  it("should handle invalid postal code input", async () => {
    (getPostalCode as jest.Mock).mockResolvedValue(NaN);

    const consoleLogMock = jest
      .spyOn(console, "log")
      .mockImplementation(() => {});

    await main();

    expect(getPostalCode).toHaveBeenCalled();
    expect(consoleLogMock).toHaveBeenCalledWith(
      "Voer een 4-cijferige postcode in."
    );

    consoleLogMock.mockRestore();
  });

  //integratietest 2:
  it("should handle postal code not allowed", async () => {
    (getPostalCode as jest.Mock).mockResolvedValue("9682");

    (postalCodeIsAllowed as jest.Mock).mockReturnValue(false);

    const consoleLogMock = jest
      .spyOn(console, "log")
      .mockImplementation(() => {});

    await main();

    expect(getPostalCode).toHaveBeenCalled();
    expect(postalCodeIsAllowed).toHaveBeenCalledWith("9682");
    expect(consoleLogMock).toHaveBeenCalledWith(
      "Sorry, u kunt geen hypotheek krijgen omdat u in een aardbevingszone woont."
    );

    consoleLogMock.mockRestore();
  });

  //integratietest 3:
  it("should handle valid postal code input", async () => {
    (getPostalCode as jest.Mock).mockResolvedValue("1234"); 
  
    const consoleLogMock = jest
      .spyOn(console, "log")
      .mockImplementation(() => {});
  
    await main();
  
    expect(getPostalCode).toHaveBeenCalled();
    expect(consoleLogMock).not.toHaveBeenCalledWith(
      "Voer een 4-cijferige postcode in."
    ); 
  
    consoleLogMock.mockRestore();
  });

  
  //integratietest 4:
  it("should handle a valid interest period choice", async () => {
    (getPostalCode as jest.Mock).mockResolvedValue("1234");
    (postalCodeIsAllowed as jest.Mock).mockReturnValue(true);
    (userHasPartner as jest.Mock).mockReturnValue(false);
    (getAnnualIncome as jest.Mock).mockResolvedValue(50000);
    (userHasStudyDebt as jest.Mock).mockReturnValue(false);
    (getInterestPeriod as jest.Mock).mockResolvedValue(10); 
    (interestPeriodAllowed as jest.Mock).mockReturnValue(true);
  
    const consoleLogMock = jest
      .spyOn(console, "log")
      .mockImplementation(() => {});
  
    await main();
  
    expect(consoleLogMock).not.toHaveBeenCalledWith(
      "Ongeldige keuze. Kies een rentevaste periode van 1, 5, 10, 20 of 30 jaar."
    );
  
    consoleLogMock.mockRestore();
  });
  
  
  
  
});
