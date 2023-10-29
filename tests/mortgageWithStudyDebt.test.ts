import { mortgageWithStudyDebt } from "../src/mortgageWithStudyDebt";


describe("mortgageWithStudyDebt function", () => {
  it("should reduce income by 25% when hasStudyDebt is true", async () => {
    const initialIncome = 60000;
    const hasStudyDebt = true;

    const modifiedIncome = await mortgageWithStudyDebt(initialIncome, hasStudyDebt);

    expect(modifiedIncome).toEqual(initialIncome * 0.75);
  });

  it("should not modify income when hasStudyDebt is false", async () => {
    const initialIncome = 60000;
    const hasStudyDebt = false;

    const modifiedIncome = await mortgageWithStudyDebt(initialIncome, hasStudyDebt);

    expect(modifiedIncome).toEqual(initialIncome);
  });
});
