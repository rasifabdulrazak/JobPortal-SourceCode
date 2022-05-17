import React from 'react'
import Copyright from '@material-ui/icons/Copyright';
import {Container,Button, Form,Col,Row,ListGroup} from 'react-bootstrap';

function Footer() {
    var style = {
        backgroundColor: "#CDBE78",
        textAlign: "center",
        padding: "10px",
        left: "0",
        bottom: "0",
        width: "100%",
        marginTop: "2rem"
    }
  return (
    <Container fluid style={style}>
    <div >
      <Row>
        <Col sm={3}>
          <p>About Us</p>
          <p>Careers</p>
          <p>Employees Home</p>
          <p>Sitemap</p>
        </Col>
        <Col sm={3}>
        <p>Help Center</p>
          <p>Notices</p>
          <p>Greivances</p>
          <p>Report Issues</p>
        </Col>
        <Col sm={3}>
        <p>Privacy Policy</p>
          <p>Terms and Conditions</p>
          <p>Fruad Alert</p>
          <p>Trust & safety</p>
        </Col>
        <Col sm={3}>
        <p>About Us</p>
         <div> <img style={{width:'6rem'}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJM6O9zXklYkSQxeE2SsygpTkkdwOwQcjAGg&usqp=CAU'></img></div>
          <img style={{width:'6rem'}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJM6O9zXklYkSQxeE2SsygpTkkdwOwQcjAGg&usqp=CAU'></img>
          <p>About Us</p>
        </Col>

      </Row>
      
    </div>
    </Container>
  )
}

export default Footer