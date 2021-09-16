# ComEth DApp

[![made-with-Javascript](https://img.shields.io/badge/Made%20with-Javascript-1f425f.svg)](https://developer.mozilla.org/fr/docs/Web/JavaScript)

[![built-with EthersJs](https://img.shields.io/badge/built%20with-Ethers_Js-3677FF)](https://docs.ethers.io/v5/)
[![built-with chakra-ui](https://img.shields.io/badge/built%20with-Chakra_Ui-3677FF)](https://chakra-ui.com/)

## _Built by "Equipe Epique" for its certification project at Alyra, the Blockchain School_ !

### Developers : Amine Benmissi, Guillaume Bézie, Sarah Marques, Stella Soler

[![created-by Benmissi-A](https://img.shields.io/badge/created%20by-Benmissi-FFA07A)](https://github.com/Benmissi-A)
[![created-by LokieDieKatze](https://img.shields.io/badge/created%20by-GuillaumeB75-FFA07A)](https://github.com/GuillaumeB75)
[![created-by LokieDieKatze](https://img.shields.io/badge/created%20by-LokiDieKatze-FFA07A)](https://github.com/LokiDieKatze)
[![created-by StellaGreen](https://img.shields.io/badge/created%20by-StellaGreen-FFA07A)](https://github.com/StellaGreen)

---

## Description

- testnet use : Rinkeby
- **ComEth dApp**

This repository contains a React project for our DAO-like ComEth DApp using the Ethereum Blockchain. There will be a "ComEth Factory" allowing a user to create a personalized ComEth project. Each ComEth gathers users together and offers them the tools to manage their common pot through the payment of a monthly subscription and a voting system, all in an entirely decentralized structure.

---

## Installation

To use this DApp you need to "fork" this repository :

- Dapp_ComEth :

On your Git Bash, choose the location then:

```
git clone https://github.com/Benmissi-A/Dapp_ComEth
cd Dapp_ComEth
yarn
```

---

## Smart contracts

### **ComEthFactory.sol**

This contract is a factory that allows any user to **create a ComEth community** and choose the price of the subscription (the subscription time lasts 4 weeks). The creator of the contract can share the address of this new ComEth so that other users can join it and start making proposals about how to **manage the Ethers of the common pot.**

### **ComEth.sol**

The subscription time begins when the ComEth is deployed and created and its price has been determined by the creator. The user of the dApp will have to connect to its Metamask wallet in order to use the functions.

First use a ComEth address to **join the community**.
Then pay for the current subscription in order to **participate in the decision making process**. When the current subscription has run out (a subscription lasts 4 weeks), a new subscription payment is due. If a payment has been missed you will have 1 unpaid subscription added to your account and you won't be able to vote or submit proposals. After 2 unpaid subscriptions you are considered "banned" which means the same besides you don't have the possibility to get funds back if you quit the ComEth.

It is possible to **submit proposals** to the community to decide how to manage the common pot. A proposal is a **planned Ether transaction** to a given address, assuming the proposal is approved by the voters. Give a short description of your suggestion and determine: a time limit for the vote, an amount of Ether for the transaction/payment and the address of the receiver of this transaction.

Go to the vote page and select the id of a proposal. Then **vote for or against it**. The result of the vote will occur whether the time has run out or the majority is reached, in which case **the proposal will be approved** (the transaction is automatically processed) **or rejected** (nothing will follow).

Decide to **use toggleIsActive to "take a break"**. In that time you will not have to pay for subscriptions but you also won't be allowed to vote and submit proposals. You can reverse it anytime.

You can **leave the community at anytime** and take your share of the common pot cith you. You will **receive a percentage of the common pot** according to you level of funding in the ComEth.
Should you be "banned" at this time, you will quit the ComEth but leave your funds behind.

---

## Licence

MIT License

Copyright (c) 2021 Dapp_ComEth

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.