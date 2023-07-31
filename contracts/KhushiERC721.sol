// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract KhushiERC721 is ERC721URIStorage {
    string private _description;
    uint256 private tokenIndex = 0;

    constructor(string memory name, string memory symbol, string memory _prompt) ERC721(name, symbol) {
        _description = _prompt;
    }

    function promptDescription() public view returns (string memory) {
        return _description;
    }

    function mintNFT(address recipient, string memory tokenURI) public returns (uint256) {
        tokenIndex += 1;
        _mint(recipient, tokenIndex);
        _setTokenURI(tokenIndex, tokenURI);
        return tokenIndex;
    }
}
