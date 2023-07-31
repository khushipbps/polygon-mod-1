# ERC721 Goerli to Mumbai Bridge Using fxPortal
This project demonstrates how to use the fxPortal contracts to transfer ERC721 tokens from Goerli to Mumbai.

## Description
This project aims to achieve multiple targets such as batch minting, transafering tokens, bridging contract. The main contract we have is `KhushiERC721` and we have performed operations on it. We have also taken a contract deployed on fxPortal Bridge.
## Features
**The contract provides the following functionalities:**
1. `mintNFT(address recipient, string memory tokenURI)`: Given a tokenURI, mint  with the given metadata URI and assign it to the specified tokenId.
2. `constructor(string memory name, string memory symbol, string memory _prompt)` also accepts a prompt that we used for generating images. 

3. `balanceOf(address owner)`: Get the number of NFTs owned by a particular address.

**Functionalities of scripts:**

1. `approveDeposit.js` - Here approve and deposit methods have been leverages to transfer funds from Goerli Testnet to Mumbai Polygon using fxPortal's deployed contract
2. `deploy.js` - This is used to deploy our contract in any network
3. `getbalance.js` - This is primarily used for getting balance of address in mumbai polygon after transferring tokens
4. `mintNFT.js` - This is used for batch mint NFTs
5. `deployedContract.js` - This is overridden when we deploy our contract in goerli network
6. `config.js` - stores configs helpful throughout the scripts like walletAddress, image urls etc

****## Getting Started
### Pre-requisites

- Node.js (>= 12.0.0)
- npm (>= 6.0.0)
- Hardhat (>= 2.0.0)
### ### Setup and Steps for Bridging

1. First clone and then run `npm i` to install dependencies
2. Put your private key in the .env.examples file and rename to .env when finished
3. Run `npx hardhat run scripts/deploy.js --network goerli` to deploy ERC721 contract
4. After deployment, contract address will get automatically written in `scripts/deployedContract.js` file
5. Write all configs in `scripts/config.js` as per your details
6. Run `npx hardhat run scripts/mintNFT.js --network goerli` to mint tokens to your wallet
7. Open https://mapper.polygon.technology/map and map your contract address and copy child chain addressToken to `childChainAddressToken` in `scripts/config.js`
8. Run `npx hardhat run scripts/approveDeposit.js --network goerli` to approve and deposit your tokens to polygon
9. Wait 20-30ish minutes for tokens to show on polygon account
10. Run `npx hardhat run scripts/getBalance.js --network mumbai` to see the new polygon balance


## Contributing
Contributions to this repository are not accepted as it is for personal assignments. However, if you have suggestions or feedback, feel free to open an issue.

## Authors
Khushi Kumari

## License
This project is licensed under the MIT License - see the LICENSE.md file for details
