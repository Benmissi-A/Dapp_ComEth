import React, { useEffect, useState } from "react";
import Dapp from "./Dapp";
import { useContract } from "web3-hooks";
import {
  ComEthFactoryAdress,
  ComEthFactoryAbi,
} from "./contracts/comEthFactory";

export const ComEthAddressContext = React.createContext(null);
export const ComEthFactoryContext = React.createContext(null);

function App() {
  const [comEthAddress, setComEthAddress] = useState(null);

  const comEthFactory = useContract(ComEthFactoryAdress, ComEthFactoryAbi);

  useEffect(() => {
    console.log("app context comEthAddress", comEthAddress);
  }, [comEthAddress]);

  return (
    <>
      <ComEthFactoryContext.Provider value={comEthFactory}>
        <ComEthAddressContext.Provider
          value={{ comEthAddress, setComEthAddress }}
        >
          <Dapp comEthAdr={comEthAddress} />
        </ComEthAddressContext.Provider>
      </ComEthFactoryContext.Provider>
    </>
  );
}

export default App;
