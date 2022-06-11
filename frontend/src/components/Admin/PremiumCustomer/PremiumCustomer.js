import axios from 'axios'
import React, { useEffect,useState } from 'react'
import { Container,Button,Row,Table } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const PremiumCustomer = () => {
    const navigate = useNavigate()
    const [customer,setCustomer] = useState([])

    const fetchPremiumCustomers = async () =>{
        try {
            const {data} = await axios.get('http://127.0.0.1:8000/users/payment_success/')
            console.log(data)
            setCustomer(data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        fetchPremiumCustomers()
    },[])

  return (
    <>
    <Container className="wrappere">
        <h1>Premium Customers</h1>
        <Row>
          <Table striped bordere d hover>
            <thead>
              <tr>
                <th className="text-center">No</th>
                <th className="text-center">Username</th>
                <th className="text-center">Email</th>
                <th className="text-center">Phonenumber</th>
                <th className="text-center">Plan</th>
                <th className="text-center">Duration</th>
                <th className="text-center">View</th>
              </tr>
            </thead>
            <tbody>
           
                  {customer.length>0 && customer.map((value,index)=> <tr>
                    <td className="text-center">{index+1}</td>
                    <td className="text-center">{value.user_id}</td>
                    <td className="text-center">{value.email}</td>
                    <td className="text-center">{value.phonenumber}</td>
                    <td className="text-center">{value.plan_id}</td>
                    <td className="text-center">{value.duration} months</td>
                    <td className="text-center">
                      <Button
                        onClick={() => navigate(`/user_details/${value.user}`)}
                        size="md"
                        variant="primary"
                      >
                        View
                      </Button>
                    </td>
                  </tr>)}
         
            </tbody>
          </Table>

        </Row>
      </Container>

    </>
  )
}

export default PremiumCustomer