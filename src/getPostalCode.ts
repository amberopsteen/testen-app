import { getUserInput } from "./getUserInput";

export async function getPostalCode() {
  return parseFloat(await getUserInput("Voer uw postcode in: "));
}
