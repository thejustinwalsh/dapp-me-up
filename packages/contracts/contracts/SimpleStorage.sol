// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

contract SimpleStorage {
    string public data;

    constructor(string memory _name) {
        data = _name;
    }
    
    function set(string memory _data) public {
        data = _data;
    }
}
