import React from 'react'
import "../App.css"
import { Link } from 'react-router-dom';
import { Col, Container, Button, Card, Row} from 'react-bootstrap';
import flyer from "../assets/event.jpg"



export const Programs = () => {
    const [events, setEvents] = React.useState([])

    const getEvent = async ()=>{
        const response = await fetch("http://localhost:5000/events/get-events", {
            method: 'GET',
            mode: 'cors',
            credentials: 'same-origin', 
            headers: {
              'Content-Type': 'application/json'
            },
          });
          const dat = await response.json()
          console.log(dat)

          setEvents(dat); 
    }

React.useEffect(()=>{
    getEvent()
},[])
    return (           
            <Container>

            <Row className="ml-4 mt-4">
            <Link to="/create-event">
            <Button variant="danger" className="ml-3">Create event</Button>
            </Link>
            </Row>
            {events !== undefined ? 
            <Row className="m-4">
                {events.map((event,i)=>(
                    <Col md={4} key={i}>
                    <Card>
                        <Card.Img variant="top" src={flyer} />
                        <Card.Body>
                            <Card.Title>{event.title}</Card.Title>
                        <Card.Text>
                            {event.description}
                        </Card.Text>
                        <div className="text-center">
                            <Link to={`/live/${event.id}`}>
                            <Button variant="primary">Attend</Button>
                            </Link>
                        </div>
                        </Card.Body>
                    </Card>
                </Col>
                ))
                }
            </Row>
            :null}
            </Container>
    )
}
