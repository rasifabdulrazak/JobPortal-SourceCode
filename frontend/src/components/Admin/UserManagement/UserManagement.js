import React,{useState,useEffect} from 'react'
import { Button, Container,Table,Row,Col,Modal } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import './UserManagement.css'
import axios from 'axios';

function UserManagement() {
  const navigate = useNavigate()
  const [smShow, setSmShow] = useState(false);
  const [users,setUsers] = useState([]);


  // for fecthing user details to admin 
  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/users/`)
    .then(res => {
     setUsers (res.data)
    })
  },[]);


  return (
    <>
    <Container className='wrappere'>
    <h1 style={{fontWeight:'bolder'}} className='text-center'>User Management</h1>
    
        <div>
            <Row>
                <div class="table-responsive mt-4">
                <Table striped bordered hover variant="dark" className='text-center'>
  <thead>
    <tr>
      <th>No:</th>
      <th>User Name</th>
      <th>Email</th>
      <th>Phonenumber</th>
      <th>View</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    {users.map((value,index)=>
    <tr>
      <td>{index+1}</td>
      <td>{value.username}</td>
      <td>{value.email}</td>
      <td>{value.phonenumber}</td>
     
      <td><Button variant="primary" onClick={()=>navigate('/user_details')}>View</Button></td>
      <td className='text-center' style={{alignItems:'center'}}><Button size="md" onClick={() => setSmShow(true)} variant="success">Active</Button></td>
    </tr>
    )}
  </tbody>
</Table>
  
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
          <Button  variant='secondary' onClick={() => setSmShow(false)}>Close</Button>
          <Button>Block</Button>
        </Modal.Footer>
      </Modal>
  </div>               
    </Row>
</div>
    </Container>
    </>
  )
}

export default UserManagement