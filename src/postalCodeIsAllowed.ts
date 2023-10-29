export async function postalCodeIsAllowed(postalCode: number) {
  const invalidPostalCodes = [9679, 9681, 9682];

  if (invalidPostalCodes.includes(postalCode)) {
    return false;
  } else {
    return true;
  }
}
