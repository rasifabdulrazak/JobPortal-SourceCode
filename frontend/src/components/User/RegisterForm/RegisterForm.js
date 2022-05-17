import React, { useState } from 'react'
import {Container,Button, Form,Col,Row,ListGroup} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useForm, Controller } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'


function RegisterForm() {
  const {register,reset,trigger,handleSubmit,setError   ,formState:{errors}}=useForm();
  const navigate = useNavigate()
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const onSubmit =async(data)=>{
    
    const config = {
      headers: {
          'Content-Type': 'multipart/form-data'
      }
    }
    const formData = new FormData()
    formData.set('username', data.username)
    formData.set('phonenumber', data.phone)
    formData.set('email', data.email)
    formData.set('work_status', data.status)
    formData.set('password', data.password)
    console.log(formData)
    
    console.log(data)
    try{
      const response = await axios.post("http://127.0.0.1:8000/users/", formData,config)
      navigate("/login");
    }
    catch(error){
      console.log(error.response.data)
      if (error.response.data.username) {
        setError("username", { type: "server", message: error.response.data.username });
   }
   if (error.response.data.email) {
        setError("email", { type: "server", message: error.response.data.email });
   }
   if (error.response.data.password) {
        setError("password", { type: "server", message: error.response.data.password[0] });
   }
   if (error.response.data.phonenumber) {
        setError("phone", { type: "server", message: error.response.data.phonenumber[0] });
   }
    }
    
  }


 


  return (
    <>
    <Container >
    <Row>
            <Col sm={7}>
            <div className="wrappere">
          
          <div className="card radius shadowDepth1 shadow-lg">
      
              <div className="card__content card__padding">
                  
              <Form onSubmit={handleSubmit(onSubmit)} enctype="multipart/form-data">
          <Row style={{marginTop:'2rem'}}>
    <Col sm={8}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Username</Form.Label>
    <Form.Control
      {...register("username",{required:"username is required",minLength:{
        value:6,
        message:"Should contain 6 characters"
      }})}
      name="username"
      type="text" 
      placeholder="Enter username" 
        />
        <Form.Text className="text-muted">
        <span className='text-center'>{errors.username && (<small className='text-center text-danger'>{errors.username.message}</small>)}</span>
    </Form.Text>
       
  </Form.Group>
    </Col>
    <Col sm={4}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Phone Number</Form.Label>
    <Form.Control 
      {...register("phone",{required:"Number is required",pattern:{
        value:"^(\+0?1\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$",
        message:"Invalid phone id",
        
      },
      minLength:{
        value:'10',
        message:'Should contain 10 numbers'
      }
    })}
    onKeyPress={function (evt) {
      if (evt.which != 8 && evt.which != 0 && evt.which < 48 || evt.which > 57)
      {
          evt.preventDefault();
      }
  }}
    onInput={function (evt) {
      if (evt.which != 8 && evt.which != 0 && evt.which < 48 || evt.which > 57)
      {
          evt.preventDefault();
      }
  }}
      name="phone"
      minLength={10}
      type="number"
      placeholder="Enter Mobile" />
       <Form.Text className="text-muted">
        <span className='text-center'>{errors.phone && (<small className='text-center text-danger'>{errors.phone.message}</small>)}</span>
    </Form.Text>
  </Form.Group>
    </Col>
  </Row>
  <Row>
    <Col sm={12}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control 
     {...register("email",{required:"email is required",pattern:{
      value:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message:"Invalid mail id"
    }})}
    name="email"
      type="email" 
      placeholder="Enter email" />
    <Form.Text className="text-muted">
    <span className='text-center'>{errors.email && (<small className='text-center text-danger'>{errors.email.message}</small>)}</span>
    </Form.Text>
    
  </Form.Group>
    </Col>

  </Row>
  <Row>
  {/* <Col sm>
    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Upload Resume</Form.Label>
    <Form.Control 
      {...register('file',{required:"Resume is required"})}
      name="file"
      type="file" />
    <Form.Text className="text-muted">
    <span className='text-center'>{errors.file && (<small className='text-center text-danger'>{errors.file.message}</small>)}</span>
    </Form.Text>
  </Form.Group>
    </Col> */}
     <Col sm>
     <Form.Group className="mb-3" controlId="formBasicEmail">
     <Form.Label>Work status</Form.Label>
     <Form.Select 
     {...register('status')}
     name="status"
     aria-label="Default select example">
      <option value="Fresher">Fresher</option>
      <option value="Experienced">Experienced</option>
      </Form.Select>
      </Form.Group>
    </Col>
  </Row>
  <Row>
  <Col sm>
    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Password</Form.Label>
    <Form.Control 
     {...register("password",{required:"password is required",minLength:{
      value:8,
      message:"Please Enter atleast 8 charecters"
    },pattern:{
      value:/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      message:"Please Enter a strong password ,should contain letter charecter and number"
    }})}
      name="password"
      onChange={e => setPassword(e.target.value)}
      type="password" 
      placeholder="Enter password" />
    <Form.Text className="text-muted">
    <span className='text-center'>{errors.password && (<small className='text-center text-danger'>{errors.password.message}</small>)}</span>
    </Form.Text>
  </Form.Group>
    </Col>
     <Col sm>
     <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Confirm Password</Form.Label>
    <Form.Control 
      {...register("cpassword",{required:"confirmpassword is required",pattern:{
        
          
      }})}
      name="cpassword"
      type="password" 
      onChange={e => setPassword2(e.target.value)}
      placeholder="confirm password" />
    <Form.Text className="text-muted">
    <p className='text-danger'>{password2 !== password ? "Passwords do not match" : ""}</p>
    <span className='text-center'>{errors.cpassword && (<small className='text-center text-danger'>{errors.cpassword.message}</small>)}</span>
    {/* <p className='text-danger'>{password !== cpassword ? "Passwords do not match" : ""}</p> */}
    </Form.Text>
  </Form.Group>
    </Col>
  </Row>
  <Row>
    
    <Button as="input" type="submit" value="Resgister" />

    
   
  </Row>
  </Form>   
                  
              </div>
          </div>

         
      </div>
            </Col>
            <Col sm={5}>
            <div className="wrappere">
          
          <div className="card radius shadowDepth1 shadow-lg">
      
              <div className="card__content card__padding">
              <img  className='img-fluid shadow-lg' src='https://c0.wallpaperflare.com/preview/271/294/543/advice-answer-ask-assistance.jpg' />
              </div>

              <div class="card__action">
                  
                  
              </div>
          </div>

         
      </div>
            </Col>
        </Row>



    </Container>
  
    </>
    
  )
}

export default RegisterForm