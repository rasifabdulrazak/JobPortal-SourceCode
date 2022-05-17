import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { Container,Alert,Overlay,Popover,Col,Row, Button,Form,Modal } from 'react-bootstrap'

import { Instagram,Pencil,Trash } from 'react-bootstrap-icons';
import './UserEmployement.css'



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
      className="wrapper"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add Employement
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
          
          <Col sm={5} style={{float:'right'}}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Company</Form.Label>
            <Form.Control 
                  {...register("company",{required:"company is required",minLength:{
                    value:6,
                    message:"Should contain 6 characters"
                  }})}
                  type="text"
                  placeholder="Enter Company"
                   />
            <Form.Text className="text-muted">
            <span className='text-center'>{errors.company && (<small className='text-center text-danger'>{errors.company.message}</small>)}</span>
            </Form.Text>
            </Form.Group>
          </Col>
          <Col sm={5}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Experience</Form.Label>
            <Form.Control 
                  {...register("experience",{required:"experiece is required",minLength:{
                    value:6,
                    message:"Should contain 6 characters"
                  }})}
                  type="text" 
                  placeholder="Enter Experience"
                   />
            <Form.Text className="text-muted">
            <span className='text-center'>{errors.experience && (<small className='text-center text-danger'>{errors.experience.message}</small>)}</span>
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
          <Col sm={5} style={{float:'right'}}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Position</Form.Label>
            <Form.Control 
                {...register("position",{required:"position is required",minLength:{
                  value:6,
                  message:"Should contain 6 characters"
                }})}
                type="text" 
                placeholder="Enter Position"
                 />
            <Form.Text className="text-muted">
            <span className='text-center'>{errors.position && (<small className='text-center text-danger'>{errors.position.message}</small>)}</span>
            </Form.Text>
            </Form.Group>
          </Col>
          <Col sm={5}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Salary</Form.Label>
            <Form.Control 
                {...register("salary",{required:"salary is required",minLength:{
                  value:6,
                  message:"Should contain 6 characters"
                }})}
                type="number" 
                placeholder="Enter Salary in LPA"
                 />
            <Form.Text className="text-muted">
            <span className='text-center'>{errors.salary && (<small className='text-center text-danger'>{errors.salary.message}</small>)}</span>
            </Form.Text>
            </Form.Group>
          </Col>
          <Col sm={12}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>JobDescription</Form.Label>
            <Form.Control 
                {...register("description",{required:"description is required",minLength:{
                  value:6,
                  message:"Should contain 6 characters"
                }})}
                style={{width:'100%',height:'13rem'}} 
                type="text" 
                placeholder="Enter Jobdescription" />
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



function UserEmployement() {

  const [modalShow, setModalShow] = useState(false);
  const [smShow, setSmShow] = useState(false);

  return (
    <Container>
    <Col >
    <div className="wrappere">
          
          <div className="card radius shadowDepth1 shadow-lg">
      
              <div className="card__content card__padding">
     <Alert variant="light" className='shadow-lg' >
         <Alert.Heading><p >Employement<h6 onClick={() => setModalShow(true)} className='employeeAdd'>Add</h6></p></Alert.Heading>
         <Row>
         <Col sm={12}>
         <p className='' style={{fontWeight:'bold'}}>
          Company : Infosys  <Pencil /><br/>
          Designation :Project Manager   <br/>
          <Trash className='deleteicon' onClick={() => setSmShow(true)} />
          StartDate : 12/04/2022<br/>
          EndDate : 12/04/2022   <br/>
          Current Salary : 7<br />
          JobDescription :In this application, all the CRUD operations are performed and have 2 modules, user and admin. 
            This application is built using Django framework in python and Database MySQL.
            User OTP verification is done using Twilio API. I have also integrated two payment methods Razor pay and PayPal . 
            All the images are cropped before uploading to the website using JavaScript.
          
          
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

export default UserEmployement