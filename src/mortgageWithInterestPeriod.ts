export async function mortgageWithInterestPeriod(income: any, interest: any) {
  switch (interest) {
    case 1:
      interest = (income * 0.02) / 12;
      break;
    case 5:
      interest = (income * 0.03) / 12;
      break;
    case 10:
      interest = (income * 0.035) / 12;
      break;
    case 20:
      interest = (income * 0.045) / 12;
      break;
    case 30:
      interest = (income * 0.05) / 12;
      break;
  }

  return interest;
}
