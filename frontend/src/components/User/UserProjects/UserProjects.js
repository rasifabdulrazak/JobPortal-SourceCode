import React, { useState, useEffect } from "react";
import {
  Container,
  Alert,
  Overlay,
  Popover,
  Col,
  Modal,
  Row,
  Form,
  Button,
} from "react-bootstrap";
import { Instagram, Pencil, Trash } from "react-bootstrap-icons";
import "./UserProjects.css";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import SweetAlert from "react-bootstrap-sweetalert";
import axios from "axios";

function UserProjects() {
  const [editModal,setEditModal] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const handleClose = () => setModalShow(false);
  const handleShow = () => setModalShow(true);
  const [modalShow, setModalShow] = useState(false);
  const [smShow, setSmShow] = useState(false);
  const userId = useSelector((state) => state.userId);
  const [project, setProject] = useState([]);
  const navigate = useNavigate();

  const {
    register,
    reset,
    trigger,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();
  const onSubmit = async (e) => {
    try {
      const data = {
        user: userId.userId,
        title: e.title,
        start_date: e.start_date,
        end_date: e.end_date,
        status: e.status,
        details: e.details,
      };
      await axios.post("http://127.0.0.1:8000/users/user_projects/", data);
      projectDetails();
      setModalShow(false);
      navigate("/user_profile");
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProject = async (e) => {
    console.log(e);
    try {
      const data = await axios.delete(
        `http://127.0.0.1:8000/users/user_projects/${e}`
      );
      setSmShow(false);
      projectDetails();
      setConfirm(true)
    } catch (error) {
      console.log(error);
    }
  };

  const editProject = async (data)=>{
    try {
      await axios.put(`http://127.0.0.1:8000/users/user_projects/${editModal.id}/`,data)
      projectDetails();
      setEditModal(false);

    } catch (error) {
      console.log(error)
    }
  }

  const projectDetails = async () => {
    const { data } = await axios.get(
      `http://127.0.0.1:8000/users/user_projects/${userId.userId}/`
    );
    console.log(data);
    setProject(data);
  };

  useEffect(() => {
    projectDetails();
  }, []);

  return (
    <Container>
      <Col>
        <div className="wrappere">
          <div className="card radius shadowDepth1 shadow-lg">
            <div className="card__content card__padding">
              <Alert variant="light" className="shadow-lg">
                <Alert.Heading>
                  <p>
                    Projects
                    <h6
                      onClick={() => setModalShow(true)}
                      className="projectAdd"
                    >
                      Add
                    </h6>
                  </p>
                </Alert.Heading>
                <Row>
                  <Col sm={12}>
                    {project.length>0 ?
                      project.map((value) => (
                        <p className="" style={{ fontWeight: "bold" }}>
                          Title :<small>{value.title}</small> <Pencil onClick={()=>setEditModal(value)} />
                          <br />
                          StartDate : <small>{value.start_date}</small> <br />
                          EndDate : <small>{value.end_date} </small>
                          <br />
                          <Trash
                            className="deleteicon"
                            onClick={() => setSmShow(true)}
                          />
                          Status : <small>{value.status}</small>
                          <br />
                          Details :<small>{value.details}.</small>
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
                            <Modal.Body>
                              Are you sure you want to delete
                            </Modal.Body>
                            <Modal.Footer>
                              <Button
                                onClick={() => setSmShow(false)}
                                variant="secondary"
                              >
                                Close
                              </Button>
                              <Button
                                onClick={() => deleteProject(value.id)}
                                variant="primary"
                              >
                                Delete
                              </Button>
                            </Modal.Footer>
                          </Modal>
                        </p>
                      )):(<p>Please Provide Projects if any</p>)}
                    <br />
                  </Col>
                </Row>
                <hr />
                <p className="mb-0 text-center"></p>
              </Alert>
            </div>
          </div>
        </div>
      </Col>

      {/* *********************************Add Modal Starts here**************************** */}

      <Modal
        show={modalShow}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header onClick={handleClose} closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add Project
          </Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Modal.Body>
            <Row>
              <Col sm={6} style={{ float: "right" }}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    {...register("title", {
                      required: "title is required",
                      minLength: {
                        value: 6,
                        message: "Should contain 6 characters",
                      },
                    })}
                    type="text"
                    placeholder="Enter Title"
                  />
                  <Form.Text className="text-muted">
                    <span className="text-center">
                      {errors.title && (
                        <small className="text-center text-danger">
                          {errors.title.message}
                        </small>
                      )}
                    </span>
                  </Form.Text>
                </Form.Group>
              </Col>

              <Col sm={6} style={{ float: "right" }}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>status</Form.Label>
                  <Form.Select
                    {...register("status")}
                    name="status"
                    aria-label="Default select example"
                  >
                    <option value="In progress">In progress</option>
                    <option value="Completed">Completed</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col sm={6} style={{ float: "right" }}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>StartDate</Form.Label>
                  <Form.Control
                    {...register("start_date", {
                      required: "startdate is required",
                      minLength: {
                        value: 6,
                        message: "Should contain 6 characters",
                      },
                    })}
                    type="date"
                    placeholder="Enter Startdate"
                  />
                  <Form.Text className="text-muted">
                    <span className="text-center">
                      {errors.start_date && (
                        <small className="text-center text-danger">
                          {errors.start_date.message}
                        </small>
                      )}
                    </span>
                  </Form.Text>
                </Form.Group>
              </Col>
              <Col sm={6}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label> EndDate</Form.Label>
                  <Form.Control
                    {...register("end_date", {
                      required: "enddate is required",
                      minLength: {
                        value: 6,
                        message: "Should contain 6 characters",
                      },
                    })}
                    type="date"
                    placeholder="Enter Enddate"
                  />
                  <Form.Text className="text-muted">
                    <span className="text-center">
                      {errors.end_date && (
                        <small className="text-center text-danger">
                          {errors.end_date.message}
                        </small>
                      )}
                    </span>
                  </Form.Text>
                </Form.Group>
              </Col>
              <Col sm={12}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>ProjectDescription</Form.Label>
                  <Form.Control
                    {...register("details", {
                      required: "description is required",
                      minLength: {
                        value: 6,
                        message: "Should contain 6 characters",
                      },
                    })}
                    style={{ width: "100%", height: "13rem" }}
                    type="text"
                    placeholder="Enter ProjectDescription"
                  />
                  <Form.Text className="text-muted">
                    <span className="text-center">
                      {errors.details && (
                        <small className="text-center text-danger">
                          {errors.details.message}
                        </small>
                      )}
                    </span>
                  </Form.Text>
                </Form.Group>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button type="submit" onClick="">
              Submit
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
      {/* *********************************Add Modal Ends here**************************** */}


       {/* *********************************Edit Modal Starts here**************************** */}

       {editModal && <Modal
        show={editModal}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header onClick={()=>setEditModal(false)} closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Edit Project
          </Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit(editProject)}>
          <Modal.Body>
            <Row>
              <Col sm={6} style={{ float: "right" }}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    {...register("title", {
                      required: "title is required",
                      minLength: {
                        value: 6,
                        message: "Should contain 6 characters",
                      },
                    })}
                    value={editModal.title}
                    onChange={(e) => setEditModal({ ...editModal, title: e.target.value })}
                    type="text"
                    placeholder="Enter Title"
                  />
                  <Form.Text className="text-muted">
                    <span className="text-center">
                      {errors.title && (
                        <small className="text-center text-danger">
                          {errors.title.message}
                        </small>
                      )}
                    </span>
                  </Form.Text>
                </Form.Group>
              </Col>

              <Col sm={6} style={{ float: "right" }}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>status</Form.Label>
                  <Form.Select
                    {...register("status")}
                    name="status"
                    aria-label="Default select example"
                  >
                    <option value="In progress">In progress</option>
                    <option value="Completed">Completed</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col sm={6} style={{ float: "right" }}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>StartDate</Form.Label>
                  <Form.Control
                    {...register("start_date", {
                      required: "startdate is required",
                      minLength: {
                        value: 6,
                        message: "Should contain 6 characters",
                      },
                    })}
                    value={editModal.start_date}
                    onChange={(e) => setEditModal({ ...editModal, start_date: e.target.value })}
                    type="date"
                    placeholder="Enter Startdate"
                  />
                  <Form.Text className="text-muted">
                    <span className="text-center">
                      {errors.start_date && (
                        <small className="text-center text-danger">
                          {errors.start_date.message}
                        </small>
                      )}
                    </span>
                  </Form.Text>
                </Form.Group>
              </Col>
              <Col sm={6}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label> EndDate</Form.Label>
                  <Form.Control
                    {...register("end_date", {
                      required: "enddate is required",
                      minLength: {
                        value: 6,
                        message: "Should contain 6 characters",
                      },
                    })}
                    value={editModal.end_date}
                    onChange={(e) => setEditModal({ ...editModal, end_date: e.target.value })}
                    type="date"
                    placeholder="Enter Enddate"
                  />
                  <Form.Text className="text-muted">
                    <span className="text-center">
                      {errors.end_date && (
                        <small className="text-center text-danger">
                          {errors.end_date.message}
                        </small>
                      )}
                    </span>
                  </Form.Text>
                </Form.Group>
              </Col>
              <Col sm={12}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>ProjectDescription</Form.Label>
                  <Form.Control
                    {...register("details", {
                      required: "description is required",
                      minLength: {
                        value: 6,
                        message: "Should contain 6 characters",
                      },
                    })}
                    value={editModal.details}
                    onChange={(e) => setEditModal({ ...editModal, details: e.target.value })}
                    style={{ width: "100%", height: "13rem" }}
                    type="text"
                    placeholder="Enter ProjectDescription"
                  />
                  <Form.Text className="text-muted">
                    <span className="text-center">
                      {errors.details && (
                        <small className="text-center text-danger">
                          {errors.details.message}
                        </small>
                      )}
                    </span>
                  </Form.Text>
                </Form.Group>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button type="submit" onClick={()=>setEditModal(false)}>
              Close
            </Button>
            <Button type="submit" >
              Submit
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>}
      {/* *********************************Edit Modal Ends here**************************** */}

      {/* ***********************Delete Alerts Starts here******************************** */}
      <SweetAlert
        success
        title="Deleted!"
        show={confirm}
        onConfirm={() => setConfirm(false)}
      >
        Project Deleted
      </SweetAlert>
       {/* ***********************Delete Alert Ends******************************** */}


    </Container>
  );
}

export default UserProjects;
