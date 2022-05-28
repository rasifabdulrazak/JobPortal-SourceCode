import React, { useState, useEffect } from "react";
import {
  Container,
  Alert,
  Overlay,
  Popover,
  Col,
  Row,
  Modal,
  Button,
  Form,
} from "react-bootstrap";
import { Pencil } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

function UserPersonalDetail() {
  const [modalShow, setModalShow] = useState(false);
  const userId = useSelector((state) => state.userId);
  const [details, setDetails] = useState();
  const handleClose = () => setModalShow(false);
  const handleShow = () => setModalShow(true);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    try {
      const data = {
        user: userId.userId,
        date_of_birth: e.date_of_birth,
        gender: e.gender,
        adress: e.adress,
        marital_status: e.marital_status,
        hometown: e.hometown,
        pincode: e.pincode,
      };
      console.log(data);
      const response = await axios.post(
        "http://127.0.0.1:8000/users/user_personal/",
        data
      );
      setModalShow(false);
      personaldetails();
      navigate("/user_profile");
    } catch (error) {
      console.log(error);
    }
  };

  const personaldetails = async () => {
    console.log("asdfghj");
    try {
      const { data } = await axios.get(
        `http://127.0.0.1:8000/users/user_personal/${userId.userId}/`
      );
      setDetails(data);
      console.log("ASDFGHJK");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    personaldetails();
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
                    Personal Details
                    <Pencil onClick={() => setModalShow(true)} />
                  </p>
                </Alert.Heading>
                {details &&
                  details.map((value) => (
                    <Row>
                      <Col sm={4}>
                        <p style={{ fontWeight: "bold" }}>
                          Date Of Birth: <br />
                        </p>
                        {value.date_of_birth}
                      </Col>
                      <Col sm={4}>
                        <p style={{ fontWeight: "bold" }}>
                          Gender:
                          <br />
                        </p>
                        {value.gender}
                      </Col>
                      <Col sm={4}>
                        <p style={{ fontWeight: "bold" }}>
                          Address: <br />
                        </p>
                        {value.adress}
                      </Col>

                      <hr style={{ marginTop: "2rem" }} />
                      <Col sm={4}>
                        <p style={{ fontWeight: "bold" }}>
                          Hometown: <br />
                        </p>
                        {value.hometown}
                      </Col>
                      <Col sm={4}>
                        <p style={{ fontWeight: "bold" }}>
                          Area PinCode:
                          <br />
                        </p>
                        {value.pincode}
                      </Col>
                      <Col sm={4}>
                        <p style={{ fontWeight: "bold" }}>
                          Marital Status: <br />
                        </p>
                        {value.marital_status}
                      </Col>
                    </Row>
                  ))}
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
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Modal.Header onClick={handleClose} closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Add Personal Details
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col sm={5} style={{ float: "right" }}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Date of Birth</Form.Label>
                  <Form.Control
                    {...register("date_of_birth", {
                      required: "date_of_birth is required",
                    })}
                    type="date"
                    placeholder="Enter date_of_birth"
                  />
                  <Form.Text className="text-muted">
                    <span className="text-center">
                      {errors.date_of_birth && (
                        <small className="text-center text-danger">
                          {errors.date_of_birth.message}
                        </small>
                      )}
                    </span>
                  </Form.Text>
                </Form.Group>
              </Col>
              <Col sm={5}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Gender</Form.Label>
                  <Form.Select
                    {...register("gender", { required: "gender is required" })}
                    name="status"
                    aria-label="Default select example"
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col sm={5} style={{ float: "right" }}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    {...register("adress", {
                      required: "adress is required",
                      minLength: {
                        value: 6,
                        message: "Should contain 6 characters",
                      },
                    })}
                    type="text"
                    placeholder="Enter adress"
                  />
                  <Form.Text className="text-muted">
                    <span className="text-center">
                      {errors.adress && (
                        <small className="text-center text-danger">
                          {errors.adress.message}
                        </small>
                      )}
                    </span>
                  </Form.Text>
                </Form.Group>
              </Col>
              <Col sm={5}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label> Hometown</Form.Label>
                  <Form.Control
                    {...register("hometown", {
                      required: "hometown is required",
                      minLength: {
                        value: 6,
                        message: "Should contain 6 characters",
                      },
                    })}
                    type="text"
                    placeholder="Enter hometown"
                  />
                  <Form.Text className="text-muted">
                    <span className="text-center">
                      {errors.hometown && (
                        <small className="text-center text-danger">
                          {errors.hometown.message}
                        </small>
                      )}
                    </span>
                  </Form.Text>
                </Form.Group>
              </Col>
              <Col sm={5} style={{ float: "right" }}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Area Pincode</Form.Label>
                  <Form.Control
                    {...register("pincode", {
                      required: "pincode is required",
                      minLength: {
                        value: 6,
                        message: "Should contain 6 characters",
                      },
                    })}
                    type="number"
                    placeholder="Enter pincode"
                  />
                  <Form.Text className="text-muted">
                    <span className="text-center">
                      {errors.pincode && (
                        <small className="text-center text-danger">
                          {errors.pincode.message}
                        </small>
                      )}
                    </span>
                  </Form.Text>
                </Form.Group>
              </Col>
              <Col sm={5}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Marital Status</Form.Label>
                  <Form.Select
                    {...register("marital_status", {
                      required: "marital status is required",
                    })}
                    name="status"
                    aria-label="Default select example"
                  >
                    <option value="Married">Married</option>
                    <option value="Unmarried">Unmarried</option>
                    <option value="Seperated">Seperated</option>
                    <option value="Widow">Widow</option>
                    <option value="Divorced">Divorced</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => setModalShow(false)}>Close</Button>
            <Button type="submit">Save Changes</Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </Container>
  );
}

export default UserPersonalDetail;
