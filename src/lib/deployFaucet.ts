import Web3 from "web3";

// * FaucetFactory deployFaucet function logic
const deployFaucet: any = async (
  uri: string,
  implementationAddress: string,
  web3: Web3,
  adapter: string,
  owner: string,
  contracts: any,
  options: any
) => {
  // * Deploy FaucetFactory if necessary
  let FaucetFactory: any = new web3.eth.Contract(
    JSON.parse(contracts["contracts/FaucetFactory.sol"].abi)
  );
  if (!implementationAddress) {
    FaucetFactory = await FaucetFactory.deploy({
      data: "0x" + contracts["contracts/FaucetFactory.sol"].bin,
    }).send(options);
    implementationAddress = FaucetFactory.options.address;
  }

  // * Register new faucet with FaucetFactory
  let receipt: any = null;
  try {
    receipt = await FaucetFactory.methods
      .deployFaucet(owner, uri, adapter)
      .send(options);
  } catch (error) {
    throw error;
  }

  return receipt;
};

export default deployFaucet;
