import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { createContext } from 'react'


const Crypto=createContext()
const Context = ({ children }) =>
{
  const [currency, setCurrency] = useState("INR");
  const [symbol, setSymbol] = useState("₹");

  useEffect(() => {
    if (currency === "INR") setSymbol("₹");
  }, [currency]);


  return (
      <Crypto.Provider value={{currency,symbol,setCurrency}}>
          {children}
    </Crypto.Provider>
  )
}

export default Context

export const CryptoState = () => {
    return useContext(Crypto);
}
