import React, {createContext, useState} from "react";
import { TOKENS } from "./tokens";

const TOKEN_COLS = 5

export const TokenContext = createContext()

const TokenContextProvider = (props) => {

    // let [tokens, setTokens] = useState(TOKENS)
    let [selectedTokens, setSelectedToken] = useState([])
    let [switchContainer, setSwitchContainer] = useState(true)

    const allocatePercentage = () => {
        const tokenLength = selectedTokens.length
        if(tokenLength <= 0) return

        let selTokenList = [...selectedTokens]

        const tokenPercentage = Math.floor(100 / tokenLength)
        const leftTokenPercentage = 100 - (tokenLength * tokenPercentage)

        selTokenList.forEach((el, index) => {
            el.percentage = index === tokenLength - 1 ? tokenPercentage + leftTokenPercentage : tokenPercentage
        })

        // console.log("selected token list" , selTokenList)

        setSwitchContainer(false)

        
    }

    const addToken = (name) => {
        
        let selTokenList = [...selectedTokens]
        let token = {...TOKENS.filter(el => el.name === name)[0]}

        delete token.selected

        let tokenPresent = selTokenList.filter(el => el.name === token.name)[0] // selected

        if(!tokenPresent) {
            if(selTokenList.length >= TOKEN_COLS) return
            selTokenList.push(token)
            setSelectedToken(selTokenList)
        } else {
            let tIndex = selTokenList.indexOf(tokenPresent)
            selTokenList.splice(tIndex, 1)
            setSelectedToken(selTokenList)
        }



    }

    const backBtn = () => {
        const selTokenList = [...selectedTokens]
        selTokenList.forEach(el => delete el["percentage"])
        setSelectedToken(selTokenList)
        setSwitchContainer(true)
    }

    const createAIP = (value) => {
        console.log("create AIP result", {selectedTokens, amount: Number(value)})
    }

    const values = {
        tokens: TOKENS, selectedTokens, addToken, switchContainer, 
        allocatePercentage, backBtn, createAIP}

    return ( 
        <TokenContext.Provider value={values}>
            {props.children}
        </TokenContext.Provider>
     );
}
 
export default TokenContextProvider;