"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.interestPeriodAllowed = void 0;
function interestPeriodAllowed(interest) {
    const validInterestPeriods = [1, 5, 10, 20, 30];
    return validInterestPeriods.includes(interest);
}
exports.interestPeriodAllowed = interestPeriodAllowed;
