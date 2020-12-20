import React from 'react'
import "../App.css"
import { Link } from 'react-router-dom';
import { Col, Container, Button, Form, Card, Row} from 'react-bootstrap';
import styled from 'styled-components';


const Styles = styled.div `

.align-items-center{
    margin-top: 150px;
}

`

export const Create_event = () => {
    return (
        <Styles>
           
            <Container>
                
                <Row className="justify-content-md-center align-items-center">
                    <Col md={7}>
                    <Card className="shadow" >
                <Card.Body>
                <Form >
                <Form.Group as={Col}  controlId="name">
                    <Form.Label>Event name</Form.Label>
                    <Form.Control type="text" placeholder="Enter event name" />
        
                </Form.Group>

                <Form.Group as={Col}  controlId="title">
                    <Form.Label>Event title</Form.Label>
                    <Form.Control type="text" placeholder="Enter event title" />
                </Form.Group>

                <Form.Group as={Col}  controlId="youtube">
                    <Form.Label>Youtube stream</Form.Label>
                    <Form.Control type="text" placeholder="Enter youtube stream link" />
                </Form.Group>

                <div className="text-center">
                    <Link to="/events">
                    <Button variant="danger" className="m-2">Cancel</Button>
                    </Link>

                    <Link to="/events">
                    <Button variant="success" className="m-2">Create</Button>
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
