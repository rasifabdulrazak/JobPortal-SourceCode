import React,{useState} from 'react'
import { Button, Container,Table,Row,Col,Modal } from 'react-bootstrap'


function UserdetailView() {
  const [smShow, setSmShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);
  return (
      <Container>
          <Row>
          <div className="wrappere">
          
          <div className="card radius shadowDepth1 shadow-lg">
      
              <div className="card__content card__padding">
                  <div className="card__share">
                      <div className="card__social">  
                          <a className="share-icon facebook" href="#"><span className="fa fa-facebook"></span></a>
                          <a className="share-icon twitter" href="#"><span className="fa fa-twitter"></span></a>
                          <a className="share-icon googleplus" href="#"><span className="fa fa-google-plus"></span></a>
                      </div>

                
                  </div>

                  <div className="card shadow-lg mt-5">
      <div className="row" >
        <div className="col-sm-5">
          <img className="d-block w-100" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" />
        </div>
        <div className="col-sm-7">
          <div className="card-block">
                   <h4 className="card-title">Mohammed Rasif</h4> 
            <p className="fonts"><span style={{fontWeight:'bold'}}>Email :</span> rasifrazak123@gmail.com</p>
            <p className="fonts"><span style={{fontWeight:'bold'}}>Phonenumber :</span> 9744088812</p>
            <p className="fonts"><span style={{fontWeight:'bold'}}>Work Experience :</span> Fresher</p>
            <p className="fonts"><span style={{fontWeight:'bold'}}>Applied Jobs :</span> 2</p>
            <p className="fonts"><span style={{fontWeight:'bold'}}>Premium Customer? :</span> False</p>
            <br />
            <a href="#" className="btn btn-primary btn-sm float-right" onClick={() => setSmShow(true)}>Block</a>
          </div>
        </div>
              </div>

              <div className="card__action">
              </div>
          </div>

         
      </div>
      </div>
      </div>
      </Row>
      <Modal
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
           Confirmation
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to Block</Modal.Body>
        <Modal.Footer>
          <Button  variant='secondary'>Close</Button>
          <Button>Block</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  )
}

export default UserdetailView