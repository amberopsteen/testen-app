import { getUserInput } from "./getUserInput";

export async function userHasPartner() {
  const userInput = await getUserInput("Heb je een partner? ");
  return userInput.toLowerCase() === "ja";
}
