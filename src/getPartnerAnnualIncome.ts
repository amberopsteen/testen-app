import { getUserInput } from "./getUserInput";

export async function getPartnerAnnualIncome() {
  const incomePartner =  await getUserInput("Wat is het jaarinkomen van je partner? ");

  return incomePartner;
}
