require('dotenv').config()
var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = process.env.TRUFFLE_MNEMONIC;

module.exports = {
  networks: {
    development: {
      host: '127.0.0.1',
      port: 8545,
      network_id: '*', // Match any network id
    },
    leprichain: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://node.leprichain.blockwell.ai");
      },
      network_id: 49777
    }
  },
  // config custom test folder for smart contracts
  test_directory: './tests/contracts',
  // Configure your compilers
  compilers: {
    solc: {
      version: '0.6.2', // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      settings: {          // See the solidity docs for advice about optimization and evmVersion
        optimizer: {
          enabled: true,
          runs: 200
        }
      //evmVersion: "byzantium"
      }
    },
  },
};
