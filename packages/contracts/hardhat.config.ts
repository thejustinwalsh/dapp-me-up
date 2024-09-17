import "@nomicfoundation/hardhat-toolbox-viem";
import "@nomicfoundation/hardhat-ethers";
import { task } from "hardhat/config";

task("fund", "Send ETH to own test account")
  .addParam("to", "Address you want to fund")
  .addOptionalParam("amount", "Amount to send in ether, default 10")
  .setAction(async (taskArgs, { network, ethers }) => {

    let to = await ethers.getAddress(taskArgs.to);
    const provider = new ethers.JsonRpcProvider();

    const amount = taskArgs.amount ? taskArgs.amount : "10";
    const accounts = await provider.listAccounts();
    const fromSigner = await provider.getSigner(accounts[0].address);
    const fromAddress = await fromSigner.getAddress();

    const txRequest = {
      from: fromAddress,
      to,
      value: ethers.parseUnits(
        amount,
        "ether"
      ),
    };
    const txResponse = await fromSigner.sendTransaction(txRequest);
    await txResponse.wait();
    console.log(`wallet ${to} funded with ${amount} ETH at transaction ${txResponse.hash}`);
  });

const config = {
  solidity: "0.8.24",
};

export default config;