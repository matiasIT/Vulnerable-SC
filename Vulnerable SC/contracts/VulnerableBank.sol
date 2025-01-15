// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract VulnerableBank {
    mapping(address => uint256) internal balances;
    
    function _updateBalance(address user, uint256 amount) public {
        balances[user] = amount;
    }

    function deposit() external payable {
        balances[msg.sender] += msg.value;
    }

    function getBalance(address user) external view returns (uint256) {
        return balances[user];
    }
}