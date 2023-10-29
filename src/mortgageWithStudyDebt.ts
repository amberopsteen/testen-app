export async function mortgageWithStudyDebt(income: number, hasStudyDebt: boolean): Promise<number> {
  if (hasStudyDebt) {
    income = income * 0.75; 
  }
  return income;
}