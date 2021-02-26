import Web3 from "web3";

export default class FaucetFactory {
    constructor(provider: provider);
    constructor(provider: provider, options: FaucetOptions);

    // * Generic class-level variables
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
    getFaucetAt: (address) => Promise<any>;

    // * Statics
    static FAUCET_FACTORY_CONTRACT_ADDRESS: string;
}

