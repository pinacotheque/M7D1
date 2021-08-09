import { BrowserRouter as Router } from "react-router-dom"
import { Route, Link } from "react-router-dom";
import './App.css';
import { Col, Container, Row } from "react-bootstrap";



function App() {
  return (

    <Router>
      <Container>
      <Row>
        <Col md={12} className="text-center">
            <h1>Get A Job</h1>
        </Col>
        
      </Row>
      <hr/>
      </Container>
    </Router>
  );
}

export default App;
