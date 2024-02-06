// SPDX-License-Identifier: Apache 2
pragma solidity >=0.8.0 <0.9.0;

interface IManager {
    error DeliveryPaymentTooLow(uint256 requiredPayment, uint256 providedPayment);
    error TransferAmountHasDust(uint256 amount, uint256 dust);
    error MessageAttestationAlreadyReceived(bytes32 msgHash, address endpoint);
    error MessageAlreadyExecuted(bytes32 msgHash);
    error MessageNotApproved(bytes32 msgHash);
    error InvalidTargetChain(uint16 targetChain, uint16 thisChain);
    error ZeroAmount();
    error InvalidAddressLength(uint256 length);
    error InvalidMode(uint8 mode);
    error InvalidSibling(uint16 chainId, bytes siblingAddress);
    error InvalidSiblingChainIdZero();
    error InvalidSiblingZeroLength();
    error InvalidSiblingZeroBytes();

    function transfer(
        uint256 amount,
        uint16 recipientChain,
        bytes32 recipient,
        bool shouldQueue
    ) external payable returns (uint64 msgId);

    function completeOutboundQueuedTransfer(uint64 queueSequence)
        external
        payable
        returns (uint64 msgSequence);

    function completeInboundQueuedTransfer(bytes32 digest) external;

    function setOutboundLimit(uint256 limit) external;

    function setInboundLimit(uint256 limit, uint16 chainId) external;

    function quoteDeliveryPrice(uint16 recipientChain) external view returns (uint256);

    function nextMessageSequence() external view returns (uint64);

    function token() external view returns (address);
}