import React from 'react'
import "../App.css"
import { Link } from 'react-router-dom';
import { Col, Container, Button, Form, Card, Row} from 'react-bootstrap';
import styled from 'styled-components';


const Styles = styled.div `

.align-items-center{
    margin-top: 200px;
}


`

export const Login = () => {
    return (
        <Styles>
           
            <Container>
                
                <Row className="justify-content-md-center align-items-center">
                    <Col md={5}>
                    <Card className="shadow bg-info" >
                <Card.Body>
                <Form >
                <Form.Group as={Col}  controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter username" />
        
                </Form.Group>

                <div className="text-center">
                    <Link to="/events">
                    <Button variant="light">Login</Button>
                    </Link>
                </div>

                </Form>
                </Card.Body>
                </Card>
                    </Col>
                </Row>
            </Container>

        </Styles>
    )
}
