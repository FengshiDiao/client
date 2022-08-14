import { useState, useEffect } from "react";

function GetHistory(history){

    let historyInfo = [];

    for (let index in history){
        historyInfo.push(
            {
                date: history[index][0],
                open: history[index][1]["1. open"],
                high: history[index][1]["2. high"],
                low: history[index][1]["3. low"],
                close: history[index][1]["4. close"],
                volume: history[index][1]["5. volume"]
            }
        );
    };

    return historyInfo;
}

export function useQuote(symbol){

    const API_KEY = '605QS6BYGV7BMOQO';
    const[loading, setLoading] = useState(true);
    const[quote, setQuote] = useState();
    const[error, setError] = useState(false);
    const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${API_KEY}`

    useEffect(()=> 
    {
        try{
            fetch(url)
            .then(res => res.json())
            .then(data => data["Time Series (Daily)"])
            .then (filtered_data => Object.entries(filtered_data))
            .then(history => GetHistory(history))
            .then(pureData => setQuote(pureData)); 
            setLoading(false);
        }
        catch(error){
            setError(true);
            setLoading(false);
        }
    },[url]);
    
    return{
        loading,
        quote,
        error
    }
}