import {Button,Container} from "reactstrap";
import '../CSS/Home.css';
import { useNavigate } from "react-router-dom";

export default function Home(){
    const navigate = useNavigate();

    return (
        
            <div id = "home">
            <Container>
            <h1 className="home-text">.Stocker</h1>
            <p className="home-text">The App analyzes the stocks based on the Nasdaq stock market</p>
            <Button id="Stocks-button"  onClick={()=> navigate('/Stocks')}>
                Make Money
            </Button>
            </Container>
        </div> 
        
          
    );
}