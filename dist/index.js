"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
const getPostalCode_1 = require("./getPostalCode");
const postalCodeIsAllowed_1 = require("./postalCodeIsAllowed");
const getAnnualIncome_1 = require("./getAnnualIncome");
const userHasPartner_1 = require("./userHasPartner");
const userHasStudyDebt_1 = require("./userHasStudyDebt");
const mortgageWithStudyDebt_1 = require("./mortgageWithStudyDebt");
const getInterestPeriod_1 = require("./getInterestPeriod");
const interestPeriodAllowed_1 = require("./interestPeriodAllowed");
const mortgageWithInterestPeriod_1 = require("./mortgageWithInterestPeriod");
const getAllMortgageInfo_1 = require("./getAllMortgageInfo");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        let postalCode = yield (0, getPostalCode_1.getPostalCode)();
        if (isNaN(postalCode)) {
            console.log("Voer een 4-cijferige postcode in.");
            return;
        }
        const postalCodeAllowed = yield (0, postalCodeIsAllowed_1.postalCodeIsAllowed)(postalCode);
        if (!postalCodeAllowed) {
            console.log("Sorry, u kunt geen hypotheek krijgen omdat u in een aardbevingszone woont.");
            return;
        }
        const hasPartner = yield (0, userHasPartner_1.userHasPartner)();
        let income = yield (0, getAnnualIncome_1.getAnnualIncome)(hasPartner);
        if (isNaN(income)) {
            console.log("Voer een een bedrag in.");
            return;
        }
        const hasStudyDebt = yield (0, userHasStudyDebt_1.userHasStudyDebt)();
        income = yield (0, mortgageWithStudyDebt_1.mortgageWithStudyDebt)(income, hasStudyDebt);
        let interestPeriod = yield (0, getInterestPeriod_1.getInterestPeriod)();
        if (isNaN(income)) {
            console.log("Voer een een bedrag in.");
            return;
        }
        if (!(0, interestPeriodAllowed_1.interestPeriodAllowed)(interestPeriod)) {
            console.log("Ongeldige keuze. Kies een rentevaste periode van 1, 5, 10, 20 of 30 jaar.");
            return;
        }
        else {
            const monthlyInterest = yield (0, mortgageWithInterestPeriod_1.mortgageWithInterestPeriod)(income, interestPeriod);
            (0, getAllMortgageInfo_1.getAllMortgageInfo)(income, monthlyInterest);
        }
    });
}
exports.main = main;
main();
