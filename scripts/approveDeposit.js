const hre = require("hardhat");
const fxRootContractABI = require("../fxRootContractABI.json");
const ERC721Abi = require("../artifacts/contracts/KhushiERC721.sol/KhushiERC721.json").abi;
const { fxERC721RootAddress, walletAddress } = require('./config')
const { contractAddress } = require('./deployedContract')

async function main() {

    const tokenContract = await hre.ethers.getContractAt(ERC721Abi, contractAddress);
    const fxContract = await hre.ethers.getContractAt(fxRootContractABI, fxERC721RootAddress);

    console.log("Before transfer, You have: " + await tokenContract.balanceOf(walletAddress) + " tokens");
    
    // transferring 5 tokens starting from startId
    const startTokenId = 13;
    for(let tokenId = startTokenId; tokenId < startTokenId+5; tokenId++){
      const approveTx = await tokenContract.approve(fxERC721RootAddress, tokenId);
      const approveReceipt = await approveTx.wait();
      console.log(`Approval confirmed for ${tokenId}`);
      console.log(`Approve hash = ${approveReceipt.transactionHash}`)
  
  
      const depositTx = await fxContract.deposit(contractAddress, walletAddress, tokenId, "0x6556");
      const depositReceipt = await depositTx.wait();
      console.log(`Deposit confirmed for ${tokenId}`);
      console.log(`Deposit hash = ${depositReceipt.transactionHash}`)      
    }

    console.log("Tokens deposited");

    console.log("You now have: " + await tokenContract.balanceOf(walletAddress) + " tokens");
  
  }
  
  // We recommend this pattern to be able to use async/await everywhere
  // and properly handle errors.
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });