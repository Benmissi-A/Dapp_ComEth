export const ComEthFactoryAdress = "0x15F303f632977f0a57F79211Adc15e6403699857";
export const ComEthFactoryAbi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "factoryOwner_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "comEthAddress",
        type: "address",
      },
    ],
    name: "ComEthCreated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "subscriptionPrice_",
        type: "uint256",
      },
    ],
    name: "createComEth",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getComEths",
    outputs: [
      {
        internalType: "contract ComEth[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getFactoryOwner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];