import React from 'react'
import "../App.css"
import { Link } from 'react-router-dom';
import { Col, Container, Button, Form, Card, Row} from 'react-bootstrap';
import styled from 'styled-components';
import {CometChat} from '@cometchat-pro/chat'
import {useHistory} from 'react-router-dom'

const Styles = styled.div `

.align-items-center{
    margin-top: 150px;
}

`

export const Create_event = () => {
    const history = useHistory()
    const [title, setTitle] = React.useState('')
    const [description, setDescription] = React.useState('')
    const [stream, setStream] = React.useState('')

const createEvent = async (e)=>{
    e.preventDefault()
    const data ={
        title,description,stream
    }
    const response = await fetch("http://localhost:5000/events/create-event", {
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin', 
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

  var GUID = title;
  var groupName = title;
  var groupType = CometChat.GROUP_TYPE.PUBLIC;
  var password = '';
  
  var group = new CometChat.Group(GUID, groupName, groupType, password);
  
  CometChat.createGroup(group).then(
      group => {
         console.log("group created successfully")
         history.push('/events')
      },
      error => {
          console.log("Group creation failed with exception:", error);
      }
  );
}
    return (
        <Styles>
           
            <Container>
                
                <Row className="justify-content-md-center align-items-center">
                    <Col md={7}>
                    <Card className="shadow" >
                <Card.Body>
                <Form onSubmit={createEvent}>
                <Form.Group as={Col}  controlId="name">
                    <Form.Label>Event Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter event name" onChange={(e)=> setTitle(e.target.value)} />
        
                </Form.Group>

                <Form.Group as={Col}  controlId="title">
                    <Form.Label>Event Description</Form.Label>
                    <Form.Control type="text" placeholder="Enter event title" onChange={(e)=> setDescription(e.target.value)} />
                </Form.Group>

                <Form.Group as={Col}  controlId="youtube">
                    <Form.Label>Youtube stream</Form.Label>
                    <Form.Control type="text" placeholder="Enter youtube stream link" onChange={(e)=> setStream(e.target.value)}/>
                </Form.Group>

                <div className="text-center">
                    <Link to="/events">
                    <Button variant="danger" className="m-2">Cancel</Button>
                    </Link>

                    <Button variant="success" className="m-2" type='submit'>Create</Button>
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
