import { BigNumber } from "ethers";

export const tokens = (n: number, decimals = 18): BigNumber => { return BigNumber.from(10).pow(decimals).mul(n) }