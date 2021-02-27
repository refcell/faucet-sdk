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
const abi_1 = require("../abi");
// * FaucetFactory deployFaucet function logic
const getFaucetAt = (address, web3, contracts) => __awaiter(void 0, void 0, void 0, function* () {
    // * Get Faucet Definitions
    // @ts-ignore
    const Faucet = new web3.eth.Contract([abi_1.FaucetABI.abi], address);
    return Faucet;
});
exports.default = getFaucetAt;
