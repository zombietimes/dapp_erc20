const sol = artifacts.require('Coin20.sol');
contract('Coin20', function (accounts){
  it("contract name:",async()=>{
    const instance = await sol.deployed();
    const name = await instance.name();
    assert.equal(name,"Coin20","The name is not correct.");
  });
  it("balance of accounts[0]:",async()=>{
    const instance = await sol.deployed();
    const balance0 = await instance.balanceOf(accounts[0]).then(ret=>ret.toString());
    assert.equal(balance0,10000,"The balance of accounts[0] is not correct.");
  });
  it("transfer:",async()=>{
    const instance = await sol.deployed();
    await instance.transfer(accounts[1],200);
    const balance0 = await instance.balanceOf(accounts[0]).then(ret=>ret.toString());
    assert.equal(balance0,9800,"The balance of accounts[0] is not correct.");
    const balance1 = await instance.balanceOf(accounts[1]).then(ret=>ret.toString());
    assert.equal(balance1,200,"The balance of accounts[1] is not correct.");
  });
});



