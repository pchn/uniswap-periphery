import "@nomiclabs/hardhat-ethers"
import "@nomiclabs/hardhat-etherscan"
import "@nomiclabs/hardhat-waffle"
import "@openzeppelin/hardhat-upgrades"

import "hardhat-contract-sizer"
import "solidity-coverage"

module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.6.6",
        settings: {
          optimizer: { enabled: true, runs: 100 }
        },
      },
    ],
  },
  contractSizer: {
    alphaSort: false,
    disambiguatePaths: false,
    runOnCompile: true,
    strict: false,
  },
  networks: {
    hardhat: {
      allowUnlimitedContractSize: true
    },
    mainnet: {
      url: "https://1rpc.io/eth"
    },
    sepolia: {
      url: "https://sepolia.infura.io/v3/24be90dff1774812a885ec96c123bb81",

      chainId: 11155111,
      gasPrice: 18886948831
    },
    milkomedaCardano: {
      url: "https://rpc-mainnet-cardano-evm.c1.milkomeda.com",

      chainId: 2001,
      gasPrice: 60000000000,
    },
    milkomedaCardanoTestnet: {
      url: "https://rpc-devnet-cardano-evm.c1.milkomeda.com",

      chainId: 200101,
      gasPrice: 70000000000,
    },
    bobMainnet: {
      url: "https://bobmainnet.svc.blueshift.fi:8445",

      chainId: 60808,
      gasPrice: 100000000
    },
    berachainTestnet: {
      url: "https://artio.rpc.berachain.com/",

      chainId: 80085,
      gasPrice: 5094270848
    },
    hekla: {
      url: "https://rpc.ankr.com/taiko_hekla",

      chainId: 167009,
      gasPrice: 4
    },
    taiko: {
      url: "https://rpc.ankr.com/taiko",

      chainId: 167000,
      gasPrice: 12000000
    },
    linea: {
      url: "https://linea-mainnet.g.alchemy.com/v2/1Rndufw1i1ornZFrIRB2EGvJg9YQFLUR",

      chainId: 59144,
      gasPrice: 60000000
    },
    lineaTestnet: {
      url: "https://linea-sepolia.blockpi.network/v1/rpc/public",

      chainId: 59141,
      gasPrice: 1100000000
    },
    polygon: {
      url: "https://polygon-rpc.com/",

      chainId: 137,
      gasPrice: 31000000000
    },
    polygonTestnet: {
      url: "https://rpc.ankr.com/polygon_amoy",

      chainId: 80002,
      gasPrice: 50000000000
    }
  }
}

