"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const web3_1 = require("web3");
// * Import Contracts Abi
const abi_1 = require("./abi");
// * lib imports
const lib_1 = require("./lib");
// * FaucetFactory class implementation
class FaucetFactory {
    constructor(provider, options = {}) {
        // * @dev Type declarations
        Object.defineProperty(this, "web3", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null
        });
        Object.defineProperty(this, "contracts", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "getCreate2Address", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "deployFaucet", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "deployAdapter", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.web3 = new web3_1.default(provider);
        this.contracts = {
            FaucetFactory: new this.web3.eth.Contract(abi_1.FaucetFactoryABI, FaucetFactory.FAUCET_FACTORY_CONTRACT_ADDRESS),
        };
        this.getCreate2Address = function (creatorAddress, salt, byteCode) {
            return `0x${this.web3.utils
                .sha3(`0x${[
                "ff",
                creatorAddress,
                this.web3.utils.soliditySha3(salt),
                this.web3.utils.sha3(byteCode),
            ]
                .map((x) => x.replace(/0x/, ""))
                .join("")}`)
                .slice(-40)}`.toLowerCase();
        };
        // * Function implementations
        this.deployFaucet = (uri, adapter, owner) => lib_1.deployFaucet(uri, FaucetFactory.FAUCET_FACTORY_CONTRACT_ADDRESS, this.web3, adapter, owner, this.contracts, options);
        this.deployAdapter = (adapter) => lib_1.deployAdapter(adapter, this.web3, this.contracts, options);
    }
}
// TODO: Deploy and write
Object.defineProperty(FaucetFactory, "FAUCET_FACTORY_CONTRACT_ADDRESS", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: "0x0"
});
// * @dev static Web3 declarations
Object.defineProperty(FaucetFactory, "Web3", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: web3_1.default
});
// @ts-ignore
Object.defineProperty(FaucetFactory, "BN", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: web3_1.default.utils.BN
});
exports.default = FaucetFactory;
