"use client"
import { createContext, useState } from "react";

interface ShowContextProps {
    showcart: boolean;
    showlogin: boolean;
    showsignup: boolean;
    handleClick: () => void;
    handleLoginClick: () => void;
    handleSignupClick : () => void;
  }

export const ShowContext = createContext<ShowContextProps | undefined>(undefined);

export  function ShowContextProvider({
    children,
  }: {
    children: React.ReactNode
  }) {
    const [showcart,setShowCart] = useState(false);
    const [showlogin,setShowlogin] = useState(false);
    const [showsignup,setShowsignup] = useState(false);
    const handleClick = () => {
        setShowCart(prev=>!prev);
    }
    const handleLoginClick = () => {
      setShowlogin(prev=>!prev);
    }
    const handleSignupClick = () => {
      setShowsignup(prev=>!prev);
    }
  return (
    <ShowContext.Provider value={{showcart,handleClick,showlogin,handleLoginClick,showsignup,handleSignupClick}}>
        {children}
    </ShowContext.Provider>
  )
}