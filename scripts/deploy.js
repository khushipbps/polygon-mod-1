const hre = require("hardhat");
const fs = require('fs');

const { ERC721ContractName } = require('./config')

// this is used to update contactAddress when contract is deployed
function updateContractAdress(address){
  const fileName = 'scripts/deployedContract.js';
  const newText = `module.exports = { contractAddress : '${address}'}`;

  fs.writeFileSync(fileName, newText)
}

async function deployContract(){
  const ERC721Contract = await hre.ethers.getContractFactory(ERC721ContractName);
  const Contract = await ERC721Contract.deploy("KhushiNFTERC721", "KHNFT", 'Random Images');
  await Contract.deployed();

  console.log(`${ERC721ContractName} :: deployed to: ${Contract.address}`);
  return Contract.address;
}

async function main() {
  const contractAddress = await deployContract();
  await updateContractAdress(contractAddress);
}

// Running the deployment
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
