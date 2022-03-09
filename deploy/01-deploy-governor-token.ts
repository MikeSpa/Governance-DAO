import { HardhatRuntimeEnvironment } from "hardhat/types"
import { DeployFunction } from "hardhat-deploy/types"

const deployGovernanceToken: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    const { getNamedAccounts, deployments, network } = hre //hardhat.config.ts
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts() //grab deployer account from config
    log("Deploying GovernanceToken")
    const governanceToken = await deploy("GovernanceToken", {
        from: deployer,
        args: [],
        log: true,
        //wait confirmations
    })
    log(`GovernanceToken deployed at ${governanceToken.address}`)
}

export default deployGovernanceToken