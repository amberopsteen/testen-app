"use strict";
// // Imports
// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// async function askForPostalCode() {
//   await rl.question("Wat is uw postcode? : ", (AnswerPostalcode: any) => {
//     const postalCode = parseInt(AnswerPostalcode);
//     if (isNaN(postalCode)) {
//       console.log("Ongeldige invoer. Voer een geldige postcode in.");
//     } else {
//       switch (postalCode) {
//         case 9679:
//         case 9681:
//         case 9682:
//           console.log(
//             "Sorry, u kunt geen hypotheek krijgen omdat u in een aardbevingszone woont."
//           );
//           rl.close();
//           break;
//         default:
//           askForAnnualIncome();
//           break;
//       }
//     }
//   });
// }
// module.exports = askForPostalCode;
// // Functie voor het vragen van de jaarinkomen
// function askForAnnualIncome() {
//   rl.question("Wat is je jaarinkomen? : ", (AnswerYearIncome) => {
//     const annualIncome = parseInt(AnswerYearIncome);
//     if (!isNaN(annualIncome)) {
//       askForPartnerStatus(annualIncome);
//     } else {
//       console.log("Ongeldige invoer. Voer een geldig jaarinkomen in.");
//       askForAnnualIncome();
//     }
//   });
// }
// module.exports = askForAnnualIncome;
// // Functie voor het vragen of je een partner hebt
// function askForPartnerStatus(annualIncome) {
//   rl.question("Heb je een partner? (ja/nee): ", (AnswerPartner) => {
//     if (
//       AnswerPartner.toLowerCase() === "ja" ||
//       AnswerPartner.toLowerCase() === "nee"
//     ) {
//       if (AnswerPartner.toLowerCase() === "ja") {
//         askForPartnerAnnualIncome(annualIncome);
//       } else {
//         const adjustedIncome = annualIncome * 4.25;
//         askForStudyDebt(adjustedIncome);
//       }
//     } else {
//       console.log("Ongeldige invoer. Voer 'ja' of 'nee' in.");
//       askForPartnerStatus(annualIncome);
//     }
//   });
// }
// // Functie voor het vragen van de jaarinkomen van de partner
// function askForPartnerAnnualIncome(annualIncome) {
//   rl.question(
//     "Wat is het jaarinkomen van je partner? : ",
//     (AnswerPartnerIncome) => {
//       const partnerIncome = parseInt(AnswerPartnerIncome);
//       if (!isNaN(partnerIncome)) {
//         const totalIncome = annualIncome + partnerIncome;
//         const adjustedIncome = totalIncome * 4.25;
//         askForStudyDebt(adjustedIncome);
//       } else {
//         console.log(
//           "Ongeldige invoer. Voer een geldig jaarinkomen in voor je partner."
//         );
//         askForPartnerAnnualIncome(annualIncome);
//       }
//     }
//   );
// }
// // Functie voor het vragen van een studie schuld
// function askForStudyDebt(annualIncome) {
//   rl.question("Heb jij een studieschuld? (ja/nee): ", (AnswerStudyDebt) => {
//     if (AnswerStudyDebt.toLowerCase() === "ja") {
//       annualIncome = annualIncome * 0.75;
//       askForInterestPeriod(annualIncome);
//     } else if (AnswerStudyDebt.toLowerCase() === "nee") {
//       askForInterestPeriod(annualIncome);
//     } else {
//       console.log("Ongeldige invoer. Voer 'ja' of 'nee' in.");
//       askForStudyDebt(annualIncome);
//     }
//   });
// }
// function askForInterestPeriod(annualIncome) {
//   rl.question(
//     "Kies je rentevaste periode, kies hierbij uit 1, 5, 10, 20 of 30 jaar : ",
//     (AnswerFixedInterestPeriod) => {
//       const validPeriods = [1, 5, 10, 20, 30];
//       const chosenPeriod = parseInt(AnswerFixedInterestPeriod);
//       if (validPeriods.includes(chosenPeriod)) {
//         switch (chosenPeriod) {
//           case 1:
//             monthlyInterest = (annualIncome * 0.02) / 12;
//             break;
//           case 5:
//             monthlyInterest = (annualIncome * 0.03) / 12;
//             break;
//           case 10:
//             monthlyInterest = (annualIncome * 0.035) / 12;
//             break;
//           case 20:
//             monthlyInterest = (annualIncome * 0.045) / 12;
//             break;
//           case 30:
//             monthlyInterest = (annualIncome * 0.05) / 12;
//             break;
//         }
//         mortgageRepaymentAmount = annualIncome / 360;
//         totalAmount = monthlyInterest + mortgageRepaymentAmount;
//         console.log("Totale hypotheeksom: " + annualIncome.toFixed(2));
//         console.log(
//           "Maandelijkse aflossing: " + mortgageRepaymentAmount.toFixed(2)
//         );
//         console.log("Totale maandelijkse kosten: " + totalAmount.toFixed(2));
//         console.log("Maandelijkse rentesom: " + monthlyInterest.toFixed(2));
//       } else {
//         console.log(
//           "Ongeldige keuze. Kies een rentevaste periode van 1, 5, 10, 20 of 30 jaar."
//         );
//         askForInterestPeriod();
//       }
//     }
//   );
// }
// function calculateMorgage() {
//   askForPostalCode();
//   askForAnnualIncome();
// }
// calculateMorgage();
