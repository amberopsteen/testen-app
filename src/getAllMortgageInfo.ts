export async function getAllMortgageInfo(income: any, monthlyInterest: any) {
  const mortgageRepaymentAmount = (income / 360).toFixed(2);
  const totalAmount = (
    parseFloat(monthlyInterest) + parseFloat(mortgageRepaymentAmount)
  ).toFixed(2);
  const totalPayed = (parseFloat(totalAmount) * 360).toFixed(2);

  console.log("Totale hypotheeksom: " + income.toFixed(2));
  console.log("Maandelijkse aflossing: " + mortgageRepaymentAmount);
  console.log("Totale maandelijkse kosten: " + totalAmount);
  console.log("Maandelijkse rentesom: " + monthlyInterest);
  console.log("Totaal betaald na 30 jaar: " + totalPayed);
}
