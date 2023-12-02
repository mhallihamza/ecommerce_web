"use client"
import { createContext, useState } from "react";

interface SideCartContextProps {
    showcart: boolean;
    handleClick: () => void;
  }

export const SideCartContext = createContext<SideCartContextProps | undefined>(undefined);

export  function SideCartContextProvider({
    children,
  }: {
    children: React.ReactNode
  }) {
    const [showcart,setShowCart] = useState(false);
    const handleClick = () => {
        setShowCart(prev=>!prev);
    }
  return (
    <SideCartContext.Provider value={{showcart,handleClick}}>
        {children}
    </SideCartContext.Provider>
  )
}