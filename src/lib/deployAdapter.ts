import Web3 from "web3";

// * Deploy Adapter
const deployAdapter = async (
  adapter: string,
  param: string,
  web3: Web3,
  contracts: any,
  options: any
) => {
  const Adapter = contracts[adapter];
  Adapter.options.from = options.from;
  const receipt = await Adapter.deploy({
    data: "0x0",
    arguments: [param],
  }).send(options);
  const adapterAddress = Adapter.options.address;

  // * Return Adapter receipt and deployed address
  return [receipt, adapterAddress];
};

export default deployAdapter;
