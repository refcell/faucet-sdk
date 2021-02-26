import Web3 from "web3";
import { default as FaucetFactory } from "../";

const FAUCET_FACTORY_CONTRACT_ADDRESS =
  "0x745d8A62E8A4E5805fE0451F215D179f2a6a86aA";

// * Test FaucetFactory Library implementation
describe("Faucet Factory", () => {
  test("Faucet Factory Contract Address not undefined", () => {
    expect(FaucetFactory.FAUCET_FACTORY_CONTRACT_ADDRESS).toBe(
      FAUCET_FACTORY_CONTRACT_ADDRESS
    );
  });

  test("Faucet Factory can be instantiated", () => {
    // const web3 = new Web3();
    const factory = new FaucetFactory(Web3.givenProvider);
    expect(factory.web3).not.toBeUndefined();
  });
});
