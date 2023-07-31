const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/KhushiERC721.sol/KhushiERC721.json");
const { childChainAddressToken} = require('./deployedContract')

const tokenABI = tokenContractJSON.abi;
const { walletAddress } = require('./config')
// const walletAddress = ""; // place your public address for your wallet here

async function main() {
    const token = await hre.ethers.getContractAt(tokenABI, childChainAddressToken);
    console.log(token.address)
    // console.log("You now have: " + await token.balanceOf(walletAddress) + " tokens");
    console.log("You now have: " + await token.balanceOf(walletAddress) + " tokens");
  }
  
  // We recommend this pattern to be able to use async/await everywhere
  // and properly handle errors.
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });