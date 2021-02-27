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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const web3_1 = __importDefault(require("web3"));
const __1 = __importDefault(require("../"));
const FAUCET_FACTORY_CONTRACT_ADDRESS = "0xe02745875f8F30d12E3cFd1B1B975ba96cFE4De1";
const fusePoolAddress = "0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9"; // TODO: Update to mainnet address eventually
// * Test FaucetFactory Library implementation
describe("Faucet Factory", () => {
    test("Faucet Factory Contract Address not undefined", () => {
        expect(__1.default.FAUCET_FACTORY_CONTRACT_ADDRESS).toBe(FAUCET_FACTORY_CONTRACT_ADDRESS);
    });
    test("Faucet Factory can be instantiated", () => {
        // const web3 = new Web3();
        const factory = new __1.default(web3_1.default.givenProvider);
        expect(factory.web3).not.toBeUndefined();
    });
    xtest("Faucet can be deployed", () => __awaiter(void 0, void 0, void 0, function* () {
        const web3 = new web3_1.default();
        const factory = new __1.default(web3, {
            from: "0x70FD938dE9199F4650c7a97B2Ebb1AF98B4733C9",
        });
        const options = { from: "0x70FD938dE9199F4650c7a97B2Ebb1AF98B4733C9" };
        const res = yield factory.deployAdapter.call("http://test.com/{id}.json", "FusePoolAdapter", fusePoolAddress, "0x70FD938dE9199F4650c7a97B2Ebb1AF98B4733C9", options);
        yield factory.deployAdapter("http://test.com/{id}.json", "FusePoolAdapter", fusePoolAddress, "0x70FD938dE9199F4650c7a97B2Ebb1AF98B4733C9", options);
        expect(res).not.toBeUndefined();
    }));
});
