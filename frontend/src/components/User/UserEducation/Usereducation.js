import React ,{useState} from 'react'
import { Container,Alert,Modal,Form,Overlay,Popover,Row,Col,Button } from 'react-bootstrap'
import { Pencil,Trash } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import './UserEducation.css'


function MyVerticallyCenteredModal(props) {
  const navigate = useNavigate()
  const [gender, setGender] = useState('');

  const {register,reset,trigger,handleSubmit,setError   ,formState:{errors}}=useForm();
  const onSubmit = async(data)=>{
    console.log("hi")
    props.setModalShow(false)
    navigate('/user_profile')
    function onChangeValue(event) {
      setGender(event.target.value);
      console.log(event.target.value);
    }
  
    
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
          Add Education
        </Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit(onSubmit)}>
      <Modal.Body>

        <Row >
          
          <Col sm={5} style={{float:'right'}}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Course</Form.Label>
            <Form.Control 
                  {...register("course",{required:"course is required",minLength:{
                    value:6,
                    message:"Should contain 6 characters"
                  }})}
                  type="text"
                  placeholder="Enter Course"
                   />
            <Form.Text className="text-muted">
            <span className='text-center'>{errors.course && (<small className='text-center text-danger'>{errors.course.message}</small>)}</span>
            </Form.Text>
            </Form.Group>
          </Col>
          <Col sm={5}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Branch</Form.Label>
            <Form.Control 
                  {...register("branch",{required:"branch is required",minLength:{
                    value:6,
                    message:"Should contain 6 characters"
                  }})}
                  type="text" 
                  placeholder="Enter Branch"
                   />
            <Form.Text className="text-muted">
            <span className='text-center'>{errors.branch && (<small className='text-center text-danger'>{errors.branch.message}</small>)}</span>
            </Form.Text>
            </Form.Group>
          </Col>
          <Col sm={5} style={{float:'right'}}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>University</Form.Label>
            <Form.Control 
                  {...register("university",{required:"university is required",minLength:{
                    value:6,
                    message:"Should contain 6 characters"
                  }})}
                  type="text" 
                  placeholder="Enter University" />
            <Form.Text className="text-muted">
            <span className='text-center'>{errors.university && (<small className='text-center text-danger'>{errors.university.message}</small>)}</span>
            </Form.Text>
            </Form.Group>
          </Col>
          <Col sm={5}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label> Passout_Year</Form.Label>
            <Form.Control 
                {...register("passout_year",{required:"passout_year is required",minLength:{
                  value:6,
                  message:"Should contain 6 characters"
                }})}
                type="date" 
                placeholder="Enter Passout_Year"
                 />
            <Form.Text className="text-muted">
            <span className='text-center'>{errors.passout_year && (<small className='text-center text-danger'>{errors.passout_year.message}</small>)}</span>
            </Form.Text>
            </Form.Group>
          </Col>
          <Col sm={5} style={{float:'right'}}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Grade</Form.Label>
            <Form.Control 
                {...register("grade",{required:"grade is required",minLength:{
                  value:6,
                  message:"Should contain 6 characters"
                }})}
                type="text" 
                placeholder="Enter Grade"
                 />
            <Form.Text className="text-muted">
            <span className='text-center'>{errors.grade && (<small className='text-center text-danger'>{errors.grade.message}</small>)}</span>
            </Form.Text>
            </Form.Group>
          </Col>
          <Col sm={5} style={{float:'right'}}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Course type</Form.Label>
           <div style={{display:'flex',marginRight:'2px'}}>
  
            <Form.Check 
            type="radio"
            id="custom-switch"
            label="Fulltime"
            checked={gender === "Male"}
       
          />
 
          <Form.Check 
            type="radio"
            id="custom-switch"
            label="Partime"
            checked={gender === "Female"}
          
          />

          <Form.Check 
            type="radio"
            id="custom-switch"
            label="Distant"
            checked={gender === "Transgender"}
          />
        
        </div >
            <Form.Text className="text-muted">
            <span className='text-center'>{errors.position && (<small className='text-center text-danger'>{errors.position.message}</small>)}</span>
            </Form.Text>
            </Form.Group>
          </Col>
          
        </Row>
      </Modal.Body>
      <Modal.Footer>
      <Button type='submit' onClick=''>Submit</Button>
        <Button type='submit' onClick=''>Submit</Button>
      </Modal.Footer>
      </Form>
    </Modal>
  );
}




function Usereducation() {
  const [modalShow, setModalShow] = useState(false);
  const [smShow, setSmShow] = useState(false);

  return (
    <Container>
    <Col >
    <div className="wrappere">
          
          <div className="card radius shadowDepth1 shadow-lg">
      
              <div className="card__content card__padding">
     <Alert variant="light" className='shadow-lg'>
         <Alert.Heading><p >Education<h6 onClick={() => setModalShow(true)} className='educationAdd'>Add</h6></p></Alert.Heading>
         <Row>
         <Col sm={12}>
         <p className='' style={{fontWeight:'bold'}}>
          Course : B-tech  <Pencil /><br/>
          Branch : Computer Science  <br/>
          <Trash className='deleteicon' onClick={() => setSmShow(true)} />
          University : APJ Kalam<br/>
          PassOut : 2021<br/>
          Grade(CGPA) : 7 
          
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

export default Usereducation