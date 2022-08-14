import { useState, useEffect } from "react";

async function getStocks(){

    const API_KEY = '29cfa896aa6841ee5100e9ba0b24bc7e';
    const url = `https://financialmodelingprep.com/api/v3/nasdaq_constituent?apikey=${API_KEY}`;

    let res = await fetch(url);
    let data = await res.json();

    return data;
}

export function useStocks(){
    
    const[loading, setLoading] = useState(true);
    const[stocks, setStocks] = useState([]);
    const[error, setError] = useState(null);

    useEffect(()=>
    {
        (async () => {
            try{
                setStocks(await getStocks());
                setLoading(false);
            }
            catch(err){
                setError(true);
                setLoading(false);
            }
        })();
    },[]);

    return{
        loading,
        stocks,
        error
    }
}

