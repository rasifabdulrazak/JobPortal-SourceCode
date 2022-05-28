import React, { useState, useEffect } from "react";
import { Container, Table, Row, Button, Col, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function HrManagement() {
  const navigate = useNavigate();
  const [hr, setHr] = useState([]);
  const [deleteItem, setDeleteItem] = useState(false);

  const hrRegister = async () => {
    try {
      const { data } = await axios.get(
        `http://127.0.0.1:8000/hr_login/hr_register`
      );
      console.log(data);
      setHr(data);
    } catch (error) {
      console.log(error);
    }
  };

  const blockRecruiter = async () => {
    console.log(deleteItem);
    try {
      await axios.patch(`http://127.0.0.1:8000/users/${deleteItem.id}/`);
      hrRegister();
      setDeleteItem(false);
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
                <th className="text-center">No</th>
                <th className="text-center">Username</th>
                <th className="text-center">Email</th>
                <th className="text-center">Phonenumber</th>
                <th className="text-center">Verify</th>
                <th className="text-center">Status</th>
              </tr>
            </thead>
            <tbody>
              {hr &&
                hr.map((value, index) => (
                  <tr>
                    <td className="text-center">{index + 1}</td>
                    <td className="text-center">{value.username}</td>
                    <td className="text-center">{value.email}</td>
                    <td className="text-center">{value.phonenumber}</td>
                    <td className="text-center">
                      <Button
                        onClick={() => navigate(`/hr_details/${value.id}`)}
                        size="md"
                        variant="primary"
                      >
                        verify
                      </Button>
                    </td>
                    <td className="text-center">
                      {value.is_active ? (
                        <Button
                          variant="success"
                          onClick={() => setDeleteItem(value)}
                        >
                          Active
                        </Button>
                      ) : (
                        <Button
                          variant="danger"
                          onClick={() => setDeleteItem(value)}
                        >
                          Inactive
                        </Button>
                      )}
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>

          {/* ==========================  modal ============================= */}

          {deleteItem && (
            <Modal
              size="sm"
              show={true}
              onHide={() => setDeleteItem(false)}
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
                <Button
                  variant="secondary"
                  onClick={() => setDeleteItem(false)}
                >
                  Close
                </Button>
                <Button onClick={blockRecruiter}>Block</Button>
              </Modal.Footer>
            </Modal>
          )}

          {/* ==========================  modal ============================= */}
        </Row>
      </Container>
    </>
  );
}

export default HrManagement;
