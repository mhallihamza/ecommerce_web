"use client"
import React, { useContext, useEffect, useState } from 'react'
import Link from 'next/link'
import { AuthContext } from '@/context/AuthContext';
import { SiFacebook } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";
import { Poppins } from 'next/font/google';
import { ShowContext } from '@/context/ShowContext';
import axios from 'axios';

interface ShowContextProps {
  showcart: boolean;
  showlogin: boolean;
  showsignup: boolean;
  handleClick: () => void;
  handleLoginClick: () => void;
  handleSignupClick : () => void;
}

const poppins = Poppins({
  weight: '700',
  subsets: ['latin'],
  display: 'swap',
});

function Login() {
  const [credentials, setcredentials] = useState({
    email : undefined,
    password : undefined
 });
  const { showlogin, handleLoginClick, showsignup, handleSignupClick } = useContext(ShowContext) as ShowContextProps;
  const {user,loading,error,dispatch} = useContext(AuthContext);
  const handleChange =  (e:any)=>{
    setcredentials((prev)=> ({ ...prev, [e.target.id]:e.target.value}))
};
  useEffect(() => {
    // Disable/Enable scroll based on showLogin
    if (showlogin) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }

    // Clean up the effect
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, [showlogin]);
  const handleClick = () => {
    handleLoginClick();
    handleSignupClick();
  }
  const handleSubmit = (e:any) => {
    e.preventDefault();
    dispatch({type: "LOGIN_START"});
  
    axios.post("api/auth", credentials)
      .then(res => {
        dispatch({type: "LOGIN_SUCCESS", payload: res.data});
        handleLoginClick();
      })
      .catch(err => {
        dispatch({type: "LOGIN_FAILURE", payload: err.response.data});
      });
  }
  return (
    <div className={`relative ${showlogin ? '' : 'hidden'} z-20`} aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
      {/* Background Overlay without scroll */}
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      {/* Container for Modal Content */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none">
        {/* Modal Content */}
        <div className="pointer-events-auto w-screen max-w-md overflow-auto bg-[#FFF] rounded-lg p-5">
          <div className='flex pb-4 border-b border-[#D9D9D9] justify-between'>
            <h1 className={`font-medium text-base ${poppins.className} text-gray-900`}>Connectez-vous</h1>
            <button onClick={handleLoginClick} className='text-gray-400'>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className='pt-4'>
            <form>
              <input onChange={handleChange} id='email' type='text' placeholder='Adresse email' className='w-full mb-3 rounded py-2 border border-[#D9D9D9] px-2' required></input>
              <input onChange={handleChange} id='password' type='password' placeholder='Mot de passe' className='w-full mb-3 rounded py-2 border border-[#D9D9D9] px-2' required></input>
              <div className='flex py-5 justify-between'>
                <div className='flex gap-2'>
                  <input id='stay_connect' className='cursor-pointer border-2 h-4 w-4' type='checkbox'></input>
                  <label className='text-[#484A54] cursor-pointer text-xs' htmlFor='stay_connect'>Resté connecté</label>
                </div>
                <Link href="#" className='text-[#484A54] text-xs'>Mot de passe oublié ?</Link>
              </div>
              <button onClick={handleSubmit} className='bg-blue-500 text-base font-medium my-2 rounded-3xl py-3 w-full text-white'>ME CONNECTER</button>
              { error && <span>{error.message}</span> }
            </form>
            <div className='flex flex-col justify-center'>
              <div className="flex mb-8">
                <div className="border-b border-gray-300 flex-grow mr-1"></div>
                <p className="text-lg relative top-3 font-semibold text-[#D9D9D9]">Ou</p>
                <div className="border-b border-gray-300 flex-grow ml-1"></div>
              </div>
              <button className='rounded-3xl mb-2 py-3 font-medium w-full relative border text-sm'><SiFacebook className='text-blue-500 top-2 left-3 absolute h-6 w-6' /><span>Connectez-vous avec Facebook</span></button>
              <button className='rounded-3xl mb-2 py-3 font-medium w-full border relative text-sm'><FcGoogle className='h-6 absolute top-2 left-3 w-6' /><span>Connectez-vous avec Google</span></button>
              <button onClick={handleClick} className='font-semibold text-red-500'><u>Inscrivez-vous</u></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login