import React from 'react'
import {Container,Button, Form,Col,Row,Figure,ListGroup,Alert} from 'react-bootstrap'
import './UserProfilePortFolio.css'

function UserProfilePortFolio() {
  return (
    <div style={{marginTop:'2rem'}}>
        <Container>

            <Row>
                <Col sm={3}>
                <div className="wrappere">
          
          <div className="card radius shadowDepth1 shadow-lg">
      
              <div className="card__content card__padding">

              <Figure.Image
                        width={200}
                        height={180}
                        alt="171x180"
                        src="https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png"
                    />
                    <p>Mohammed rasif</p>


                  </div>
                  </div>
                </div>               
                </Col>
                <Col sm={9}>
                    
                <div className="wrappere">
          
          <div className="card radius shadowDepth1 shadow-lg">
      
              <div className="card__content card__padding">
                  
              <Row>
                  <Col>
                <p className='texttitle fonts'>Location : Malappuram</p>
                        <p></p>
                        <p></p>
                <p className='texttitle fonts'>Email : rasifrazak123@gmail.com</p>
                </Col>

                <Col>
                <p className='texttitle fonts'>Location : Malappuram</p>
                        <p></p>
                        <p></p>
                <p className='texttitle fonts'>Email : rasifrazak123@gmail.com</p>
                </Col>
                <Col>
                <p className='texttitle fonts'>Location : Malappuram</p>
                        <p></p>
                        <p></p>
                <p className='texttitle fonts'>Email : rasifrazak123@gmail.com</p>
                </Col>
                </Row>
               

                </div>
                  </div>
                </div>  
               
               </Col>
            </Row>
          
        </Container>
    </div>
  )
}

export default UserProfilePortFolio