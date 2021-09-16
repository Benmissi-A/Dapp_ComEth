import React, { createContext, useContext, useEffect } from "react";
import { useContract } from "web3-hooks";
import { ComEthAbi } from "../contracts/comEth";

export const ComEthContext = createContext(null);

export const useComEth = () => {
  const comEthContext = useContext(ComEthContext);
  if (comEthContext === undefined) {
    throw new Error(
      `It seems that you are trying to use ComEthFactoryContext outside of its provider`
    );
  }
  return comEthContext;
};

export const ComEthContextProvider = ({ comEthAdr, children }) => {
  
  if(comEthAdr === null){
    comEthAdr = JSON.parse(localStorage.getItem("AddressComEth"))
  }
  const comEth = useContract(comEthAdr, ComEthAbi);


  useEffect(() => {
    console.log("ComEthContextProvider", comEthAdr);
  });

  return (
    <ComEthContext.Provider value={comEth}>{children}</ComEthContext.Provider>
  );
};
