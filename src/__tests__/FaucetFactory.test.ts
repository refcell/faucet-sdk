import Web3 from "web3";
import { default as FaucetFactory } from "../";
import { FusePoolAdapterABI } from "../abi";

const FAUCET_FACTORY_CONTRACT_ADDRESS =
  "0xe02745875f8F30d12E3cFd1B1B975ba96cFE4De1";

const fusePoolAddress = "0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9"; // TODO: Update to mainnet address eventually

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

  xtest("Faucet can be deployed", async () => {
    const web3 = new Web3();
    const factory = new FaucetFactory(web3, {
      from: "0x70FD938dE9199F4650c7a97B2Ebb1AF98B4733C9",
    });
    const options = { from: "0x70FD938dE9199F4650c7a97B2Ebb1AF98B4733C9" };
    const res = await factory.deployAdapter.call(
      "http://test.com/{id}.json",
      "FusePoolAdapter",
      fusePoolAddress,
      "0x70FD938dE9199F4650c7a97B2Ebb1AF98B4733C9",
      options
    );
    await factory.deployAdapter(
      "http://test.com/{id}.json",
      "FusePoolAdapter",
      fusePoolAddress,
      "0x70FD938dE9199F4650c7a97B2Ebb1AF98B4733C9",
      options
    );
    expect(res).not.toBeUndefined();
  });
});
