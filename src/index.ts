import Web3 from "web3";
import { FaucetOptions } from "./types";

// * Import Contracts Abi
import { FaucetFactoryABI } from "./abi";

// * lib imports
import { deployFaucet, deployAdapter } from "./lib";

// * FaucetFactory class implementation
class FaucetFactory {
  web3: Web3;
  contracts: any;
  getCreate2Address: (creatorAddress: any, salt: any, byteCode: any) => string;
  deployFaucet: (uri: string, adapter: string, owner: string) => Promise<any>;
  deployAdapter: (uri: string, adapter: string, owner: string) => Promise<any>;
  setFaucetFactoryContractAddress: (newAddress: string) => string;

  // TODO: Update to mainnet once deployed
  static FAUCET_FACTORY_CONTRACT_ADDRESS =
    "0xe02745875f8F30d12E3cFd1B1B975ba96cFE4De1";

  constructor(provider: any, options: FaucetOptions = {}) {
    this.web3 = new Web3(provider);
    this.contracts = {
      FaucetFactory: new this.web3.eth.Contract(
        FaucetFactoryABI,
        FaucetFactory.FAUCET_FACTORY_CONTRACT_ADDRESS
      ),
    };

    this.getCreate2Address = function (creatorAddress, salt, byteCode) {
      return `0x${this.web3.utils
        .sha3(
          `0x${[
            "ff",
            creatorAddress,
            this.web3.utils.soliditySha3(salt),
            this.web3.utils.sha3(byteCode),
          ]
            .map((x) => x.replace(/0x/, ""))
            .join("")}`
        )
        .slice(-40)}`.toLowerCase();
    };

    // * Deploy Faucet
    this.deployFaucet = (uri, adapter, owner) =>
      deployFaucet(
        uri,
        FaucetFactory.FAUCET_FACTORY_CONTRACT_ADDRESS,
        this.web3,
        adapter,
        owner,
        this.contracts,
        options
      );

    // * Deploy Adapter
    this.deployAdapter = (adapter) =>
      deployAdapter(adapter, this.web3, this.contracts, options);

    // * Set Faucet Factory Address
    this.setFaucetFactoryContractAddress = (newAddress) => {
      FaucetFactory.FAUCET_FACTORY_CONTRACT_ADDRESS = newAddress;
      return FaucetFactory.FAUCET_FACTORY_CONTRACT_ADDRESS;
    };
  }
}

export default FaucetFactory;
