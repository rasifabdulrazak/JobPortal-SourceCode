import React,{useState} from 'react'
import { Container,Alert,Overlay,Popover,Col,Row,Modal,Button, Form } from 'react-bootstrap'
import { Pencil } from 'react-bootstrap-icons';
import {useNavigate} from 'react-router-dom'
import {useForm} from 'react-hook-form';

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
          Add Personal Details
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
 
       <Form>
       <Row >
          
          <Col sm={5} style={{float:'right'}}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Date of Birth</Form.Label>
            <Form.Control 
                  {...register("company",{required:"company is required",minLength:{
                    value:6,
                    message:"Should contain 6 characters"
                  }})}
                  type="date"
                  placeholder="Enter Company"
                   />
            <Form.Text className="text-muted">
            <span className='text-center'>{errors.company && (<small className='text-center text-danger'>{errors.company.message}</small>)}</span>
            </Form.Text>
            </Form.Group>
          </Col>
          <Col sm={5}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Gender</Form.Label>
           <div style={{display:'flex',marginRight:'2px'}}>
  
            <Form.Check 
            type="radio"
            id="custom-switch"
            label="Male"
       
          />
 
          <Form.Check 
            type="radio"
            id="custom-switch"
            label="Female"
          
          />

          <Form.Check 
            type="radio"
            id="custom-switch"
            label="Transgender"
          />
        
        </div >
            <Form.Text className="text-muted">
            <span className='text-center'>{errors.position && (<small className='text-center text-danger'>{errors.position.message}</small>)}</span>
            </Form.Text>
            </Form.Group>
          </Col>
          <Col sm={5} style={{float:'right'}}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Address</Form.Label>
            <Form.Control 
                  {...register("startdate",{required:"startdate is required",minLength:{
                    value:6,
                    message:"Should contain 6 characters"
                  }})}
                  type="text" 
                  placeholder="Enter Startdate" />
            <Form.Text className="text-muted">
            <span className='text-center'>{errors.startdate && (<small className='text-center text-danger'>{errors.startdate.message}</small>)}</span>
            </Form.Text>
            </Form.Group>
          </Col>
          <Col sm={5}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label> Hometown</Form.Label>
            <Form.Control 
                {...register("enddate",{required:"enddate is required",minLength:{
                  value:6,
                  message:"Should contain 6 characters"
                }})}
                type="text" 
                placeholder="Enter Enddate"
                 />
            <Form.Text className="text-muted">
            <span className='text-center'>{errors.enddate && (<small className='text-center text-danger'>{errors.enddate.message}</small>)}</span>
            </Form.Text>
            </Form.Group>
          </Col>
          <Col sm={5} style={{float:'right'}}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Area Pincode</Form.Label>
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
          <Col sm={5}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Marital Status</Form.Label>
          <Form.Select 
          {...register('status')}
          name="status"
          aria-label="Default select example">
            <option value="Married">Married</option>
            <option value="Unmarried">Unmarried</option>
            <option value="Seperated">Seperated</option>
            <option value="Widow">Widow</option>
            <option value="Divorced">Divorced</option>
            </Form.Select>
            </Form.Group>
          </Col>
          
        </Row>
       </Form>
      </Modal.Body>
      <Modal.Footer>
      <Button onClick={props.onHide}>Close</Button>
        <Button onClick=''>Save Changes</Button>
      </Modal.Footer>
    </Modal>
  );
}


function UserPersonalDetail() {

  const [modalShow, setModalShow] = useState(false);


  return (
    <Container>
    <Col >
    <div className="wrappere">
          
          <div className="card radius shadowDepth1 shadow-lg">
      
              <div className="card__content card__padding">
     <Alert variant="light" className='shadow-lg' >
         <Alert.Heading ><p >Personal Details <Pencil onClick={() => setModalShow(true)}/></p></Alert.Heading>
         <Row>
         <Col sm={4}>
         <p style={{fontWeight:'bold'}}>
        Date Of Birth: <br /> </p>  
        18/04/1999
         
         </Col>
         <Col sm={4}>
         <p style={{fontWeight:'bold'}}>
        Gender:<br /> </p>  
        Male
         </Col>
         <Col sm={4}>
         <p style={{fontWeight:'bold'}}>
        Address: <br /> </p> 
        Mundakkodu house 
         </Col>
         
        <hr style={{marginTop:'2rem'}} />
         <Col sm={4}>
         <p style={{fontWeight:'bold'}}>
        Hometown:  <br /> </p>  
        Malappuram
         
         </Col>
         <Col sm={4}>
         <p style={{fontWeight:'bold'}}>
        Area PinCode:<br /> </p>  
        673638
         </Col>
         <Col sm={4}>
         <p style={{fontWeight:'bold'}}>
        Marital Status: <br /> </p> 
        Unmarried 
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

         <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

</Container>
  )
}

export default UserPersonalDetail