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
            <Row className="m-4">
                <Col md={4}>
                    <Card>
                        <Card.Img variant="top" src={flyer} />
                        <Card.Body>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk
                            of the card's content.
                        </Card.Text>
                        <div className="text-center">
                            <Link to="/events">
                            <Button variant="primary">Attend</Button>
                            </Link>
                        </div>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4}>
                    <Card>
                        <Card.Img variant="top" src={flyer} />
                        <Card.Body>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk
                            of the card's content.
                        </Card.Text>
                        <div className="text-center">
                            <Link to="/events">
                            <Button variant="primary">Attend</Button>
                            </Link>
                        </div>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4}>
                    <Card>
                        <Card.Img variant="top" src={flyer} />
                        <Card.Body>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk
                            of the card's content.
                        </Card.Text>
                        <div className="text-center">
                            <Link to="/events">
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
