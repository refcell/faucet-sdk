import Web3 from "web3";

declare global {
  type FaucetFactory = {
    // * @dev Type declarations
    web3: Web3;
    contracts: any;
    getCreate2Address: (
      creatorAddress: any,
      salt: any,
      byteCode: any
    ) => string;
    deployFaucet: (uri: string, adapter: string, owner: string) => Promise<any>;
    deployAdapter: (
      uri: string,
      adapter: string,
      owner: string
    ) => Promise<any>;
  };
}

export default FaucetFactory;
