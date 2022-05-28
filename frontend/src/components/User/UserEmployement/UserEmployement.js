import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import {
  Container,
  Alert,
  Overlay,
  Popover,
  Col,
  Row,
  Button,
  Form,
  Modal,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Instagram, Pencil, Trash } from "react-bootstrap-icons";
import "./UserEmployement.css";
import axios from "axios";

function UserEmployement() {
  const [modalShow, setModalShow] = useState(false);
  const [smShow, setSmShow] = useState(false);
  const handleClose = () => setModalShow(false);
  const handleShow = () => setModalShow(true);
  const [employement, setEmployement] = useState();
  const userId = useSelector((state) => state.userId);
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
        company_name: e.company_name,
        expereince: e.expereince,
        started_date: e.started_date,
        ending_date: e.ending_date,
        salary: e.salary,
        position: e.position,
        job_description: e.job_description,
      };
      const response = await axios.post(
        "http://127.0.0.1:8000/users/user_employment/",
        data
      );
      console.log(response);
      handleClose();
      employeeDetail();
      navigate("/user_profile");
    } catch (error) {
      console.log(error);
      console.log("sdfghj");
    }
  };

  const deleteEmployement = async (e) => {
    try {
      const { data } = await axios.delete(
        `http://127.0.0.1:8000/users/user_employment/${e}/`
      );
      employeeDetail();
      setSmShow(false);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const employeeDetail = async () => {
    try {
      const { data } = await axios.get(
        `http://127.0.0.1:8000/users/user_employment/${userId.userId}/`
      );
      setEmployement(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    employeeDetail();
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
                    Employement
                    <h6
                      onClick={() => setModalShow(true)}
                      className="employeeAdd"
                    >
                      Add
                    </h6>
                  </p>
                </Alert.Heading>
                <Row>
                  <Col sm={12}>
                    {employement &&
                      employement.map((value) => (
                        <p className="" style={{ fontWeight: "bold" }}>
                          Company : {value.company_name} <Pencil />
                          <br />
                          Designation :{value.position} <br />
                          <Trash
                            className="deleteicon"
                            onClick={() => setSmShow(true)}
                          />
                          StartDate : {value.started_date} <br />
                          EndDate : {value.ending_date} <br />
                          Current Salary :{value.salary} <br />
                          JobDescription :{value.job_description}
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
                                onClick={() => deleteEmployement(value.id)}
                                variant="primary"
                              >
                                Delete
                              </Button>
                            </Modal.Footer>
                          </Modal>
                        </p>
                      ))}
                  </Col>
                </Row>
                <hr />
                <p className="mb-0 text-center"></p>
              </Alert>
            </div>
          </div>
        </div>
      </Col>

      <Modal
        show={modalShow}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="wrapper"
      >
        <Modal.Header onClick={handleClose} closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add Employement
          </Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Modal.Body>
            <Row>
              <Col sm={5} style={{ float: "right" }}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Company</Form.Label>
                  <Form.Control
                    {...register("company_name", {
                      required: "company is required",
                      minLength: {
                        value: 6,
                        message: "Should contain 6 characters",
                      },
                    })}
                    type="text"
                    placeholder="Enter Company"
                  />
                  <Form.Text className="text-muted">
                    <span className="text-center">
                      {errors.company_name && (
                        <small className="text-center text-danger">
                          {errors.company_name.message}
                        </small>
                      )}
                    </span>
                  </Form.Text>
                </Form.Group>
              </Col>
              <Col sm={5}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Experience</Form.Label>
                  <Form.Control
                    {...register("expereince", {
                      required: "experiece is required",
                      minLength: {
                        value: 6,
                        message: "Should contain 6 characters",
                      },
                    })}
                    type="text"
                    placeholder="Enter Experience"
                  />
                  <Form.Text className="text-muted">
                    <span className="text-center">
                      {errors.expereince && (
                        <small className="text-center text-danger">
                          {errors.expereince.message}
                        </small>
                      )}
                    </span>
                  </Form.Text>
                </Form.Group>
              </Col>
              <Col sm={5} style={{ float: "right" }}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>StartDate</Form.Label>
                  <Form.Control
                    {...register("started_date", {
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
                      {errors.started_date && (
                        <small className="text-center text-danger">
                          {errors.started_date.message}
                        </small>
                      )}
                    </span>
                  </Form.Text>
                </Form.Group>
              </Col>
              <Col sm={5}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label> EndDate</Form.Label>
                  <Form.Control
                    {...register("ending_date", {
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
                      {errors.ending_date && (
                        <small className="text-center text-danger">
                          {errors.ending_date.message}
                        </small>
                      )}
                    </span>
                  </Form.Text>
                </Form.Group>
              </Col>
              <Col sm={5} style={{ float: "right" }}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Position</Form.Label>
                  <Form.Control
                    {...register("position", {
                      required: "position is required",
                      minLength: {
                        value: 6,
                        message: "Should contain 6 characters",
                      },
                    })}
                    type="text"
                    placeholder="Enter Position"
                  />
                  <Form.Text className="text-muted">
                    <span className="text-center">
                      {errors.position && (
                        <small className="text-center text-danger">
                          {errors.position.message}
                        </small>
                      )}
                    </span>
                  </Form.Text>
                </Form.Group>
              </Col>
              <Col sm={5}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Salary</Form.Label>
                  <Form.Control
                    {...register("salary", {
                      required: "salary is required",
                      minLength: {
                        value: 6,
                        message: "Should contain 6 characters",
                      },
                    })}
                    type="number"
                    placeholder="Enter Salary in LPA"
                  />
                  <Form.Text className="text-muted">
                    <span className="text-center">
                      {errors.salary && (
                        <small className="text-center text-danger">
                          {errors.salary.message}
                        </small>
                      )}
                    </span>
                  </Form.Text>
                </Form.Group>
              </Col>
              <Col sm={12}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>JobDescription</Form.Label>
                  <Form.Control
                    {...register("job_description", {
                      required: "description is required",
                      minLength: {
                        value: 6,
                        message: "Should contain 6 characters",
                      },
                    })}
                    style={{ width: "100%", height: "13rem" }}
                    type="text"
                    placeholder="Enter Jobdescription"
                  />
                  <Form.Text className="text-muted">
                    <span className="text-center">
                      {errors.job_description && (
                        <small className="text-center text-danger">
                          {errors.job_description.message}
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
    </Container>
  );
}

export default UserEmployement;
