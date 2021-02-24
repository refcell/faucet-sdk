import Web3 from "web3";
import { FaucetOptions } from "./types";

// * Import Contracts Abi
import { FaucetABI, FaucetFactoryABI } from "./abi";

// * lib imports
import { deployFaucet, deployAdapter } from "./lib";

// * FaucetFactory class implementation
class FaucetFactory {
  // * @dev Type declarations
  public web3: Web3 = null;
  contracts: any;
  getCreate2Address: (creatorAddress: any, salt: any, byteCode: any) => string;
  deployFaucet: (uri: string, adapter: string, owner: string) => Promise<any>;
  deployAdapter: (uri: string, adapter: string, owner: string) => Promise<any>;

  // TODO: Deploy and write
  static FAUCET_FACTORY_CONTRACT_ADDRESS = "0x0";

  // * @dev static Web3 declarations
  static Web3 = Web3;
  // @ts-ignore
  static BN = Web3.utils.BN;

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

    // * Function implementations
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
    this.deployAdapter = (adapter) =>
      deployAdapter(adapter, this.web3, this.contracts, options);
  }
}

export default FaucetFactory;
