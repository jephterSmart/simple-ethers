const fs = require("fs");
const { ethers } = require("ethers");
const { keccak256, isBytesLike } = require("ethers/lib/utils");
require("dotenv").config();
const LOCAL_NETWORK = "http://127.0.0.1:7545";
async function main() {
  const provider = new ethers.providers.JsonRpcProvider(LOCAL_NETWORK);
  const wallet = new ethers.Wallet(process.env.WALLET_PRIVATE_KEY, provider);
  const contractAbi = fs.readFileSync(
    "./target/SimpleStorage_sol_SimpleStorage.abi",
    "utf-8",
  );
  const contractBin = fs.readFileSync(
    "./target/SimpleStorage_sol_SimpleStorage.bin",
    "utf-8",
  );
  //Using the contract interface
  //   console.log(contractAbi, contractBin);
  //   const contractFactory = new ethers.ContractFactory(
  //     contractAbi,
  //     contractBin,
  //     wallet,
  //   );

  //   const contract = await contractFactory.deploy();
  //     console.log(contract);
  //   const contractReceipt = await contract.deployTransaction.wait();
  //   console.log(contractReceipt);

  //Using the transaction interface
  //   const nonce = await wallet.getTransactionCount(0);
  //   const txn = {
  //     nonce: nonce,
  //     gasPrice: 20000000000,
  //     gasLimit: 1_000_000,
  //     to: null,
  //     value: 0,
  //     data: `0x${contractBin}`,
  //     chainId: 1337,
  //   };
  //   const signTxn = await wallet.signTransaction(txn);
  //   const txnReceipt = await (await provider.sendTransaction(signTxn)).wait();
  //   //   const txnReceipt = await sendTxn.wait();
  //   console.log(txnReceipt);

  // Using Contract Api to call contract methods
  const contract = new ethers.Contract(
    "0x6A0A133cDf0317243ef21C3b857a90C93F0A3d4c",
    contractAbi,
    wallet,
  );
  const res = await contract.retrieve();
  console.log(res.toString());
  //   const storeTxn = await contract.store("7");
  //   await storeTxn.wait();
  //   console.log((await contract.retrieve()).toString());

  //Using manual txn to call contract methods
  //   const nonce = await wallet.getTransactionCount(0);
  //   const txn = {
  //     nonce: nonce,
  //     gasPrice: 20000000000,
  //     gasLimit: 1_000_000,
  //     to: "0x6A0A133cDf0317243ef21C3b857a90C93F0A3d4c",
  //     value: 0,
  //     data: `${keccak256(Buffer.from("store(uint256)")).slice(0, 10)}${Array.from({ length: 31 * 2 }, () => "0").join("")}ff`,
  //     chainId: 1337,
  //   };

  //   const sendTxn = await wallet.sendTransaction(txn);
  //   const rec = await sendTxn.wait(1);

  //   console.log(sendTxn, rec);
}

main();
