import "hardhat-deploy"
import "@nomiclabs/hardhat-ethers"
import "@typechain/hardhat"
import { HardhatUserConfig } from "hardhat/config"


const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  networks: {
    //when you run test
    hardhat: {
      chainId: 31337,
    },
    //when you run 'yarn hardhat node'
    localhost: {
      chainId: 31337,
    },
  },
  solidity: "0.8.8",
  namedAccounts: {
    deployer: {
      default: 0,
    },
  },
}
export default config
