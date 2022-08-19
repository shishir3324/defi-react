import React, {useContext} from 'react';
import { TokenContext } from './TokenContext'
import TokenContainer from "./TokenContainer";
import AllocateAmount from "./AllocateAmount";


function App() {
  const {switchContainer} = useContext(TokenContext)

  return (
        <div className="flex justify-center pt-5">
            <div className="w-full lg:w-4/12 p-6 pt-12 token-con">

            {switchContainer ? <TokenContainer /> : <AllocateAmount />}

            </div>
        </div>
  );
}

export default App;
