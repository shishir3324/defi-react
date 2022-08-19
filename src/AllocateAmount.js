import React, {useContext, useRef} from 'react';
import { TokenContext } from './TokenContext';

const AllocateAmount = () => {

    const {selectedTokens, backBtn, createAIP} = useContext(TokenContext)
    const inputRef = useRef()

    return ( 
        <>
            <div onClick={backBtn} className='border-slate-300 border-2 w-16 px-2 py-2 rounded-md' 
            style={{userSelect: "none", cursor: "pointer"}}>
                Back
            </div>

            <div className={`grid my-7 grid-cols-${selectedTokens.length}`}>
            {selectedTokens.map((token, index) => {
                const chunkStyle = token === null ? "sm-chunk" : "token-chunk"
                return (
                    <div key={index.toString()} className="flex items-center flex-col">
                        <div className={`${chunkStyle} rounded-lg mb-4`}>
                            
                           <img src={token.img} className="w-full"/>

                        </div>
                        <h5>{token.name}</h5>
                        <h3>{token.percentage}%</h3>
                    </div>
                )
            })}
            </div>

            <div>
                <label>Amount</label>
                <div className="flex py-2 border-slate-300 border-2 rounded-lg">
                    <div className="me-3 flex items-center w-3/12">
                        <img src="https://www.vauld.com/assets/coins/inr.svg" />
                        <p>INR</p>
                    </div>
                    <div className='w-9/12'>
                        <input type="number" placeholder='Enter Amount' 
                        className='py-3 w-full' ref={inputRef} />
                    </div>
                </div>
            </div>

            <div className='flex flex-col items-center mt-5'>
            <button onClick={() => createAIP(inputRef.current.value)} 
            className='px-4 py-3 bg-cyan-500 text-white text-lg font-bold w-5/12 tracking-wider'>
                <span>Create AIP</span>
            </button>
            <span className='text-slate-800 italic mt-2'>(look at the console)</span>
            </div>

        </>
     );
}
 
export default AllocateAmount;