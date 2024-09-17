import {
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox-viem/network-helpers";
import { expect } from "chai";
import hre from "hardhat";

describe("SimpleStorage", function () {
  async function deploySimpleStorage() {
    const [owner, otherAccount] = await hre.viem.getWalletClients();

    const storage = await hre.viem.deployContract("SimpleStorage", ["Simple Storage v1"]);

    const publicClient = await hre.viem.getPublicClient();

    return {
      storage,
      owner,
      otherAccount,
      publicClient,
    };
  }

  describe("Deployment", function () {
    it("Should contain the right initial value", async function () {
      const { storage } = await loadFixture(deploySimpleStorage);

      expect(await storage.read.data()).to.equal("Simple Storage v1");
    });
  });
});
