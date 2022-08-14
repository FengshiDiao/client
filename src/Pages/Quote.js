import React, {useState, useEffect} from "react";
import { useQuote } from "../API/AV";
import {SelectDateSearchBar} from "../Component/SearchBar";
import {ShowTableQuote} from "../Component/Table";
import { useLocation } from "react-router-dom";
import ShowLineChartHistory from "../Component/LineChart"
import '../CSS/Quote.css';
import { Container } from "reactstrap";

function formatDate(date) {

    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}

export default function Quote(){
    const location = useLocation();
    const {loading, quote, error} = useQuote(location.state.symbol);
    const [stockData,setStockData] = useState([]);
    const [search, setSearch] = useState([]);
    const [middleStockData,setMiddleStockData] = useState([]);
    const date = middleStockData.map(a => a.date).reverse()
    const close = middleStockData.map(a => a.close).reverse()
    const open = middleStockData.map(a => a.open).reverse()

    useEffect(() =>{
        setStockData(quote);
        setMiddleStockData(quote);
    },[quote]);

    useEffect(() =>{
        const data = stockData.filter(item => item.date >= formatDate(search[0].startDate) && item.date <= formatDate(search[0].endDate))
        setMiddleStockData([])
        setMiddleStockData(data)
    },[search])

    if(error){
        return <p>Failed...</p>
    }
    if(loading){
        return <p>Loading...</p>
    }

    return (
        <div className="Quote">
            <Container>
            <h1>Quote</h1>
            <h4 id = "prompt">Showing stocks for the {location.state.name}</h4>
            <ShowLineChartHistory
            closePrice = {close}
            date = {date}   
            openPrice = {open}
            id = "LineChart-ClosePrice"      
            />
            <ShowTableQuote quote = {middleStockData}/>
            <SelectDateSearchBar 
            onSubmit = {setSearch}
            />
            </Container>
        </div>   
    );
}