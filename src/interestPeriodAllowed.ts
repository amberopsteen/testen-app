export function interestPeriodAllowed(interest: any) {
  const validInterestPeriods = [1, 5, 10, 20, 30];

  return validInterestPeriods.includes(interest);
}
