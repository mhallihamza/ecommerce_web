"use client"
import React from 'react'
import 'react-intl-tel-input-18/dist/main.css';
import { useState, useEffect, useContext } from 'react';
import { ShowContext } from '@/context/ShowContext';
import { Inter } from 'next/font/google';
import axios from 'axios';
import { SiFacebook } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";
import { IoIosWarning } from "react-icons/io";
import IntlTelInput from 'react-intl-tel-input-18';
import OtpInput from 'react-otp-input';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: '700',
  subsets: ['latin'],
  display: 'swap',
});

const inter = Inter({
  weight: '600',
  subsets: ['latin'],
  display: 'swap',
});

interface ShowContextProps {
  showcart: boolean;
  showlogin: boolean;
  showsignup: boolean;
  handleClick: () => void;
  handleLoginClick: () => void;
  handleSignupClick: () => void;
}
function Signup() {
  const [isValidPhoneNumber, setIsValidPhoneNumber] = useState<boolean>(true);
  const [otp, setOtp] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [request_id, setRequest_id] = useState('');
  const [codesent, setCodesent] = useState<boolean>(false);
  const { showsignup, handleSignupClick } = useContext(ShowContext) as ShowContextProps;
  const [isVerificationSuccessful, setIsVerificationSuccessful] = useState<null | boolean>(null);
  const [user, setUser] = useState({
    email: '',
    password: '',
    first_name: '',
    last_name: '',
    gender: 'Mr',
  });

  useEffect(() => {
    // Disable/Enable scroll based on showLogin
    if (showsignup) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }

    // Clean up the effect
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, [showsignup]);

  const handlechange = (event:any) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  }
  const handlePhoneNumberChange = async (isValid: boolean, fullNumber: string, countryData: any) => {
    const countryCode = countryData?.dialCode || ''; // Get the dialCode from countryData

    // Remove leading zero if it exists
    const cleanedNumber = fullNumber.startsWith('0') ? fullNumber.substring(1) : fullNumber;

    // Check if the cleanedNumber already includes the country code
    const phoneNumberWithCountryCode = cleanedNumber.startsWith(countryCode)
      ? `+${cleanedNumber}` // If it includes the country code, use it as is
      : `+${countryCode}${cleanedNumber}`; // Otherwise, prepend the country code

    setPhoneNumber(phoneNumberWithCountryCode);
    setIsValidPhoneNumber(isValid);
  }
  const sendcode = async (e: any) => {
    e.preventDefault(); // Prevent the default form submission behavior
    if (!isValidPhoneNumber) {
      // Handle invalid phone number
      console.error('Invalid phone number');
      return;
    }
    setCodesent(true);
    console.log(phoneNumber);
    /*axios.post('/api/send-code', {
      phone_number: phoneNumber,
    }).then((response) => {
      console.log(response);
      setCodesent(true);
      setRequest_id(response.data.request_id);

    }).catch(error => {
      console.log(error);
    }
    )*/
  };

  const verifycode = () => {
    console.log(otp);
    if (otp === '0000') {
      setIsVerificationSuccessful(true);
    } else {
      setOtp('');
      setIsVerificationSuccessful(false);
      setTimeout(() => {
        setIsVerificationSuccessful(null);
      }, 2000);
    }
    /*axios.post('/api/verify-code', {
      REQUEST_ID: request_id,
      CODE: otp
    }).then(response => {
      setOtp('');
      const verificationStatus = response.data.status;

      if (verificationStatus === '0' ) {
        setIsVerificationSuccessful(true);
      } else {
        setIsVerificationSuccessful(false);
        setTimeout(() => {
          setIsVerificationSuccessful(null);
        }, 2000);
      }
      console.log(response);

    }).catch(error => {
      console.log(error);
    }
    )*/
  }
  
  const handlesubmit = (e:any) => {
    e.preventDefault();
    console.log(user);
    axios.post('/api/users',{
      ...user,
      phone_number:phoneNumber
    }).then(response => {
      console.log("Added successfully");
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    })
  }
  return (
    <div className={`relative ${showsignup ? '' : 'hidden'} z-20`} aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
      {/* Background Overlay without scroll */}
      <div className="fixed inset-0  bg-gray-500 bg-opacity-75 transition-opacity"></div>

      {/* Container for Modal Content */}
      <div className="fixed inset-0 overflow-auto flex items-center justify-center">
        {/* Modal Content */}
        <div className='pointer-events-auto absolute top-16 w-screen max-w-md bg-[#FFF] rounded-lg p-5'>
          <div className='flex pb-4 border-b border-[#D9D9D9] justify-between'>
            <h1 className={`font-medium text-base ${poppins.className} text-gray-900`}>Inscrivez-vous</h1>
            <button onClick={handleSignupClick} className='text-gray-400'>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className='pt-4'>
            {isVerificationSuccessful === true ?
              <div className='p-3'>
                <form>
                  <div className='flex items-center mb-3'>
                    <input checked={user.gender === 'Mr'} onChange={handlechange} className='h-5 w-5 border border-3 border-black' type="radio" id="mr" name="gender" value="Mr"></input>
                    <label className='pl-2 pr-8 cursor-pointer' htmlFor="mr">Mr</label>
                    <input checked={user.gender === 'Mme'} onChange={handlechange} className='h-5 w-5 border border-black' type="radio" id="mme" name="gender" value="Mme"></input>
                    <label className='pl-2 cursor-pointer' htmlFor="mme">Mme</label>
                  </div>
                  <input onChange={handlechange} name='email' placeholder='Adresse email' className='w-full mb-3 rounded py-2 border border-[#D9D9D9] px-2' required type='text'></input>
                  <input onChange={handlechange} name='first_name' placeholder='Prenom' className='w-full mb-3 rounded py-2 border border-[#D9D9D9] px-2' required type='text'></input>
                  <input onChange={handlechange} name='last_name' placeholder='Nom' className='w-full mb-3 rounded py-2 border border-[#D9D9D9] px-2' required type='text'></input>
                  <input onChange={handlechange} name='password' placeholder='Mot de passe' className='w-full mb-3 rounded py-2 border border-[#D9D9D9] px-2' required type='password'></input>
                  <button onClick={handlesubmit} className='bg-blue-500 text-base font-medium my-2 rounded-3xl py-3 w-full text-white'>INSCRIVEZ-VOUS</button>
                </form>
                <div className='flex flex-col justify-center'>
                  <div className="flex mb-8">
                    <div className="border-b border-gray-300 flex-grow mr-1"></div>
                    <p className="text-lg relative top-3 font-semibold text-[#D9D9D9]">Ou</p>
                    <div className="border-b border-gray-300 flex-grow ml-1"></div>
                  </div>
                  <button className='rounded-3xl mb-2 py-3 font-medium w-full relative border text-sm'><SiFacebook className='text-blue-500 top-2 left-3 absolute h-6 w-6' /><span>Connectez-vous avec Facebook</span></button>
                  <button className='rounded-3xl mb-2 py-3 font-medium w-full border relative text-sm'><FcGoogle className='h-6 absolute top-2 left-3 w-6' /><span>Connectez-vous avec Google</span></button>
                </div>
              </div>
              : (!codesent ?
                <div className='p-3'>
                  <form>
                    <div className="phone-input-container">
                      <IntlTelInput
                        preferredCountries={['ma', 'fr']}
                        containerClassName="intl-tel-input tel-wrapper"
                        inputClassName="form-control tel-input"
                        placeholder='Téléphone'
                        onPhoneNumberChange={handlePhoneNumberChange}
                      />
                      {!isValidPhoneNumber && <p className={`error-message ${inter.className}`}>Le numéro de téléphone n&#39;est pas valide</p>}
                    </div>
                    <div>
                      <button onClick={sendcode} className='bg-blue-500 text-base font-medium my-2 rounded-3xl py-[10px] w-full text-white'>CONTINUER</button>
                      <p className="text-xs mt-3 text-[#333333]">Nous vous enverrons un code de 4 chiffres par SMS pour confirmer votre numéro de téléphone</p>
                    </div>
                  </form>
                  <div className='flex flex-col justify-center'>
                    <div className="flex mb-8">
                      <div className="border-b border-gray-300 flex-grow mr-1"></div>
                      <p className="text-lg relative top-3 font-semibold text-[#D9D9D9]">Ou</p>
                      <div className="border-b border-gray-300 flex-grow ml-1"></div>
                    </div>
                    <button className='rounded-3xl mb-2 py-3 font-medium w-full relative border text-sm'><SiFacebook className='text-blue-500 top-2 left-3 absolute h-6 w-6' /><span>Connectez-vous avec Facebook</span></button>
                    <button className='rounded-3xl mb-2 py-3 font-medium w-full border relative text-sm'><FcGoogle className='h-6 absolute top-2 left-3 w-6' /><span>Connectez-vous avec Google</span></button>
                  </div>
                </div>
                : <div className='p-3'>
                  <div className={`${isVerificationSuccessful === false ? 'flex' : 'hidden'} py-1 mb-2 rounded-lg text-red-500 gap-2 pl-3 items-center bg-sky-100`}>
                    <IoIosWarning />
                    <p className=''>Le code de verification n&#39;est pas valide.</p>
                  </div>
                  <p className='text-sm mb-3 text-[#333333]'>Merci de saisir le code de verification que vous avez reçu par SMS.</p>
                  <div className='p-5'>
                    <p className={`text-sm ${inter.className} font-semibold text-center text-[#1072EB]`}>Enter code de verification</p>
                  </div>
                  <div className='flex mb-2 justify-center'>
                    <OtpInput
                      value={otp}
                      onChange={setOtp}
                      numInputs={4}
                      renderSeparator={<span className='mx-1'></span>}
                      renderInput={(props) => <input {...props} />}
                      inputStyle={{
                        border: "1px solid #c2c2c2",
                        borderRadius: "8px",
                        width: "54px",
                        height: "54px",
                        fontSize: "23px",
                        color: "#000",
                        fontWeight: "600",
                        caretColor: "blue"
                      }}
                    />
                  </div>
                  <button onClick={verifycode} className='text-white bg-blue-500 w-full rounded-3xl py-[10px] text-base font-medium my-2'>CONTINUER</button>
                </div>
              )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup