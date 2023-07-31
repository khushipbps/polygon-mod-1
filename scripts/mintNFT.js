const hre = require("hardhat");
const { pinataImageIds, walletAddress } = require('./config')
const { contractAddress } =  require('./deployedContract')
const ERC721Abi = require("../artifacts/contracts/KhushiERC721.sol/KhushiERC721.json").abi;

async function minter(contract, pinataImageId){
  const recipientAddress = await hre.ethers.provider.getSigner().getAddress();
  const pinataUrl = `https://gateway.pinata.cloud/ipfs/${pinataImageId}`
  const transaction = await contract.mintNFT(recipientAddress, pinataUrl);
  const transactionReceipt = await transaction.wait();
  console.log(`successfully minted with pinataUrl: ${pinataUrl}, txn hash = ${transactionReceipt.transactionHash}`);
}

async function main() {
  // Retrieve the deployed contract instance
  const contract = await hre.ethers.getContractAt(ERC721Abi, contractAddress);

  for (const imageId of pinataImageIds) {
    await minter(contract, imageId);
  }   
  console.log("You now have: " + await contract.balanceOf(walletAddress) + " tokens");
}

// Run the script
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
