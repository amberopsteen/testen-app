"use strict";
// const { getPostalCode } = require("./getPostalCode");
// const { postalCodeIsAllowed } = require("./postalCodeIsAllowed");
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
const getPostalCode_1 = require("./getPostalCode");
const postalCodeIsAllowed_1 = require("./postalCodeIsAllowed");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        let postalCode = yield (0, getPostalCode_1.getPostalCode)();
        if (!(0, postalCodeIsAllowed_1.postalCodeIsAllowed)(postalCode)) {
            console.log("dooei");
        }
    });
}
main();
