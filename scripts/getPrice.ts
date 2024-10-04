import { ethers } from "hardhat";

const hre = require("hardhat");

/* FILL THIS FIRST */
const routerAddress = "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D"
const tokenInAddress = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"// WETH
const tokenOutAddress = "0xdAC17F958D2ee523a2206206994597C13D831ec7"// USDT
/* --------------- */

async function main() {
    const router = await ethers.getContractAt("UniswapV2Router02", routerAddress)

    const tokenIn = await ethers.getContractAt("ERC20", tokenInAddress)
    const tokenOut = await ethers.getContractAt("ERC20", tokenOutAddress)

    const decimalsIn = await tokenIn.decimals()
    const decimalsOut = await tokenOut.decimals()

    const amountIn = ethers.utils.parseUnits("1", decimalsIn)

    const amounts = await router.getAmountsOut(
        amountIn,
        [
            tokenInAddress,
            tokenOutAddress
        ]
    )


    console.log(`Price: 1 ${await tokenIn.symbol()} = ${ethers.utils.formatUnits(amounts[amounts.length - 1], decimalsOut)} ${await tokenOut.symbol()}`)
}


main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
