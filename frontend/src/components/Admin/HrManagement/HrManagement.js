import React, { useState, useEffect } from "react";
import { Container, Table, Row, Button, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function HrManagement() {
  const navigate = useNavigate();
  const [hr, setHr] = useState([]);

  const hrRegister = async () => {
    try {
      const { data } = await axios.get(`http://127.0.0.1:8000/hr_login/hr_register` );
      console.log(data);
      setHr(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    hrRegister();
  }, []);

  return (
    <>
      <Container className="wrappere">
        <h1>HR Management</h1>
        <Row>
          <Table striped bordere d hover>
            <thead>
              <tr>
                <th>No</th>
                <th>Username</th>
                <th>Email</th>
                <th>Phonenumber</th>
                <th>View</th>
                <th>Verify</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {hr &&
                hr.map((value, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{value.username}</td>
                    <td>{value.email}</td>
                    <td>{value.phonenumber}</td>

                    <td>
                      <Button variant="primary">View</Button>
                    </td>
                    <td
                      className="text-center"
                      style={{ alignItems: "center" }}
                    >
                      
                      <Button onClick={()=>navigate('/user_details')} size="md" variant="success" >
                        verify
                      </Button>
                    </td>
                    <td>
                      <Button variant="primary">View</Button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </Row>
      </Container>
    </>
  );
}

export default HrManagement;
