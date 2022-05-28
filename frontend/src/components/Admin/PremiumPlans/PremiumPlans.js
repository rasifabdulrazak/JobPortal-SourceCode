import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  Table,
  Modal,
  Form,
  Row,
  Col,
} from "react-bootstrap";
import { useForm, Controller } from "react-hook-form";

const PremiumPlans = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const [plans, setPlans] = useState();
  const [err, setErr] = useState({});
  const [show, setShow] = useState(false);
  const [deleteItem, setDeleteItem] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const addPlanshandler = async (e) => {
    try {
      const { data } = await axios.post(
        `http://127.0.0.1:8000/api/premium_plans/`,
        e
      );
      fetchPlans();
      handleClose();
    } catch (error) {
      const errors = {
        plan_name: error.response.data.plan_name,
        plan_rate: error.response.data.plan_rate,
      };
      setErr(errors);
    }
  };

  const deletePlans = async () => {
    try {
      await axios.delete(
        `http://127.0.0.1:8000/api/premium_plans/${deleteItem.id}/`
      );
      fetchPlans();
      setDeleteItem(false);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchPlans = async () => {
    const { data } = await axios.get(
      `http://127.0.0.1:8000/api/premium_plans/`
    );
    setPlans(data);
  };

  useEffect(() => {
    fetchPlans();
  }, []);

  return (
    <>
      <Container>
        <div className="wrapper">
          <h1 style={{ fontWeight: "bolder" }} className="text-center">
            Premium Plans
          </h1>
          <div className="card radius shadowDepth1 shadow-lg">
            <div className="card__content card__padding">
              <div className="text-end mb-3">
                <Button size="md" variant="success" onClick={handleShow}>
                  Add
                </Button>
              </div>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Plan Name</th>
                    <th>Plan Duration</th>
                    <th>Plan Rate(in Rs)</th>
                    <th>Plan Description</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {plans &&
                    plans.map((value, index) => (
                      <tr>
                        <td>{index + 1}</td>
                        <td>{value.plan_name}</td>
                        <td>{value.duration}</td>
                        <td>{value.plan_rate}</td>
                        <td>{value.plan_description}</td>
                        <td>
                          <Button
                            variant="danger"
                            onClick={() => setDeleteItem(value)}
                          >
                            Delete
                          </Button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </Container>

      {/* .....................plan adding modal starts here............................. */}

      <Modal
        onHide={handleClose}
        show={show}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Form onSubmit={handleSubmit(addPlanshandler)}>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Add Premium Plans
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <small className="text-center text-danger">
              {(err && err.plan_name) || (err && err.plan_rate)}
            </small>

            <Row>
              <Col sm={6}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Plan Name</Form.Label>
                  <Form.Control
                    {...register("plan_name", {
                      required: "planname is required",
                      minLength: {
                        value: 4,
                        message: "Should contain 4 characters",
                      },
                    })}
                    type="text"
                    name="plan_name"
                    placeholder="Enter plan name"
                  />
                  <Form.Text className="text-muted">
                    <span className="text-center">
                      {errors.plan_name && (
                        <small className="text-center text-danger">
                          {errors.plan_name.message}
                        </small>
                      )}
                    </span>
                  </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Plan Duration</Form.Label>
                  <Form.Control
                    {...register("duration", {
                      required: "duration is required",
                    })}
                    type="number"
                    placeholder="Enter duration in months"
                  />
                  <Form.Text className="text-muted">
                    <span className="text-center">
                      {errors.duration && (
                        <small className="text-center text-danger">
                          {errors.duration.message}
                        </small>
                      )}
                    </span>
                  </Form.Text>
                </Form.Group>
              </Col>
              <Col sm={6}>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Plan Rate</Form.Label>
                  <Form.Control
                    {...register("plan_rate", { required: "rate is required" })}
                    type="number"
                    placeholder="Enter the rate"
                  />
                  <Form.Text className="text-muted">
                    <span className="text-center">
                      {errors.plan_rate && (
                        <small className="text-center text-danger">
                          {errors.plan_rate.message}
                        </small>
                      )}
                    </span>
                  </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Plan Description</Form.Label>
                  <Form.Control
                    {...register("plan_description", {
                      required: "description is required",
                      minLength: {
                        value: 10,
                        message: "Should contain 10 characters",
                      },
                    })}
                    type="text"
                    placeholder="Enter description"
                  />
                  <Form.Text className="text-muted">
                    <span className="text-center">
                      {errors.plan_description && (
                        <small className="text-center text-danger">
                          {errors.plan_description.message}
                        </small>
                      )}
                    </span>
                  </Form.Text>
                </Form.Group>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={handleClose}>Close</Button>
            <Button type="submit" variant="success">
              Add
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>

      {/* .....................plan adding modal end here............................. */}

      {/* ========================== plan deleting modal ============================= */}

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
          <Modal.Body>Are you sure you want to Delete</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setDeleteItem(false)}>
              Close
            </Button>
            <Button onClick={deletePlans} variant="danger">
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
      )}

      {/* ========================== plan deleteing  modal end here ============================= */}
    </>
  );
};

export default PremiumPlans;
