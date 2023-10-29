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
exports.getInterestPeriod = void 0;
const getUserInput_1 = require("./getUserInput");
function getInterestPeriod() {
    return __awaiter(this, void 0, void 0, function* () {
        const interestPeriod = parseFloat(yield (0, getUserInput_1.getUserInput)("Kies je rentevaste periode, kies hierbij uit 1, 5, 10, 20 of 30 jaar : "));
        return interestPeriod;
    });
}
exports.getInterestPeriod = getInterestPeriod;
