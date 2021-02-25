import Web3 from "web3";
import { default as FaucetFactory } from "../";

const EmptyAddress = "0x0000000000000000000000000000000000000000";

// * Test FaucetFactory Library implementation
describe("Faucet Factory", () => {
  test("Faucet Factory Contract Address not undefined", () => {
    // FaucetFactory factory = new FaucetFactory(new Web3());
    expect(FaucetFactory.FAUCET_FACTORY_CONTRACT_ADDRESS).toBe(EmptyAddress);
  });

  test("Faucet Factory can be instantiated", () => {
    // const web3 = new Web3();
    const factory = new FaucetFactory(Web3.givenProvider);
    expect(factory.web3).not.toBeUndefined();
  });
});
