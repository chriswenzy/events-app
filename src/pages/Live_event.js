import React from 'react'
import "../App.css"
import { Col,Navbar, Card, Row} from 'react-bootstrap';
import styled from 'styled-components';
import {CometChat} from '@cometchat-pro/chat'

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

export const Live_event = ({match}) => {
    const [event,setEvents] = React.useState([])
    const [messages,setMessages] = React.useState([])
    const [message,setMessage]= React.useState('')




const getEvent = async ()=>{
        
        const response = await fetch(`http://localhost:5000/events/get-event/${match.params.id}`, {
            method: 'GET',
            mode: 'cors',
            credentials: 'same-origin', 
            headers: {
              'Content-Type': 'application/json'
            },
          });
          const datas = await response.json()
          setEvents(datas); 
          var GUID = datas.title;
          var password = "";
          var groupType = CometChat.GROUP_TYPE.PUBLIC;
          
          CometChat.joinGroup(GUID, groupType, password).then(
            group => {
              console.log("Group join")
            },
            error => {
              console.log("Group joining failed with exception:", error);
            })

            var limit = 100;
            var messagesRequest = new CometChat.MessagesRequestBuilder()
              .setLimit(limit)
              .setGUID(GUID)
              .build();
            
            messagesRequest.fetchPrevious().then(
              messages => {
                console.log("Message list fetched:", messages);
                setMessages(messages)
              },
              error => {
                console.log("Message fetching failed with error:", error);
              }
            );

    }


CometChat.addMessageListener(
  "UNIQUE_LISTENER_ID",
  new CometChat.MessageListener({
    onTextMessageReceived: textMessage => {
      console.log("Text message received successfully", textMessage);
      const data = {
          'name':textMessage.sender.name,
          'text':textMessage.text
      }
      setMessages(messages.concat(data))
    }
  })
);
      

const sendMessage = (e)=>{
    e.preventDefault()

var receiverID = event.title;
var messageText = message;
var receiverType = CometChat.RECEIVER_TYPE.GROUP;

var textMessage = new CometChat.TextMessage(
  receiverID,
  messageText,
  receiverType
);

CometChat.sendMessage(textMessage).then(
  message => {
    console.log("Message sent successfully:", message);
    setMessage('')
    const data = {
        'name':message.sender.name,
        'text':message.text
    }
    setMessages(messages.concat(data))
})
}


const logout = () => {
    CometChat.logout().then(() => {
      window.location.href = '/';
    });
  }
React.useEffect(()=>{
    getEvent()
},[])
    
    return (
        <Styles>

            <Navbar sticky="top" bg="light" variant="light">
            <Navbar.Brand href="#home">Live section</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    
                     <h6 className="display-name"> U</h6>
                     <p onClick={logout}>logout</p>
                </Navbar.Text>
            </Navbar.Collapse>
            </Navbar>
            
                
            <Row className="m-3">
                <Col sm={8}>
                <iframe 
                    title={event.title}
                    width="100%" 
                    height="500px" 
                    src={event !== undefined ? event.stream :null}>
                    </iframe>
                    <h5> <strong>{event !== undefined ? event.title :null}</strong> </h5>
                </Col>
                <Col sm={4}>
                    
                <Card>
                <Card.Header as="h5">Chat section</Card.Header>
                <Card.Body>
                   {messages.map((message,i)=>(
                    <div className="container" key={i}>
                    <p><span><b>{message.sender ? message.sender.name:message.name}:</b></span> {message.text}</p>
                    </div>
                   ))}
                   <div className="container-fluid">
                    <form onSubmit={sendMessage}>
                   <input type="text" placeholder="Write Your message here" value={message} onChange={(e)=> setMessage(e.target.value)} />
                   <button type="submit">submit</button>
                   </form>
                   </div>
                </Card.Body>
                </Card>
                
                </Col>
            </Row>
           

        </Styles>
    )
}
