import { getUserInput } from "./getUserInput";

export async function getAnnualIncome(hasPartner: any) {
  let income = parseFloat(await getUserInput("Wat is je inkomen? "));
  if (hasPartner) {
    let partnerIncome = parseFloat(
      await getUserInput("wat is het inkomen van je partner? ")
    );

    income = (partnerIncome + income) * 4.25;
  } else {
    income = income * 4.25;
  }

  return income;
}
