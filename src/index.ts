/* eslint-disable */
import Web3 from "web3";
import { FaucetOptions } from './types';

// * Import Contracts Abi
var faucetAbi = require(__dirname + "/abi/Faucet.json");
var faucetFactoryAbi = require(__dirname + "/abi/FaucetFactory.json");

// * lib imports
import { deployFaucet, deployAdapter } from './lib';

// * FaucetFactory class implementation
class FaucetFactory {

  // TODO: Deploy and write
  public FAUCET_FACTORY_CONTRACT_ADDRESS = "0x0";

  // * @dev static Web3 declarations
  static Web3 = Web3;
  // @ts-ignore
  static BN = Web3.utils.BN;

  // * @dev Type declarations
  web3: Web3;
  contracts: any;
  getCreate2Address: (creatorAddress: any, salt: any, byteCode: any) => string;
  deployFaucet: (uri: string, adapter: string, owner: string) => Promise<any>;
  deployAdapter: (uri: string, adapter: string, owner: string) => Promise<any>;

  constructor(provider: any, options: FaucetOptions = {}) {
    this.web3 = new Web3(provider);
    this.contracts = {
      FaucetFactory: new this.web3.eth.Contract(faucetFactoryAbi, this.FAUCET_FACTORY_CONTRACT_ADDRESS)
    };

    this.getCreate2Address = function(creatorAddress, salt, byteCode) {
      return `0x${this.web3.utils.sha3(`0x${[
        'ff',
        creatorAddress,
        this.web3.utils.soliditySha3(salt),
        this.web3.utils.sha3(byteCode)
      ].map(x => x.replace(/0x/, ''))
      .join('')}`).slice(-40)}`.toLowerCase()
    }

    // * Function implementations
    this.deployFaucet = (uri, adapter, owner) => deployFaucet(uri, this.FAUCET_FACTORY_CONTRACT_ADDRESS, this.web3, adapter, owner, this.contracts, options);
    this.deployAdapter = (adapter) => deployAdapter(adapter, this.web3, this.contracts, options);

  }
}


export default FaucetFactory;