import React from 'react'
import "../App.css"
import { Link } from 'react-router-dom';
import { Col, Container, Button, Form, Card, Row} from 'react-bootstrap';
import styled from 'styled-components';
import flyer from "../assets/event.jpg"


const Styles = styled.div `

`

export const Programs = () => {
    return (
        <Styles>
           
            <Container>

            <Row className="ml-4 mt-4">
            <Link to="/create-event">
            <Button variant="danger" className="ml-3">Create event</Button>
            </Link>
            </Row>

            <Row className="m-4">
                
                <Col md={4}>
                    <Card>
                        <Card.Img variant="top" src={flyer} />
                        <Card.Body>
                            <Card.Title>Comechat podcast</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk
                            of the card's content.
                        </Card.Text>
                        <div className="text-center">
                            <Link to="/live">
                            <Button variant="primary">Attend</Button>
                            </Link>
                        </div>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
            </Container>

        </Styles>
    )
}
