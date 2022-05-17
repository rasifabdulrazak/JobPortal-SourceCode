import React,{useState} from 'react'
import { Container,Alert,Overlay,Popover,Col,Modal,Row,Form,Button } from 'react-bootstrap'
import { Instagram,Pencil,Trash } from 'react-bootstrap-icons';
import './UserProjects.css'
import { useNavigate } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';



function MyVerticallyCenteredModal(props) {
  const navigate = useNavigate()

  const {register,reset,trigger,handleSubmit,setError   ,formState:{errors}}=useForm();
  const onSubmit = async(data)=>{
    console.log("hi")
    props.setModalShow(false)
    navigate('/user_profile')
    
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add Project
        </Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit(onSubmit)}>
      <Modal.Body>
        {/* <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p> */}

        <Row >
          
          <Col sm={12} style={{float:'right'}}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Title</Form.Label>
            <Form.Control 
                  {...register("title",{required:"title is required",minLength:{
                    value:6,
                    message:"Should contain 6 characters"
                  }})}
                  type="text"
                  placeholder="Enter Title"
                   />
            <Form.Text className="text-muted">
            <span className='text-center'>{errors.title && (<small className='text-center text-danger'>{errors.title.message}</small>)}</span>
            </Form.Text>
            </Form.Group>
          </Col>
          <Col sm={5}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Client</Form.Label>
            <Form.Control 
                  {...register("experience",{required:"experiece is required",minLength:{
                    value:6,
                    message:"Should contain 6 characters"
                  }})}
                  type="text" 
                  placeholder="Enter Client"
                   />
            <Form.Text className="text-muted">
            <span className='text-center'>{errors.experience && (<small className='text-center text-danger'>{errors.experience.message}</small>)}</span>
            </Form.Text>
            </Form.Group>
          </Col>
          <Col sm={5} style={{float:'right'}}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Status</Form.Label>
           <div style={{display:'flex',marginRight:'2px'}}>
  
            <Form.Check 
            type="radio"
            id="custom-switch"
            label="In progress   "
       
          />
 
          <Form.Check 
            type="radio"
            id="custom-switch"
            label="Finished"
          
          />
        
        </div >
            <Form.Text className="text-muted">
            <span className='text-center'>{errors.position && (<small className='text-center text-danger'>{errors.position.message}</small>)}</span>
            </Form.Text>
            </Form.Group>
          </Col>
          <Col sm={5} style={{float:'right'}}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>StartDate</Form.Label>
            <Form.Control 
                  {...register("startdate",{required:"startdate is required",minLength:{
                    value:6,
                    message:"Should contain 6 characters"
                  }})}
                  type="date" 
                  placeholder="Enter Startdate" />
            <Form.Text className="text-muted">
            <span className='text-center'>{errors.startdate && (<small className='text-center text-danger'>{errors.startdate.message}</small>)}</span>
            </Form.Text>
            </Form.Group>
          </Col>
          <Col sm={5}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label> EndDate</Form.Label>
            <Form.Control 
                {...register("enddate",{required:"enddate is required",minLength:{
                  value:6,
                  message:"Should contain 6 characters"
                }})}
                type="date" 
                placeholder="Enter Enddate"
                 />
            <Form.Text className="text-muted">
            <span className='text-center'>{errors.enddate && (<small className='text-center text-danger'>{errors.enddate.message}</small>)}</span>
            </Form.Text>
            </Form.Group>
          </Col>
          <Col sm={12}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>ProjectDescription</Form.Label>
            <Form.Control 
                {...register("description",{required:"description is required",minLength:{
                  value:6,
                  message:"Should contain 6 characters"
                }})}
                style={{width:'100%',height:'13rem'}} 
                type="text" 
                placeholder="Enter ProjectDescription" />
            <Form.Text className="text-muted">
            <span className='text-center'>{errors.description && (<small className='text-center text-danger'>{errors.description.message}</small>)}</span>
            </Form.Text>
            </Form.Group>
          </Col>
          
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button type='submit' onClick=''>Submit</Button>
      </Modal.Footer>
      </Form>
    </Modal>
  );
}



function UserProjects() {
  const [modalShow, setModalShow] = useState(false);
  const [smShow, setSmShow] = useState(false);

  return (
    <Container>
    <Col >
    <div className="wrappere">
          
          <div className="card radius shadowDepth1 shadow-lg">
      
              <div className="card__content card__padding">
     <Alert variant="light" className='shadow-lg'>
         <Alert.Heading><p >Projects<h6 onClick={() => setModalShow(true)}className='projectAdd'>Add</h6></p></Alert.Heading>
         <Row>
         <Col sm={12}>
         <p className='' style={{fontWeight:'bold'}}>
          Title :<small>E-commerce</small> <Pencil /><br/>
          StartDate : <small>19/04/22</small> <br/>
          EndDate : <small>19/04/22 </small><br/>
          <Trash className='deleteicon' onClick={() => setSmShow(true)}/>
          Status : <small>Complete</small><br/>
          Details :<small>In this application, all the CRUD operations are performed and have 2 modules, user and admin. 
            This application is built using Django framework in python and Database MySQL.
            User OTP verification is done using Twilio API. I have also integrated two payment methods Razor pay and PayPal . 
            All the images are cropped before uploading to the website using JavaScript.</small>  <br/>
          
          
         </p>
         </Col>
    
      
       
         </Row>
         <hr />
         <p className="mb-0 text-center">
         
         </p>
         </Alert>
         </div>
         </div>
         </div>
         </Col>
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
        <Modal.Body>Are you sure you want to delete
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setSmShow(false)} variant="secondary">
            Close
          </Button>
          <Button variant="primary">
            Delete
          </Button>
        </Modal.Footer>
      </Modal>

      <MyVerticallyCenteredModal
        show={modalShow}
        setModalShow={setModalShow}
        onHide={() => setModalShow(false)}
      />

</Container>
  )
}

export default UserProjects