pragma solidity >=0.5.0;

import "../openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";
import "../openzeppelin-solidity/contracts/token/ERC20/ERC20Detailed.sol";

contract Coin20 is ERC20, ERC20Detailed {
  constructor(
    string memory c_name,
    string memory c_symbol,
    uint8 c_decimals,
    uint256 c_amount
  )
  ERC20Detailed(c_name, c_symbol, c_decimals) public {
    _mint(msg.sender, c_amount);
  }
}


