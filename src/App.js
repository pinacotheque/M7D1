import { BrowserRouter , Route , Link} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Col, Container, Row } from "react-bootstrap";
import Navbar from '../src/components/navbar/Navbar'
import Main from '../src/components/Main/Main'
import Details from '../src/components/Details/Details'
import useState from 'react'



function App() {

  

  return (

    <BrowserRouter>
    <Navbar/>
      <Route exact path="/" render={(routerProps)=> <Main  />} />
      <Route exact path="/jobDetails" render={(routerProps)=> <Details />} />

      {/* <Route exact path="/details" render={(routerProps)=> <Details/>}  /> */}
    </BrowserRouter>


  );
}

export default App;
