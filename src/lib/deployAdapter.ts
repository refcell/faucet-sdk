import Web3 from "web3";

// * Deploy Adapter
const deployAdapter = async (adapter: string, web3: Web3, contracts: any, options: any) => {
    var Adapter = new web3.eth.Contract(JSON.parse(contracts[adapter].abi));
    var receipt = await Adapter.deploy({ data: "0x" + contracts[adapter].bin }).send(options);
    var adapterAddress = Adapter.options.address;

    // * Return Adapter receipt and deployed address
    return [receipt, adapterAddress];
}

export default deployAdapter;