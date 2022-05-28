import React, { useState } from "react";
import {
  Container,
  Button,
  Form,
  Col,
  Row,
  ListGroup,
  Alert,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate, useParams } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import "./LoginForm.css";
import { useDispatch, useSelector } from "react-redux";
import { Token } from "../../../utils";
import { setUser } from "../../../Redux/Actions/UserInfoActions";

function LoginForm() {
  const {
    register,
    reset,
    trigger,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [err, setErr] = useState();

  const dispatch = useDispatch();
  const params = useParams();

  const loginUser = async (data) => {
    try {
      const datas = { username: data.username, password: data.password };
      const response = await axios.post("http://127.0.0.1:8000/token/", datas);
      localStorage.setItem(Token.ACCESS_TOKEN, response.data.access);
      localStorage.setItem(Token.REFRESH_TOKEN, response.data.refresh);
      const access_token = localStorage.getItem("accessToken");

      if (access_token) {
        const decode = jwt_decode(access_token);
        dispatch(
          setUser({
            userId: decode.user_id,
            isStaff: decode.is_staff,
          })
        );

        console.log(
          dispatch(
            setUser({
              userId: decode.user_id,
              isStaff: decode.is_staff,
            })
          )
        );

        if (decode.is_superuser) {
          navigate("/user_management");
        } else if (decode.is_staff) {
          navigate("/hr_home");
        } else {
          navigate("/");
        }
      }
    } catch (error) {
      setErr(error.response.data.detail);
    }
  };

  return (
    <>
      <Container>
        <Row style={{ justifyContent: "between" }}>
          <Col sm={4}>
            <div className="wrappere">
              <div className="card radius shadowDepth1 shadow-lg">
                <div className="card__content card__padding">
                  <Form onSubmit={handleSubmit(loginUser)}>
                    <Row>
                      <p className="text-center">
                        {err ? (
                          <Alert variant="danger">
                            <p style={{ color: "red", font: "small-caption" }}>
                              {err}
                            </p>
                          </Alert>
                        ) : null}
                      </p>

                      <Col sm={12}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>Username</Form.Label>
                          <Form.Control
                            {...register("username", {
                              required: "username is required",
                              minLength: {
                                value: 6,
                                message: "Should contain 5 characters",
                              },
                            })}
                            name="username"
                            type="text"
                            placeholder="Enter username"
                          />
                          <Form.Text className="text-muted">
                            <span className="text-center">
                              {errors.username && (
                                <small
                                  className="text-center text-danger"
                                  style={{
                                    color: "red",
                                    font: "small-caption",
                                  }}
                                >
                                  {errors.username.message}
                                </small>
                              )}
                            </span>
                          </Form.Text>
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={12}>
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicPassword"
                        >
                          <Form.Label>Password</Form.Label>
                          <Form.Control
                            {...register("password", {
                              required: "password is required",
                              pattern: {},
                            })}
                            name="password"
                            type="password"
                            placeholder="Password"
                          />
                          <Form.Text className="text-muted">
                            <span className="text-center">
                              {errors.password && (
                                <small
                                  className="text-center text-danger"
                                  style={{
                                    color: "red",
                                    font: "small-caption",
                                  }}
                                >
                                  {errors.password.message}
                                </small>
                              )}
                            </span>
                          </Form.Text>
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={12} className="text-center">
                        <Button
                          style={{ marginBottom: "1rem" }}
                          size="lg"
                          as="input"
                          type="submit"
                          value="Login"
                        />
                      </Col>
                    </Row>
                    <Row className="text-center">
                      <Col sm={6} style={{ alignItems: "center" }}>
                        <div
                          className="card__content card__padding text-center shadow-lg hover"
                          style={{
                            borderWidth: "thin",
                            borderStyle: "solid",
                            borderColor: "grey",
                          }}
                        >
                          <Button variant="info">Login With OTP</Button>
                        </div>
                      </Col>

                      <Col sm={6} style={{ alignItems: "center" }}>
                        <div
                          className="card__content card__padding text-center shadow-lg"
                          style={{
                            borderWidth: "thin",
                            borderStyle: "solid",
                            borderColor: "grey",
                          }}
                        >
                          <img
                            className="image-fluid"
                            width={100}
                            src="https://onymos.com/wp-content/uploads/2020/10/google-signin-button-1024x260.png"
                          />
                        </div>
                      </Col>
                    </Row>
                  </Form>
                </div>
              </div>
            </div>
          </Col>
          <Col sm={4}>
            <div className="wrappere">
              <div className="card radius shadowDepth1 shadow-lg">
                <div className="card__content card__padding">
                  <h1>New to Sollutions ?</h1>
                  <p>
                    <ListGroup>
                      <ListGroup.Item className="list">
                        One click apply using Sollutions profile.
                      </ListGroup.Item>
                      <ListGroup.Item className="list">
                        Get relevant job recommendations.
                      </ListGroup.Item>
                      <ListGroup.Item className="list">
                        Showcase profile to top companies and consultants.
                      </ListGroup.Item>
                      <ListGroup.Item className="list">
                        Know application status on applied jobs.
                      </ListGroup.Item>
                      <Button
                        onClick={() => navigate("/user_register")}
                        mt={5}
                        size="md"
                        as="input"
                        type="submit"
                        value="Register"
                      />
                    </ListGroup>
                  </p>
                </div>
              </div>
            </div>
          </Col>

          <Col sm={4}>
            <div className="wrappere">
              <div className="card radius shadowDepth1 shadow-lg">
                <div className="card__content card__padding">
                  <article className="card__article">
                    <h2>
                      <a href="#">Are you Recruiting Clients?</a>
                    </h2>

                    <p style={{ fontFamily: "-moz-initial", color: "#231F20" }}>
                      If you are recruiting clients login as an HR . Create an
                      HR account and find the clients that macthing your needs
                    </p>
                  </article>
                  <Button
                    onClick={() => navigate("/hr_registration")}
                    variant="info"
                  >
                    Register
                  </Button>
                </div>

                <div class="card__action"></div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default LoginForm;
