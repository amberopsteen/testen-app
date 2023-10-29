import { getPostalCode } from "./getPostalCode";
import { postalCodeIsAllowed } from "./postalCodeIsAllowed";
import { getAnnualIncome } from "./getAnnualIncome";
import { userHasPartner } from "./userHasPartner";
import { userHasStudyDebt } from "./userHasStudyDebt";
import { mortgageWithStudyDebt } from "./mortgageWithStudyDebt";
import { getInterestPeriod } from "./getInterestPeriod";
import { interestPeriodAllowed } from "./interestPeriodAllowed";
import { mortgageWithInterestPeriod } from "./mortgageWithInterestPeriod";
import { getAllMortgageInfo } from "./getAllMortgageInfo";

export async function main() {
  let postalCode = await getPostalCode();

  if (isNaN(postalCode)) {
    console.log("Voer een 4-cijferige postcode in.");
    return;
  }

  const postalCodeAllowed = await postalCodeIsAllowed(postalCode);

  if (!postalCodeAllowed) {
    console.log("Sorry, u kunt geen hypotheek krijgen omdat u in een aardbevingszone woont.");
    return;
  }
  

  const hasPartner = await userHasPartner();
  let income = await getAnnualIncome(hasPartner);
  if (isNaN(income)) {
    console.log("Voer een een bedrag in.");
    return;
  }
  const hasStudyDebt = await userHasStudyDebt();
  income = await mortgageWithStudyDebt(income, hasStudyDebt);

  let interestPeriod = await getInterestPeriod();

  if (isNaN(income)) {
    console.log("Voer een een bedrag in.");
    return;
  }
  if (!interestPeriodAllowed(interestPeriod)) {
    console.log(
      "Ongeldige keuze. Kies een rentevaste periode van 1, 5, 10, 20 of 30 jaar."
    );
    return;
  } else {
    const monthlyInterest = await mortgageWithInterestPeriod(
      income,
      interestPeriod
    );
    getAllMortgageInfo(income, monthlyInterest);
  }
}

main();
