import { getUserInput } from "./getUserInput";

export async function getInterestPeriod() {
  const interestPeriod = parseFloat(
    await getUserInput(
      "Kies je rentevaste periode, kies hierbij uit 1, 5, 10, 20 of 30 jaar : "
    )
  );
  return interestPeriod;
}
