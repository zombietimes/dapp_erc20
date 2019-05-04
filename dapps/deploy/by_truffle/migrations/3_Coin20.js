const sol = artifacts.require("./Coin20.sol");
module.exports = async(deployer, network, accounts) => {
 　const name = "Coin20";
  const symbol = "ZT";
  const decimals = 0;
  const amount = 10000;
  await deployer.deploy(
    sol,
    name,
    symbol,
    decimals,
    amount
  );
};


