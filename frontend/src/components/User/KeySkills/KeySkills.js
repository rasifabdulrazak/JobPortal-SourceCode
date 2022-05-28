import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Alert,
  Overlay,
  Popover,
  Col,
  Badge,
  Form,
  Button,
  Modal,
  Row,
  CloseButton,
} from "react-bootstrap";
import { Pencil } from "react-bootstrap-icons";
import "./KeySkills.css";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

function KeySkills() {
  const [show, setShow] = useState(false);
  const [skills, setSkills] = useState();
  const [error, setError] = useState();
  const navigate = useNavigate();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const userId = useSelector((state) => state.userId);

  const onSubmit = async (e) => {
    try {
      const data = {
        user: userId.userId,
        skills: e.skills,
      };

      const response = await axios.post(
        "http://127.0.0.1:8000/users/user_skills/",
        data
      );
      fecthing();
      setShow(false);
      navigate("/user_profile");
    } catch (error) {
      setError(error.response.data);
    }
  };

  const deleteSkills = async (e) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/users/user_skills/${e}/`);
      fecthing();
    } catch (error) {}
  };

  const fecthing = async () => {
    try {
      const { data } = await axios.get(
        `http://127.0.0.1:8000/users/user_skills/${userId.userId}/`
      );
      setSkills(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fecthing();
  }, []);

  return (
    <Container>
      <Col>
        <div className="wrappere">
          <div className="card radius shadowDepth1 shadow-lg">
            <div className="card__content card__padding">
              <Alert variant="light" className="shadow-lg">
                <div>
                  <Alert.Heading>
                    <p>
                      Key Skills
                      <Pencil className="editbutton" onClick={handleShow} />
                    </p>
                  </Alert.Heading>
                </div>
                <p>
                  <Row style={{ padding: "1rem" }}>
                    {skills &&
                      skills.map((value) => (
                        <Col style={{ display: "flex", marginLeft: "3px" }}>
                          <Alert
                            key=""
                            variant="secondary"
                            style={{ marginRight: "1rem" }}
                          >
                            {value.skills}
                            <CloseButton
                              onClick={() => deleteSkills(value.id)}
                            />
                          </Alert>
                        </Col>
                      ))}
                  </Row>
                </p>
                <hr />
                <p className="mb-0 text-center"></p>
              </Alert>
            </div>
          </div>
        </div>
      </Col>

      <Modal
        show={show}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Modal.Header closeButton>
            <Modal.Title>Add Skills</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p className="text-danger">{error && error.skills}</p>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Skills</Form.Label>
              <Form.Control
                {...register("skills", { required: "skills is required" })}
                type="text"
                placeholder="Enter the skills"
                autoFocus
              />
              <Form.Text className="text-muted">
                <span className="text-center">
                  {errors.skills && (
                    <small className="text-center text-danger">
                      {errors.skills.message}
                    </small>
                  )}
                </span>
              </Form.Text>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Save Changes
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </Container>
  );
}

export default KeySkills;
