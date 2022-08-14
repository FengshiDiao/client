import './CSS/App.css';
import {Navbar, NavbarBrand, Collapse, Nav, NavItem} from "reactstrap"
import {BrowserRouter as Router, Routes ,Route,Link} from "react-router-dom";
import Home from "./Pages/Home"
import Stocks from "./Pages/Stocks"
import Quote from "./Pages/Quote"

function App() { 
  return (
    
    <div className="App">
      
    <Router>
       <Navbar 
        id = "navbar"
        expand="md">
          <NavbarBrand href="/" id="brand-name">
            .Stocker
          </NavbarBrand>
            <Collapse navbar id='collapse'>
            <Nav>
              <NavItem>
                  <Link to="/" className="link-text">Home</Link>
              </NavItem>
              <NavItem>
                  <Link to="/Stocks" className="link-text">Stocks</Link>
              </NavItem>
            </Nav>
            </Collapse>
        </Navbar>
          <div id = "App-Body">
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/Stocks" element={<Stocks/>} />
              <Route path="/Quote" element={<Quote/>} />
            </Routes>
          </div>
        <footer id = "App-Footer" margin-bottom= "0px">
            <p>Copyright©2022 Fengshi Diao N10840044</p>
          </footer>
</Router>
</div>
  );
}

export default App;
