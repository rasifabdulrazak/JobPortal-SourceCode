import React, { useState, useEffect } from "react";
import {
  Container,
  Alert,
  Modal,
  Form,
  Overlay,
  Popover,
  Row,
  Col,
  Button,
} from "react-bootstrap";
import { Pencil, Trash } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import "./UserEducation.css";
import axios from "axios";
import { SliderValueLabelUnstyled } from "@mui/base";

function Usereducation() {
  const [modalShow, setModalShow] = useState(false);
  const [smShow, setSmShow] = useState(false);
  const [education, setEducation] = useState();
  const userId = useSelector((state) => state.userId);
  const handleClose = () => setModalShow(false);
  const handleShow = () => setModalShow(true);

  const navigate = useNavigate();
  const [gender, setGender] = useState("");

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
        course: e.course,
        branch: e.branch,
        university: e.university,
        passout_year: e.passout_year,
        grade: e.grade,
      };
      await axios.post("http://127.0.0.1:8000/users/user_education/", data);
      educationDetails();
      handleClose();
      navigate("/user_profile");
    } catch (error) {
      console.log(error);
    }
  };

  const deleteEducation = async (e) => {
    await axios.delete(`http://127.0.0.1:8000/users/user_education/${e}/`);
    educationDetails();
    setSmShow(false);
  };

  const educationDetails = async () => {
    try {
      const { data } = await axios.get(
        `http://127.0.0.1:8000/users/user_education/${userId.userId}/`
      );
      setEducation(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    educationDetails();
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
                    Education
                    <h6 onClick={handleShow} className="educationAdd">
                      Add
                    </h6>
                  </p>
                </Alert.Heading>
                <Row>
                  <Col sm={12}>
                    {education &&
                      education.map((value) => (
                        <p className="" style={{ fontWeight: "bold" }}>
                          Course : {value.course} <Pencil />
                          <br />
                          Branch : {value.branch} <br />
                          <Trash
                            className="deleteicon"
                            onClick={() => setSmShow(true)}
                          />
                          University : {value.university}
                          <br />
                          PassOut : {value.passout_year}
                          <br />
                          Grade(CGPA) : {value.grade}
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
                                variant="primary"
                                onClick={() => deleteEducation(value.id)}
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
      >
        <Modal.Header onClick={handleClose} closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add Education
          </Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Modal.Body>
            <Row>
              <Col sm={5} style={{ float: "right" }}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Course</Form.Label>
                  <Form.Control
                    {...register("course", {
                      required: "course is required",
                      minLength: {
                        value: 2,
                        message: "Should contain 6 characters",
                      },
                    })}
                    type="text"
                    placeholder="Enter Course"
                  />
                  <Form.Text className="text-muted">
                    <span className="text-center">
                      {errors.course && (
                        <small className="text-center text-danger">
                          {errors.course.message}
                        </small>
                      )}
                    </span>
                  </Form.Text>
                </Form.Group>
              </Col>
              <Col sm={5}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Branch</Form.Label>
                  <Form.Control
                    {...register("branch", {
                      required: "branch is required",
                      minLength: {
                        value: 2,
                        message: "Should contain 6 characters",
                      },
                    })}
                    type="text"
                    placeholder="Enter Branch"
                  />
                  <Form.Text className="text-muted">
                    <span className="text-center">
                      {errors.branch && (
                        <small className="text-center text-danger">
                          {errors.branch.message}
                        </small>
                      )}
                    </span>
                  </Form.Text>
                </Form.Group>
              </Col>
              <Col sm={5} style={{ float: "right" }}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>University</Form.Label>
                  <Form.Control
                    {...register("university", {
                      required: "university is required",
                      minLength: {
                        value: 2,
                        message: "Should contain 6 characters",
                      },
                    })}
                    type="text"
                    placeholder="Enter University"
                  />
                  <Form.Text className="text-muted">
                    <span className="text-center">
                      {errors.university && (
                        <small className="text-center text-danger">
                          {errors.university.message}
                        </small>
                      )}
                    </span>
                  </Form.Text>
                </Form.Group>
              </Col>
              <Col sm={5}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label> Passout_Year</Form.Label>
                  <Form.Control
                    {...register("passout_year", {
                      required: "passout_year is required",
                    })}
                    type="date"
                    placeholder="Enter Passout_Year"
                  />
                  <Form.Text className="text-muted">
                    <span className="text-center">
                      {errors.passout_year && (
                        <small className="text-center text-danger">
                          {errors.passout_year.message}
                        </small>
                      )}
                    </span>
                  </Form.Text>
                </Form.Group>
              </Col>
              <Col sm={5} style={{ float: "right" }}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Grade</Form.Label>
                  <Form.Control
                    {...register("grade", {
                      required: "grade is required",
                      minLength: {
                        value: 1,
                        message: "Should contain 1 characters",
                      },
                    })}
                    type="number"
                    placeholder="Enter Grade"
                  />
                  <Form.Text className="text-muted">
                    <span className="text-center">
                      {errors.grade && (
                        <small className="text-center text-danger">
                          {errors.grade.message}
                        </small>
                      )}
                    </span>
                  </Form.Text>
                </Form.Group>
              </Col>
              <Col sm={5} style={{ float: "right" }}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Course Type</Form.Label>
                  <Form.Select
                    {...register("status")}
                    name="status"
                    aria-label="Default select example"
                  >
                    <option value="Part time">Part time</option>
                    <option value="Full time">Full time</option>
                    <option value="Distant">Distant</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button type="submit">Submit</Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </Container>
  );
}

export default Usereducation;
