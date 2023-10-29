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
exports.getAllMortgageInfo = void 0;
function getAllMortgageInfo(income, monthlyInterest) {
    return __awaiter(this, void 0, void 0, function* () {
        const mortgageRepaymentAmount = (income / 360).toFixed(2);
        const totalAmount = (parseFloat(monthlyInterest) + parseFloat(mortgageRepaymentAmount)).toFixed(2);
        const totalPayed = (parseFloat(totalAmount) * 360).toFixed(2);
        console.log("Totale hypotheeksom: " + income.toFixed(2));
        console.log("Maandelijkse aflossing: " + mortgageRepaymentAmount);
        console.log("Totale maandelijkse kosten: " + totalAmount);
        console.log("Maandelijkse rentesom: " + monthlyInterest);
        console.log("Totaal betaald na 30 jaar: " + totalPayed);
    });
}
exports.getAllMortgageInfo = getAllMortgageInfo;
