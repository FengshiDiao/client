import { useState } from "react";
import { addDays } from 'date-fns';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import '../CSS/Stocks.css';
import '../CSS/Quote.css';

export function SelectDateSearchBar(props) {

    const [state, setState] = useState([
        {
          startDate: new Date(),
          endDate: addDays(new Date(),3),
          key: 'selection'
        }]);

    return (
        <div id = "search-date">
            <div className="flex-child">
            <DateRangePicker
            onChange={item => setState([item.selection])}
            showSelectionPreview={true}
            moveRangeOnFirstSelection={false}
            months={1}
            ranges={state}
            direction="horizontal"
            dateDisplayFormat= {"yyyy-MM-dd"}
            />
            </div>
            <div className="flex-child">
            <button
            id = "search-history-button"
            type="button"
            onClick={() => props.onSubmit(state)}
            >
                Go
            </button> 
            </div>
            
        </div>
        
        
    );
}

export function EnterStockSearchBar(props){
    const [innerSearch, setInnerSearch] = useState("");
    const [innerIndustry, setInnerIndustry] = useState("");
    return(
        <div >
            <input
            aria-labelledby="search-stock-button"
            name="search-stock"
            id = "search-stock"
            type = "search"
            value = {innerSearch}
            placeholder = "by stock name..."
            onChange = {e => setInnerSearch(e.target.value)}
            />
            <input
            aria-labelledby="search-stock-button"
            name="search-industry"
            id = "search-industry"
            type = "search"
            value = {innerIndustry}
            placeholder = "by industry name..."
            onChange = {e => setInnerIndustry(e.target.value)}
            />
            <button
            id = "search-stock-button"
            type = "button"
            onClick = {() => {
                    props.onSubmit(innerSearch)
                    props.onSent(innerIndustry)
                }
            }
            >
                Search
            </button>
            <button
            id = "search-clear-button"
            type = "button"
            onClick = {() => {
                    props.onClear(props.stocks)
                    setInnerSearch("");
                    setInnerIndustry("");
                }
            }
            >
                Clear
            </button>
        </div>
    )
}