import React, {useContext, useEffect} from 'react';
import { TokenContext } from './TokenContext';
import "./styles.css"

const TOKEN_COLS = 5

const TokenContainer = () => {
    const {tokens, selectedTokens, addToken, allocatePercentage} = useContext(TokenContext)

    const emptySlots = new Array(TOKEN_COLS).fill(null)
    selectedTokens.forEach((el, index) => emptySlots[index] = el)

    // console.log(selectedTokens)


    return ( 
        <>
        <div className={`grid grid-cols-${TOKEN_COLS} mb-6`}>
            {emptySlots.map((slot, index) => {
                const chunkStyle = slot === null ? "sm-chunk" : "token-chunk"
                return (
                    <div key={index.toString()} className="flex items-center flex-col">
                        <div onClick={() => addToken(slot.name)}
                            className={`${chunkStyle} rounded-lg mb-4`}>
                            
                            {slot !== null && <img src={slot.img} className="w-full"/>}

                        </div>
                        {slot !== null && <h5>{slot.name}</h5>}
                    </div>
                )

            })}
        </div>

        <h5 className='text-md mb-3 text-gray-500'>Select Your Tokens</h5>
        
        <div className={`grid grid-cols-${TOKEN_COLS}`}>
            {tokens.map((tk, index) => {
                const token = {...tk}
                const tokenNames = selectedTokens.map(el => el.name)
                if(tokenNames.includes(token.name)) token.selected = true
                else token.selected = false

                let chunkStyle = token.selected ? 'bg-gray-100 opacity-75' : ''
                return (
                    <div key={index.toString()} className={`flex items-center flex-col mb-5`}>
                        <div onClick={() => addToken(token.name)}
                            className={`token-chunk rounded-lg mb-4 ${chunkStyle}`}>
                            <img src={token.img} className="w-full"/>
                        </div>
                        <h5>{token.name}</h5>
                    </div>
                )

            })}
        </div>

        <div className='flex justify-center mt-6'>
            <button onClick={allocatePercentage} className='px-4 py-3 bg-cyan-500 text-white text-lg font-bold uppercase tracking-wide'>
                <span>Create Allocation</span>
            </button>
        </div>
          </>
     );
}
 
export default TokenContainer;