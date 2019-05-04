// This script is for client-side javascript.

(async function (){
//  const accessor = require('./accessor_web3.js')("client_side","ganache");

  const contractName = "Coin20";
  const instance = await accessor.GetContract(contractName);
  console.log(contractName);

  const accounts = await accessor.GetAccounts();
  let balance0 = 0;
  let balance1 = 0;
  console.log("accounts[0]: " + accounts[0]);
  console.log("accounts[1]: " + accounts[1]);

  balance0 = await instance.methods.balanceOf(accounts[0]).call().then(ret=>ret.toString());
  console.log("balance of accounts[0]: " + balance0);

  await instance.methods.transfer(accounts[1],200).send();
  console.log("transfer accounts[0] to accounts[1]: 200");

  balance0 = await instance.methods.balanceOf(accounts[0]).call().then(ret=>ret.toString());
  console.log("balance of accounts[0]: " + balance0);

  balance1 = await instance.methods.balanceOf(accounts[1]).call().then(ret=>ret.toString());
  console.log("balance of accounts[1]: " + balance1);
})();

