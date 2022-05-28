import React, { useState, useEffect } from "react";
import { Button, Container, Table, Row, Col, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./UserManagement.css";
import axios from "axios";

function UserManagement() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [deleteItem, setDeleteItem] = useState(false);

  const blockUser = async () => {
    console.log(deleteItem);
    try {
      await axios.patch(`http://127.0.0.1:8000/users/${deleteItem.id}/`);
      fetchUsers();
      setDeleteItem(false);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchUsers = async () => {
    const { data } = await axios.get(`http://127.0.0.1:8000/users/`);
    console.log(data);
    setUsers(data);
  };
  // for fecthing user details to admin
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <Container className="wrappere">
        <h1 style={{ fontWeight: "bolder" }} className="text-center">
          User Management
        </h1>

        <div>
          <Row>
            <div class="table-responsive mt-4">
              <Table
                striped
                bordered
                hover
                variant="dark"
                className="text-center"
              >
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
                  {users &&
                    users.map((value, index) => (
                      <tr>
                        <td>{index + 1}</td>
                        <td>{value.username}</td>
                        <td>{value.email}</td>
                        <td>{value.phonenumber}</td>

                        <td>
                          <Button
                            variant="primary"
                            onClick={() =>
                              navigate(`/user_details/${value.id}`)
                            }
                          >
                            View
                          </Button>
                        </td>
                        <td
                          className="text-center"
                          style={{ alignItems: "center" }}
                        >
                          {value.is_active ? (
                            <Button
                              size="md"
                              onClick={() => setDeleteItem(value)}
                              variant="success"
                            >
                              Active
                            </Button>
                          ) : (
                            <Button
                              size="md"
                              onClick={() => setDeleteItem(value)}
                              variant="danger"
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
                    <Button onClick={blockUser}>Block</Button>
                  </Modal.Footer>
                </Modal>
              )}

              {/* ==========================  modal ============================= */}
            </div>
          </Row>
        </div>
      </Container>
    </>
  );
}

export default UserManagement;
