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
exports.getAnnualIncome = void 0;
const getUserInput_1 = require("./getUserInput");
function getAnnualIncome(hasPartner) {
    return __awaiter(this, void 0, void 0, function* () {
        let income = parseFloat(yield (0, getUserInput_1.getUserInput)("Wat is je inkomen? "));
        if (hasPartner) {
            let partnerIncome = parseFloat(yield (0, getUserInput_1.getUserInput)("wat is het inkomen van je partner? "));
            income = (partnerIncome + income) * 4.25;
        }
        else {
            income = income * 4.25;
        }
        return income;
    });
}
exports.getAnnualIncome = getAnnualIncome;
