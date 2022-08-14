import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import {useCallback,useRef,useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import '../CSS/Stocks.css';


export function ShowTableStocks(props) {
    
    const columns = [
        { headerName: "Stock", field: "symbol" , sortable: true},
        { headerName: "Name", field: "name" , sortable: true},
        { headerName: "Industry", field: "sector", sortable: true, filter:true}
    ];
    const gridRef = useRef();
    const navigate = useNavigate();
    const onRowDoubleClicked = useCallback(() => {
    const data = gridRef.current.api.getSelectedRows();
    navigate('/Quote', {state:{symbol: data[0].symbol, name: data[0].name}})
    },[navigate]);

    return(
        <div
            className="ag-theme-balham"
            style={{
                height: "850px",
                width: "605px"
            }}>
            <AgGridReact
            ref = {gridRef}
            columnDefs={columns}
            rowData={props.stocks}
            pagination={true}
            paginationPageSize={26}
            rowSelection = {'single'}
            onRowDoubleClicked = {onRowDoubleClicked}
            />
        </div>
    );
}

export function ShowTableQuote(props) {
    
    const [rowData, setRowData] = useState([]);
    const columns = [
        { headerName: "Date", field: "date" },
        { headerName: "Open", field: "open" },
        { headerName: "High", field: "high" },
        { headerName: "Low", field: "low" },
        { headerName: "Close", field: "close" },
        { headerName: "Volume", field: "volume" }
    ];
    
    useEffect(() => {
        setRowData(props.quote);
    },[props.quote]);
    
    return(
        <div
            className="ag-theme-balham"
            style={{
                height: "250px",
                width: "1203px"
            }}
            >
            <AgGridReact 
            columnDefs={columns} 
            rowData={rowData}
            pagination={true}
            paginationPageSize={5}
           />
        </div>
    );
}