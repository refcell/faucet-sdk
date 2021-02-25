"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const web3_1 = __importDefault(require("web3"));
const __1 = __importDefault(require("../"));
const EmptyAddress = "0x0000000000000000000000000000000000000000";
// * Test FaucetFactory Library implementation
describe("Faucet Factory", () => {
    test("Faucet Factory Contract Address not undefined", () => {
        // FaucetFactory factory = new FaucetFactory(new Web3());
        expect(__1.default.FAUCET_FACTORY_CONTRACT_ADDRESS).toBe(EmptyAddress);
    });
    test("Faucet Factory can be instantiated", () => {
        // const web3 = new Web3();
        const factory = new __1.default(web3_1.default.givenProvider);
        expect(factory.web3).not.toBeUndefined();
    });
});
