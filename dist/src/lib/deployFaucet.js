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
// * FaucetFactory deployFaucet function logic
const deployFaucet = (uri, implementationAddress, web3, adapter, owner, contracts, options) => __awaiter(void 0, void 0, void 0, function* () {
    // * Deploy FaucetFactory if necessary
    let FaucetFactory = new web3.eth.Contract(JSON.parse(contracts["contracts/FaucetFactory.sol"].abi));
    if (!implementationAddress) {
        FaucetFactory = yield FaucetFactory.deploy({
            data: "0x" + contracts["contracts/FaucetFactory.sol"].bin,
        }).send(options);
        implementationAddress = FaucetFactory.options.address;
    }
    // * Register new faucet with FaucetFactory
    let receipt = null;
    try {
        receipt = yield FaucetFactory.methods
            .deployFaucet(owner, uri, adapter)
            .send(options);
    }
    catch (error) {
        throw (error);
    }
    return receipt;
});
exports.default = deployFaucet;
