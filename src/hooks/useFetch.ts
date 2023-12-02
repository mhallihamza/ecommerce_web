"use client"
import { useState,useEffect } from "react"
import axios from "axios"
const useFetch = (url:string)=>{
    const [data,setdata] = useState([]);
    const [error,seterror] = useState<any>(false);
    useEffect(()=>{
        const fetchData = async () => {
            try {
              const response = await fetch(url,{ cache: 'force-cache' });
              if (!response.ok) {
                throw new Error('Failed to fetch data');
              }
              const data = await response.json();
              setdata(data);
            } catch (error) {
              console.error('Error fetching data:', error);
              seterror(error);
            }
          };
        fetchData();
    },[url]);
    const refetch = async () => {
        try {
          const response = await fetch(url,{ cache: 'force-cache' });
          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }
          const data = await response.json();
          setdata(data);
        } catch (error) {
          console.error('Error fetching data:', error);
          seterror(error);
        }
      };
    return {data,error,refetch};
};
export default useFetch ;