# Solidity Contract

This repository emphazises how to deploy a contract to a network. Via this project we can understand the following:

- The compilation of solidity and specifying the output of the compilation

- Working with ethers.js classes, such as Providers, Wallet, Contract, etc., to create contract and communicate with contract generated.

- Using manual transactions to create contract and updating transaction state using the keccak256 function provided by ethereum.

## Project Structure

```solidity
ethers-simple
├─ .gitignore
├─ .prettierrc.json
├─ README.md
├─ SimpleStorage.sol
├─ deploy.js
├─ package-lock.json
├─ package.json
└─ target
   ├─ SimpleStorage_sol_SimpleStorage.abi
   └─ SimpleStorage_sol_SimpleStorage.bin

```

- The `package.json` file include my personal scripts which I can use to interact with the `solcjs` library which is javascript library for compiling solidity.

- `SimpleStorage` was a simple contract I wrote to test out compilation and deployment to a test network.

- The `target` folder was the output folder specified for all my compilation as specified in the `package.json`

## Run Command

To run the application, make sure you have node.js installed, then run the following command on your terminal:

```
node deploy.js

```

### Thank You
