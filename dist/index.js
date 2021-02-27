"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const web3_1 = __importDefault(require("web3"));
// * Import Contracts Abi
const abi_1 = require("./abi");
// * lib imports
const lib_1 = require("./lib");
// * FaucetFactory class implementation
class FaucetFactory {
    constructor(provider, options = {}) {
        Object.defineProperty(this, "web3", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
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
        Object.defineProperty(this, "setFaucetFactoryContractAddress", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "setFusePoolAdapterAddress", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "getFaucetAt", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.web3 = new web3_1.default(provider);
        this.contracts = {
            FaucetFactory: new this.web3.eth.Contract(
            // @ts-ignore
            [abi_1.FaucetFactoryABI.abi], FaucetFactory.FAUCET_FACTORY_CONTRACT_ADDRESS),
            FusePoolAdapter: new this.web3.eth.Contract(
            // @ts-ignore
            [abi_1.FusePoolAdapterABI.abi], FaucetFactory.FUSE_POOL_ADAPTER_ADDRESS),
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
        // * Deploy Faucet
        this.deployFaucet = (uri, adapter, owner) => lib_1.deployFaucet(uri, FaucetFactory.FAUCET_FACTORY_CONTRACT_ADDRESS, this.web3, adapter, owner, this.contracts, options);
        // * Deploy Adapter
        this.deployAdapter = (adapter, param, newOptions) => lib_1.deployAdapter(adapter, param, this.web3, this.contracts, newOptions);
        // * Set Faucet Factory Address
        this.setFaucetFactoryContractAddress = (newAddress) => {
            FaucetFactory.FAUCET_FACTORY_CONTRACT_ADDRESS = newAddress;
            return FaucetFactory.FAUCET_FACTORY_CONTRACT_ADDRESS;
        };
        // * Set Fuse Pool Adapter Address
        this.setFusePoolAdapterAddress = (newAddress) => {
            FaucetFactory.FUSE_POOL_ADAPTER_ADDRESS = newAddress;
            return FaucetFactory.FUSE_POOL_ADAPTER_ADDRESS;
        };
        // * Faucet Fetcher
        this.getFaucetAt = (address) => lib_1.getFaucetAt(address, this.web3);
    }
}
// TODO: Update to mainnet once deployed
Object.defineProperty(FaucetFactory, "FAUCET_FACTORY_CONTRACT_ADDRESS", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: "0xe02745875f8F30d12E3cFd1B1B975ba96cFE4De1"
});
Object.defineProperty(FaucetFactory, "FUSE_POOL_ADAPTER_ADDRESS", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: "0xB158150d3544D6ff49993E6B77702B20eB13b34f"
});
exports.default = FaucetFactory;
