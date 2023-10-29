import { getUserInput } from "./getUserInput";

export async function userHasStudyDebt() {
  const userInput = await getUserInput("Is er een studieschuld aanwezig? ");
  return userInput.toLowerCase() === "ja";
}
