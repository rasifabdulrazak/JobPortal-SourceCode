import { Container, Row, Col, Form, Button } from "react-bootstrap";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import "./Postjobs.css";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Postjobs() {
  const {
    register,
    reset,
    trigger,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();
  const userId = useSelector((state) => state.userId);
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    console.log(e);
    const data = {
      hr_recruiter: userId.userId,
      title: e.title,
      company: e.company,
      educational_requirments: e.education,
      experience_required: e.experience,
      job_description: e.job_description,
      job_highlights: e.job_highlights,
      location: e.location,
      requirements: e.requirements,
      salary_from: e.salary_from,
      salary_to: e.salary_to,
      about_company: e.about_company,
    };
    console.log(data);

    try {
      await axios.post("http://127.0.0.1:8000/hr_login/hr/", data);
      navigate("/posted_job");
    } catch (error) {
      console.log("kjhgfdsdfghjhgfds");
      console.log(error);
    }
  };

  return (
    <>
      <Container>
        <Row>
          <div className="wrappere">
            <div className="card radius shadowDepth1 shadow-lg">
              <div className="card__content card__padding">
                <Form onSubmit={handleSubmit(onSubmit)}>
                  <Row>
                    <Col sm={6}>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Title*</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter title"
                          {...register("title", {
                            required: "title is required",
                            minLength: {
                              value: 6,
                              message: "Should contain 6 characters",
                            },
                          })}
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
                    <Col sm={6}>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Company*</Form.Label>
                        <Form.Control
                          {...register("company", {
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
                            {errors.company && (
                              <small className="text-center text-danger">
                                {errors.company.message}
                              </small>
                            )}
                          </span>
                        </Form.Text>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={6}>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Location*</Form.Label>
                        <Form.Control
                          {...register("location", {
                            required: "location is required",
                            minLength: {
                              value: 6,
                              message: "Should contain 6 characters",
                            },
                          })}
                          type="text"
                          placeholder="Enter Location"
                        />
                        <Form.Text className="text-muted">
                          <span className="text-center">
                            {errors.location && (
                              <small className="text-center text-danger">
                                {errors.location.message}
                              </small>
                            )}
                          </span>
                        </Form.Text>
                      </Form.Group>
                    </Col>
                    <Col sm={6}>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Education Required*</Form.Label>
                        <Form.Control
                          {...register("education", {
                            required: "education is required",
                            minLength: {
                              value: 6,
                              message: "Should contain 6 characters",
                            },
                          })}
                          type="text"
                          placeholder="Enter education required"
                        />
                        <Form.Text className="text-muted">
                          <span className="text-center">
                            {errors.education && (
                              <small className="text-center text-danger">
                                {errors.education.message}
                              </small>
                            )}
                          </span>
                        </Form.Text>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={6}>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Experience Required*</Form.Label>
                        <Form.Control
                          {...register("experience", {
                            required: "experience is required",
                            minLength: {
                              value: 6,
                              message: "Should contain 6 characters",
                            },
                          })}
                          type="text"
                          placeholder="Enter experience required"
                        />
                        <Form.Text className="text-muted">
                          <span className="text-center">
                            {errors.experience && (
                              <small className="text-center text-danger">
                                {errors.experience.message}
                              </small>
                            )}
                          </span>
                        </Form.Text>
                      </Form.Group>
                    </Col>
                    <Col sm={6}>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Job Higlights*</Form.Label>
                        <Form.Control
                          {...register("job_highlights", {
                            required: "job_highlights is required",
                            minLength: {
                              value: 6,
                              message: "Should contain 6 characters",
                            },
                          })}
                          type="text"
                          placeholder="Enter job highlights"
                        />
                        <Form.Text className="text-muted">
                          <span className="text-center">
                            {errors.job_highlights && (
                              <small className="text-center text-danger">
                                {errors.job_highlights.message}
                              </small>
                            )}
                          </span>
                        </Form.Text>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={6}>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Salary From* </Form.Label>
                        <Form.Control
                          {...register("salary_from", {
                            required: "salary_from is required",
                            minLength: {
                              value: 6,
                              message: "Should contain 6 characters",
                            },
                          })}
                          type="number"
                          placeholder="Enter Salary from"
                        />
                        <Form.Text className="text-muted">
                          <span className="text-center">
                            {errors.salary_from && (
                              <small className="text-center text-danger">
                                {errors.salary_from.message}
                              </small>
                            )}
                          </span>
                        </Form.Text>
                      </Form.Group>
                    </Col>
                    <Col sm={6}>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Salary To*</Form.Label>
                        <Form.Control
                          {...register("salary_to", {
                            required: "salary_to is required",
                            minLength: {
                              value: 6,
                              message: "Should contain 6 characters",
                            },
                          })}
                          type="number"
                          placeholder="Enter Salary to"
                        />
                        <Form.Text className="text-muted">
                          <span className="text-center">
                            {errors.salary_to && (
                              <small className="text-center text-danger">
                                {errors.salary_to.message}
                              </small>
                            )}
                          </span>
                        </Form.Text>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={6}>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>About Company*</Form.Label>
                        <Form.Control
                          {...register("about_company", {
                            required: "about_company is required",
                            minLength: {
                              value: 6,
                              message: "Should contain 6 characters",
                            },
                          })}
                          type="text"
                          placeholder="Enter About company"
                          style={{ height: "10rem" }}
                        />
                        <Form.Text className="text-muted">
                          <span className="text-center">
                            {errors.about_company && (
                              <small className="text-center text-danger">
                                {errors.about_company.message}
                              </small>
                            )}
                          </span>
                        </Form.Text>
                      </Form.Group>
                    </Col>
                    <Col sm={6}>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>job Description*</Form.Label>
                        <Form.Control
                          {...register("job_description", {
                            required: "job_description is required",
                            minLength: {
                              value: 6,
                              message: "Should contain 6 characters",
                            },
                          })}
                          type="text"
                          placeholder="Enter job description"
                          style={{ height: "10rem" }}
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
                  <Row>
                    <Col sm={6}>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Requirements*</Form.Label>
                        <Form.Control
                          {...register("requirements", {
                            required: "requirements is required",
                            minLength: {
                              value: 6,
                              message: "Should contain 6 characters",
                            },
                          })}
                          type="text"
                          placeholder="Enter Requirements"
                          style={{ height: "10rem" }}
                        />
                        <Form.Text className="text-muted">
                          <span className="text-center">
                            {errors.requirements && (
                              <small className="text-center text-danger">
                                {errors.requirements.message}
                              </small>
                            )}
                          </span>
                        </Form.Text>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </>
  );
}

export default Postjobs;
