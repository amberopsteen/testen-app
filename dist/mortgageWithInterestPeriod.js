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
exports.mortgageWithInterestPeriod = void 0;
function mortgageWithInterestPeriod(income, interest) {
    return __awaiter(this, void 0, void 0, function* () {
        switch (interest) {
            case 1:
                interest = (income * 0.02) / 12;
                break;
            case 5:
                interest = (income * 0.03) / 12;
                break;
            case 10:
                interest = (income * 0.035) / 12;
                break;
            case 20:
                interest = (income * 0.045) / 12;
                break;
            case 30:
                interest = (income * 0.05) / 12;
                break;
        }
        return interest;
    });
}
exports.mortgageWithInterestPeriod = mortgageWithInterestPeriod;
