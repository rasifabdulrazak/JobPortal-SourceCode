import React from 'react'
import { Container, Row,Col,NavDropdown,Navbar,Nav } from 'react-bootstrap'
import './ProfileSideBar.css'

function ProfileSideBar() {
  return (
      <Container>
          <Row >
              <Col >
              <div className="wrappere">
          
          <div className="card radius shadowDepth1 shadow-lg">
      
              <div className="card__content card__padding">

 
    <nav id="sidebar">
        <div className="sidebar-header">
            <h3>Quick Links</h3>
        </div>

        <ul className="list-unstyled components">
            <p>Go Ahead</p>
            <li class="active">
                <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" >Attach Resume</a>
          
            </li>
          
            <li>
                <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" >Resume Headline</a>
            </li>
            <li>
                <a href="#">Key Skills</a>
            </li>
            <li>
                <a href="#">Education</a>
            </li>
            <li>
                <a href="#">Employement</a>
            </li>
            <li>
                <a href="#">Projects</a>
            </li>
            <li>
                <a href="#">Profile Summary</a>
            </li>
            <li>
                <a href="#">Personal Details</a>
            </li>
        </ul>
    </nav>

        </div>
        </div>
        </div>
    </Col>
    </Row>
    </Container>
  )
}

export default ProfileSideBar