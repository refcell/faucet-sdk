import Web3 from "web3";
import { FaucetABI } from "../abi";

// * FaucetFactory deployFaucet function logic
const getFaucetAt: any = async (
  address: string,
  web3: Web3,
  contracts: any
) => {
  // * Get Faucet Definitions
  const Faucet: any = new web3.eth.Contract(FaucetABI, address);

  return Faucet;
};

export default getFaucetAt;
