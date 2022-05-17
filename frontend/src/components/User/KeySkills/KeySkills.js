import React,{useState} from 'react'
import { Container,Alert,Overlay,Popover,Col,Badge,Form, Button,Modal,Row, CloseButton } from 'react-bootstrap'
import { Pencil } from 'react-bootstrap-icons';
import './KeySkills.css'


function KeySkills() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


 
  return (
      <Container>
           <Col >
           <div className="wrappere">
          
          <div className="card radius shadowDepth1 shadow-lg">
      
              <div className="card__content card__padding">
            <Alert variant="light" className='shadow-lg'>
              <div>
                <Alert.Heading><p >Key Skills <Pencil className='editbutton' onClick={handleShow} /></p></Alert.Heading>
                </div>
                <p>
                  <Row style={{padding:'1rem'}}>
                <Col sm={1} style={{display:'flex' ,marginRight:'3px'}}>
                  <Alert key='' variant='secondary' style={{marginRight:'1rem'}}>
                  Python
                </Alert>   
                <Alert key='' variant='secondary' style={{marginRight:'1rem'}}>
                  Django
                </Alert>  
                
                </Col> 
                </Row>
                </p>
                <hr />
                <p className="mb-0 text-center">
             
                
                </p>
                </Alert>
                </div>
                </div>
                </div>
                </Col>

                <Modal
                 show={show}
                 onHide={handleClose}
                 aria-labelledby="contained-modal-title-vcenter"
                  centered
                 >
        <Modal.Header closeButton>
          <Modal.Title>Add Skills</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Skills</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter the skills"
                autoFocus
              />
            </Form.Group>
          </Form>
        
          <Row >
            
                <Col sm={1} style={{display:'flex'}}>
                  
                  <Alert key='' variant='secondary' style={{marginRight:'1rem',display:'flex'}}>
                  Python
                  <CloseButton />
                </Alert>    
                <Alert key='' variant='secondary' style={{marginRight:'1rem',display:'flex'}}>
                  Python
                  <CloseButton />
                </Alert> 
                </Col>   
                </Row>
                
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

               
    </Container>
  )
}

export default KeySkills