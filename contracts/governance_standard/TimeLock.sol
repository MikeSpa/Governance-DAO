// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/governance/TimelockController.sol";

contract TimeLock is TimelockController {
    constructor(
        uint256 _minDelay, /* once a proposal passed, how long before executing */
        address[] memory _proposers, /* list of addresses that can propose */
        address[] memory _executors /* list of executers who can execute once a proposal passed */
    ) TimelockController(_minDelay, _proposers, _executors) {}
}
