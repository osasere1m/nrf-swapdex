import type { Address } from "wagmi";

export const MAX_ALLOWANCE =
  115792089237316195423570985008687907853269984665640564039457584007913129639935n;

export const exchangeProxy = "0xDef1C0ded9bec7F1a1670819833240f027b25EfF";

/* type Token = {
  address: Address;
}; */

interface Token {
  name: string;
  address: Address;
  symbol: string;
  decimals: number;
  chainId: number;
  logoURI: string;
}

export const POLYGON_TOKENS: Token[] = [
  {
    chainId: 137,
    name: "Wrapped Matic",
    symbol: "WMATIC",
    decimals: 18,
    address: "0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270",
    logoURI:
      "https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/polygon/assets/0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270/logo.png",
  },
  {
    chainId: 137,
    name: "Dai - PoS",
    symbol: "DAI",
    decimals: 18,
    address: "0x8f3cf7ad23cd3cadbd9735aff958023239c6a063",
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png",
  },
  {
    chainId: 137,
    name: "USD Coin",
    symbol: "USDC",
    decimals: 6,
    address: "0x2791bca1f2de4661ed88a30c99a7a9449aa84174",
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png",
  },
  {
    chainId: 137,
    name: "Uniswap",
    symbol: "UNI",
    decimals: 18,
    address: "0xb33eaad8d922b1083446dc23f610c2567fb5180f",
    logoURI: "ipfs://QmXttGpZrECX5qCyXbBQiqgQNytVGeZW5Anewvh2jc4psg",
  },
  {
    chainId: 137,
    name: "Tether USD - PoS",
    symbol: "USDT",
    decimals: 6,
    address: "0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
    logoURI:
      "https://raw.githubusercontent.com/maticnetwork/polygon-token-assets/main/assets/tokenAssets/usdt.svg",
  },
  {
    chainId: 137,
    name: "ChainLink Token",
    symbol: "LINK",
    decimals: 18,
    address: "0x53E0bca35eC356BD5ddDFebbD1Fc0fD03FaBad39",
    logoURI:
      "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x514910771AF9Ca656af840dff83E8264EcF986CA/logo.png",
  },{
    chainId: 137,
    name: "Aave",
    symbol: "AAVE",
    decimals: 18,
    address: "0xD6DF932A45C0f255f85145f286eA0b292B21C90B",
    logoURI:
      "https://etherscan.io/token/images/aave_32.png",
  },{
    chainId: 137,
    name: "LUNA",
    symbol: "LUNA",
    decimals: 6,
    address: "0x9cd6746665D9557e1B9a775819625711d0693439",
    logoURI:
      "https://assets.coingecko.com/coins/images/8284/small/luna1557227471663.png?1567147072",
  },{
    name: "Binance Token",
    address: "0x5c4b7CCBF908E64F32e12c6650ec0C96d717f03F",
    symbol: "BNB",
    decimals: 18,
    chainId: 137,
    logoURI: "https://assets.coingecko.com/coins/images/825/small/binance-coin-logo.png?1547034615"
  },
];

export const POLYGON_TOKENS_BY_SYMBOL: Record<string, Token> = {
  wmatic: {
    chainId: 137,
    name: "Wrapped Matic",
    symbol: "WMATIC",
    decimals: 18,
    address: "0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270",
    logoURI:
      "https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/polygon/assets/0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270/logo.png",
  },
  dai: {
    chainId: 137,
    name: "Dai - PoS",
    symbol: "DAI",
    decimals: 18,
    address: "0x8f3cf7ad23cd3cadbd9735aff958023239c6a063",
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png",
  },
  usdc: {
    chainId: 137,
    name: "USD Coin",
    symbol: "USDC",
    decimals: 6,
    address: "0x2791bca1f2de4661ed88a30c99a7a9449aa84174",
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png",
  },
  uni: {
    chainId: 137,
    name: "Uniswap",
    symbol: "UNI",
    decimals: 18,
    address: "0xb33eaad8d922b1083446dc23f610c2567fb5180f",
    logoURI: "ipfs://QmXttGpZrECX5qCyXbBQiqgQNytVGeZW5Anewvh2jc4psg",
  },
  usdt: {
    chainId: 137,
    name: "Tether USD - PoS",
    symbol: "USDT",
    decimals: 6,
    address: "0xc2132D05D31c914a87C6611C10748AEb04B58e8F",
    logoURI:
      "https://raw.githubusercontent.com/maticnetwork/polygon-token-assets/main/assets/tokenAssets/usdt.svg",
  },
  link: {
    chainId: 137,
    name: "ChainLink Token",
    symbol: "LINK",
    decimals: 18,
    address: "0x53E0bca35eC356BD5ddDFebbD1Fc0fD03FaBad39",
    logoURI:
      "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x514910771AF9Ca656af840dff83E8264EcF986CA/logo.png",
  },
  aave: {
    chainId: 137,
    name: "Aave (PoS)",
    symbol: "AAVE",
    decimals: 18,
    address: "0xD6DF932A45C0f255f85145f286eA0b292B21C90B",
    logoURI:
      "https://assets-cdn.trustwallet.com/blockchains/polygon/assets/0xD6DF932A45C0f255f85145f286eA0b292B21C90B/logo.png",
  },
  luna: {
    chainId: 137,
    name: "LUNA",
    symbol: "LUNA",
    decimals: 6,
    address: "0x9cd6746665D9557e1B9a775819625711d0693439",
    logoURI:
      "https://assets.coingecko.com/coins/images/8284/small/luna1557227471663.png?1567147072",
  },
  bnb: {
    name: "Binance Token",
    address: "0x5c4b7CCBF908E64F32e12c6650ec0C96d717f03F",
    symbol: "BNB",
    decimals: 18,
    chainId: 137,
    logoURI: "https://assets.coingecko.com/coins/images/825/small/binance-coin-logo.png?1547034615"
  },
};

export const POLYGON_TOKENS_BY_ADDRESS: Record<string, Token> = {
  "0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270": {
    chainId: 137,
    name: "Wrapped Matic",
    symbol: "WMATIC",
    decimals: 18,
    address: "0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270",
    logoURI:
      "https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/polygon/assets/0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270/logo.png",
  },
  "0x8f3cf7ad23cd3cadbd9735aff958023239c6a063": {
    chainId: 137,
    name: "DAI - PoS",
    symbol: "DAI",
    decimals: 18,
    address: "0x8f3cf7ad23cd3cadbd9735aff958023239c6a063",
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png",
  },
  "0x2791bca1f2de4661ed88a30c99a7a9449aa84174": {
    chainId: 137,
    name: "USD Coin",
    symbol: "USDC",
    decimals: 6,
    address: "0x2791bca1f2de4661ed88a30c99a7a9449aa84174",
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png",
  },
  "0xb33eaad8d922b1083446dc23f610c2567fb5180f": {
    chainId: 137,
    name: "Uniswap",
    symbol: "UNI",
    decimals: 18,
    address: "0xb33eaad8d922b1083446dc23f610c2567fb5180f",
    logoURI: "ipfs://QmXttGpZrECX5qCyXbBQiqgQNytVGeZW5Anewvh2jc4psg",
  },
  "0xc2132d05d31c914a87c6611c10748aeb04b58e8f": {
    chainId: 137,
    name: "Tether USD - PoS",
    symbol: "USDT",
    decimals: 6,
    address: "0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
    logoURI:
      "https://raw.githubusercontent.com/maticnetwork/polygon-token-assets/main/assets/tokenAssets/usdt.svg",
  },
  "0x53E0bca35eC356BD5ddDFebbD1Fc0fD03FaBad39": {
    chainId: 137,
    name: "ChainLink Token",
    symbol: "LINK",
    decimals: 18,
    address: "0x53E0bca35eC356BD5ddDFebbD1Fc0fD03FaBad39",
    logoURI:
      "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x514910771AF9Ca656af840dff83E8264EcF986CA/logo.png",
  },
  "0xD6DF932A45C0f255f85145f286eA0b292B21C90B": {
    chainId: 137,
    name: "Aave (PoS)",
    symbol: "AAVE",
    decimals: 18,
    address: "0xD6DF932A45C0f255f85145f286eA0b292B21C90B",
    logoURI:
      "https://assets-cdn.trustwallet.com/blockchains/polygon/assets/0xD6DF932A45C0f255f85145f286eA0b292B21C90B/logo.png",
  },
  "0x9cd6746665D9557e1B9a775819625711d0693439": {
    chainId: 137,
    name: "LUNA",
    symbol: "LUNA",
    decimals: 6,
    address: "0x9cd6746665D9557e1B9a775819625711d0693439",
    logoURI:
      "https://assets.coingecko.com/coins/images/8284/small/luna1557227471663.png?1567147072",
  },
  "0x5c4b7CCBF908E64F32e12c6650ec0C96d717f03F": {
    name: "Binance Token",
    address: "0x5c4b7CCBF908E64F32e12c6650ec0C96d717f03F",
    symbol: "BNB",
    decimals: 18,
    chainId: 137,
    logoURI: "https://assets.coingecko.com/coins/images/825/small/binance-coin-logo.png?1547034615"
  },
};
