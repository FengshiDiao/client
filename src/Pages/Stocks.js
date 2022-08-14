import React, {useEffect, useState} from "react";
import { Container } from "reactstrap";
import {useStocks} from "../API/FMP";
import {EnterStockSearchBar} from "../Component/SearchBar";
import {ShowTableStocks} from "../Component/Table";
import '../CSS/Stocks.css';

export default function Stocks(){
    const {loading, stocks, error} = useStocks();
    const [searchData, setSearchData] = useState([]);
    const [name, setName] = useState(null);
    const [industry, setIndustry] = useState(null);
    

    function filterByInfo(arrayOfObject,name,industry){
        if(name === null && industry === null){
            return arrayOfObject;
        }
        let data = arrayOfObject.filter(obj => {
            if(obj.name.includes(name) && obj.sector.includes(industry)) //check if object value contains value you are looking for
                return obj; //add this object to the filtered array
            else
                return null; 
        });
        return data
    }

    useEffect(()=>{
        setSearchData(filterByInfo(stocks,name,industry))
    },[name,industry,stocks])

    if(error || stocks === null){
        return <p>failed...</p>
    }
    if(loading){
        return <p>Loading...</p>
    }

    return (
        
            <div className="Stocks">
            <Container>
            <h1>Stocks</h1>
            <EnterStockSearchBar 
            stocks = {stocks}
            onSubmit = {setName}
            onSent = {setIndustry}
            onClear = {setSearchData}
            />
            <ShowTableStocks 
            stocks = {searchData}/>
            </Container>
        </div>
           
    );
}

