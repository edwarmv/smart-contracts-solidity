const HDWalletProvider = require("@truffle/hdwallet-provider");
const { Web3 } = require("web3");
const { interface, bytecode } = require("./compile");

const provider = new HDWalletProvider(
  "journey wheel demise taste agent shoulder tuna car soon face melt barrel",
  "https://sepolia.infura.io/v3/f3493db1381e407883aecbb5e010ff18",
);

const web3 = new Web3(provider);

(async () => {
  const accounts = await web3.eth.getAccounts();

  console.log("Attempting to deploy from account", accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({
      data: bytecode,
      arguments: ["Hi there!"],
    })
    .send({ gas: "1000000", from: accounts[0] });

  console.log("Contract deployed to", result.options.address);

  provider.engine.stop();
})();
