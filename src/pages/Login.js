import React from 'react'
import "../App.css"
import { Col, Container, Button, Form, Card, Row} from 'react-bootstrap';
import styled from 'styled-components';
import {API_KEY} from '../constant/constant'
import  {CometChat} from '@cometchat-pro/chat'
import { useHistory } from 'react-router'

const Styles = styled.div `

.align-items-center{
    margin-top: 200px;
}


`

export const Login = () => {
    
const [username, setUsername] = React.useState('')
const [isSubmitting, setIsSubmitting] = React.useState(false)
const history = useHistory()

const login = async () => {
    const UID = username
var user = new CometChat.User(UID);
 CometChat.createUser(user, API_KEY).then(
    user => {
        console.log("user created", user);
        CometChat.login(UID,API_KEY).then(
            data => {
                history.push('/events')
            },
            error => {
              console.log("Login failed with exception:", { error });    
            }
          );
    },error => {
        CometChat.login(UID,API_KEY).then(
            data => {
                console.log(data)
              history.push('/events')
            },
            error => {
              console.log("Login failed with exception:", { error });    
            }
            )
        }
          );
}


const formsubmit = async (e) =>{
    e.preventDefault()
    setIsSubmitting(true)
    const data = await login()
    if(data){
    setIsSubmitting(false)
    setUsername('')
    }
}
    return (
        <Styles>
           
            <Container>
                
                <Row className="justify-content-md-center align-items-center">
                    <Col md={5}>
                    <Card className="shadow bg-info" >
                <Card.Body>
                <Form onSubmit={formsubmit}>
                <Form.Group as={Col}  controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter username" onChange={(e)=> setUsername(e.target.value)} />
        
                </Form.Group>

                <div className="text-center">
                    {/* <Link to="/events"> */}
                    <Button variant="light" type='submit'>Login</Button>
                    {/* </Link> */}
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
