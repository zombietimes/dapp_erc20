# [dapp_erc20](https://github.com/zombietimes/dapp_erc20)
This is a sample application of DApps.  

## Overview
[dapp_erc20](https://github.com/zombietimes/dapp_erc20) allows generating and sending your own coin on the blockchain.  
It is created as a project of Truffle framework.  
It allows accessing to Ganache(Ethereum) and Loom Network.  
It allows accessing through Express server(application server).  
[DApps : Medium](https://medium.com/swlh/understanding-dapps-decentralized-applications-8f3668ebdc9a)  
[Truffle : Official](https://truffleframework.com/)  
[Ganache : Official](https://truffleframework.com/docs/ganache/overview)  
[Loom Network SDK : Official](https://loomx.io/developers/)  
[Express : Official](https://expressjs.com/)  

## Description
Let's run and analyze the sample DApps.  
You can understand deeply by editing the sample code.  
I think that it is worth learning the smart contract development.  
I focus on Ethereum and Loom Network as the DApps.  

### Sample DApps
I created some sample smart contracts below.  
I hope to be useful to you when you develop DApps.  
- [Hello world : HelloZombies.sol](https://github.com/zombietimes/dapp_helloWorld)
- [ERC20 : Coin20.sol](https://github.com/zombietimes/dapp_erc20) : Here!
- [ERC721 : Asset721.sol](https://github.com/zombietimes/dapp_erc721)
- [Multi contract : ImportZombies.sol](https://github.com/zombietimes/dapp_multiContract)
- [Sending Ether](https://github.com/zombietimes/dapp_sendEther)

### Setting up the development environment.
The script file [setup0000_all](https://github.com/zombietimes/setup0000_all) is useful to set up the development environment.  
It consists of the external script files below.  
[setup0000_all](https://github.com/zombietimes/setup0000_all)  

### Environment
This script file is for Ubuntu(Linux).  
I recommend that you use VirtualBox + Ubuntu.  

## Usage
After setting up the development environment by [setup0000_all](https://github.com/zombietimes/setup0000_all),  
run `ubuntuCmd_setupDapp_coin20.sh` on Ubuntu console window.  
You can compile and deploy the sample contract by Truffle framwork.  
And then, you can access it on the blockchain  
through Express server from the browser.  

### Compile and deploy to Ganache
At first, we have to compile and deploy the smart contract.  
The role of `ubuntuCmd_setupDapp_coin20.sh` is below.  
- Copy the smart contract to Truffle project.
- Compile and deploy by using Truffle commands.
- Run Truffle console to Ganache(Ethereum private test network).
- Create Express project to run the smart contract through web server.
```sh
# Ubuntu commands.
git clone https://github.com/zombietimes/dapp_erc20.git
cd dapp_erc20
sh ./ubuntuCmd_setupDapp_coin20.sh
```
![dapp_erc20_0000.png]()
After running Ganache, press the Enter key.  
![dapp_erc20_0001.png]()  
![dapp_erc20_0002.png]()  

### Truffle console to Ganache
The next step is the operation on Truffle console.  
Confirm to send some original coin.  
The original coin is sent from accounts[0] to accounts[1].  
```sh
# Truffle commands.
Coin20.address
Coin20.deployed().then(ret=>instance=ret)
instance.name()
```
![dapp_erc20_0003.png]()  
![dapp_erc20_0004.png]()  
The balace of accounts[0](0x655...) is 10000.   
```sh
web3.eth.getAccounts().then(ret=>accounts=ret)
addr0 = accounts[0]
addr1 = accounts[1]
instance.balanceOf(addr0).then(ret=>ret.toString())
```
![dapp_erc20_0005.png]()  
Send 200 from accounts[0](0x655) to accounts[1](0x576).  
```sh
instance.transfer(addr1,200)
```
![dapp_erc20_0006.png]()  
Sent to 200.  
The balace of accounts[0](0x655...) is 9800.   
The balace of accounts[1](0x576...) is 200.   
```sh
instance.balanceOf(addr0).then(ret=>ret.toString())
instance.balanceOf(addr1).then(ret=>ret.toString())
.exit
```
![dapp_erc20_0007.png]()  

### Web server to Ganache
The next step is the operation on Ubuntu console.  
`to_coin20.js` is the sample code written by node.js.  
You can send some original coin by using it.  
```sh
# Ubuntu commands.
cd ~/dapps/deploy/by_truffle/accessor
node ./to_coin20.js
```
![dapp_erc20_0008.png]()  

### Browser to Web server to Ganache
The final step is web browsing.  
You can send some original coin by accessing to the web server.  
See the console window in the developer tool of the browser.  
```sh
# Ubuntu commands.
cd ~/dapps/web/by_express/coin20
node ./bin/www
```
```sh
# Browser.
http://127.0.0.1:3000
```
![dapp_erc20_0009.png]()  
![dapp_erc20_0010.png]()  

## Requirement
I confirmed that it works on Ubuntu Desktop 18.04 in VirtualBox.  
It works on the environment below.  
- On Ubuntu.
- Google Chrome.
- [setup0000_all](https://github.com/zombietimes/setup0000_all)

## Relative links
### Overview
[Ethereum : Official](https://www.ethereum.org/)  
[Ethereum : Wikipedia](https://en.wikipedia.org/wiki/Ethereum)  
[Loom Network : Official](https://loomx.io/)  
[Loom Network : Binance wiki](https://info.binance.com/en/currencies/loom-network)  

### Development
[Online editor : EthFiddle](https://ethfiddle.com/)  
[Online editor : Remix](https://remix.ethereum.org/)  

### Learning
[Online learning : CryptoZombies](https://cryptozombies.io/)  
[Grammar : Solidity](https://solidity.readthedocs.io/)  
[Grammar : Best Practices](https://github.com/ConsenSys/smart-contract-best-practices)  

### DApps
[DApps : CryptoKitties](https://www.cryptokitties.co/)  
[DApps : Zombie Battle ground](https://loom.games/en/)  

## Messages
Do you believe that the decentralized world is coming?  
When do you use [DApps](https://en.wikipedia.org/wiki/Decentralized_application)?  
Why?  

## License
BSD 3-Clause, see `LICENSE` file for details.  

---
Produced by Zombie Times  

