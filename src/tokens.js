let tokens = [
    {name: "ETH", img: "https://www.vauld.com/assets/coins/eth.svg"},
    {name: "BTC", img: "https://www.vauld.com/assets/coins/btc.svg"},
    {name: "MATIC", img: "https://www.vauld.com/assets/coins/matic.svg"},
    {name: "FTT", img: "https://www.vauld.com/assets/coins/ftt.svg"},
    {name: "USDC", img: "https://www.vauld.com/assets/coins/usdc.svg"},
    {name: "AAVE", img: "https://www.vauld.com/assets/coins/aave.svg"},
    {name: "LINK", img: "https://www.vauld.com/assets/coins/link.svg"},
    {name: "MANA", img: "https://www.vauld.com/assets/coins/mana.svg"},
    {name: "GRT", img: "https://www.vauld.com/assets/coins/grt.svg"},
    {name: "DOT", img: "https://www.vauld.com/assets/coins/dot.svg"},
    {name: "CRV", img: "https://www.vauld.com/assets/coins/crv.svg"},
    {name: "UNI", img: "https://www.vauld.com/assets/coins/uni.svg"},
    {name: "BNB", img: "https://www.vauld.com/assets/coins/bnb.svg"},
    {name: "XRP", img: "https://www.vauld.com/assets/coins/xrp.svg"},
    {name: "BUSD", img: "https://www.vauld.com/assets/coins/busd.svg"},
]

export const TOKENS = tokens.map((el) => ({ name: el.name, img: el.img, selected: false}))