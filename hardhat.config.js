require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  defaultNetwork: "amoy",
  networks: {
    hardhat: {},
    amoy: {
      url: "https://rpc-amoy.polygon.technology/",
      accounts: [process.env.PRIVATE_KEY],
      gasPrice: 30000000000,
      gas: 25e6,
    },
  },
  etherscan: {
    apiKey: process.env.POLYGONSCAN_API_KEY,
  },
  solidity: {
    version: "0.8.8",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
