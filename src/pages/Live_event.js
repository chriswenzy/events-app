import React from 'react'
import "../App.css"
import { Link } from 'react-router-dom';
import { Col, Container, Button, Navbar, Card, Row} from 'react-bootstrap';
import styled from 'styled-components';


const Styles = styled.div `

.align-items-center{
    margin-top: 200px;
}

.display-name{
    background: black;
    color: white;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    text-align: center;
    padding: 5px;
}

`

export const Live_event = () => {
    return (
        <Styles>

            <Navbar sticky="top" bg="light" variant="light">
            <Navbar.Brand href="#home">Live section</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    
                     <h6 className="display-name"> U</h6>
                </Navbar.Text>
            </Navbar.Collapse>
            </Navbar>
            
                
            <Row className="m-3">
                <Col sm={8}>
                <iframe 
                    width="100%" 
                    height="500px" 
                    src="https://www.youtube.com/watch?v=cNY8nnzRcw0">
                    </iframe>
                    <h5> <strong>How to Build a Virtual Event Site for React & Node.js (Youtube Live Clone)</strong> </h5>
                </Col>
                <Col sm={4}>
                    
                <Card>
                <Card.Header as="h5">Chat section</Card.Header>
                <Card.Body>
                   
                   // put your Ui here
                   
                </Card.Body>
                </Card>
                
                </Col>
            </Row>
           

        </Styles>
    )
}
