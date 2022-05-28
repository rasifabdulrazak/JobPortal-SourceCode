import React, { useEffect, useState } from "react";
import {
  Container,
  Button,
  Form,
  Col,
  Row,
  Figure,
  ListGroup,
  Alert,
} from "react-bootstrap";
import "./UserProfilePortFolio.css";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

function UserProfilePortFolio() {
  const userId = useSelector((state) => state.userId);
  const [profile, setProfile] = useState();

  const userProfile = async () => {
    try {
      const { data } = await axios.get(
        `http://127.0.0.1:8000/users/user_profile/${userId.userId}/`
      );
      setProfile(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    userProfile();
  }, []);

  return (
    <div style={{ marginTop: "2rem" }}>
      <Container>
        <Row>
          <Col sm={6}>
            <div className="wrappere">
              <div className="card radius shadowDepth1 shadow-lg">
                <div className="card__content card__padding">
                  <div className="card shadow-lg mt-5">
                    {profile &&
                      profile.map((value) => (
                        <div className="row">
                          <div className="col-sm-5">
                            <img
                              className="d-block w-100"
                              src={value.profile_photo}
                              alt=""
                            />
                          </div>
                          <div className="col-sm-7">
                            <div className="card-block">
                              <h4
                                className="card-title"
                                style={{ fontWeight: "bold" }}
                              >
                                {value.user.username}
                              </h4>
                              <p className="fonts">
                                <span style={{ fontWeight: "bold" }}>
                                  Email :
                                </span>
                                {value.user.email}
                              </p>
                              <p className="fonts">
                                <span style={{ fontWeight: "bold" }}>
                                  Phonenumber :
                                </span>{" "}
                                {value.user.phonenumber}
                              </p>
                              <p className="fonts">
                                <span style={{ fontWeight: "bold" }}>
                                  Location :
                                </span>{" "}
                                {value.location}
                              </p>

                              <br />
                              <a
                                className="btn btn-primary btn-lg float-right"
                                onClick=""
                              >
                                Edit
                              </a>
                            </div>
                          </div>
                        </div>
                      ))}

                    <div className="card__action"></div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col sm={6}>
            <div className="wrappere">
              <div className="card radius shadowDepth1 shadow-lg">
                <div className="card__content card__padding">
                  <div className="container">
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="card bg-c-blue order-card">
                          <div className="card-block">
                            <h6 className="m-b-20">Orders Received</h6>
                            <h2 className="text-right">
                              <i className="fa fa-cart-plus f-left"></i>
                              <span>486</span>
                            </h2>
                            <p className="m-b-0">
                              Completed Orders
                              <span className="f-right">351</span>
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="col-sm-6">
                        <div className="card bg-c-green order-card">
                          <div className="card-block">
                            <h6 className="m-b-20">Orders Received</h6>
                            <h2 className="text-right">
                              <i className="fa fa-rocket f-left"></i>
                              <span>486</span>
                            </h2>
                            <p className="m-b-0">
                              Completed Orders
                              <span className="f-right">351</span>
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="col-sm-6">
                        <div className="card bg-c-yellow order-card">
                          <div className="card-block">
                            <h6 className="m-b-20">Orders Received</h6>
                            <h2 className="text-right">
                              <i className="fa fa-refresh f-left"></i>
                              <span>486</span>
                            </h2>
                            <p className="m-b-0">
                              Completed Orders
                              <span className="f-right">351</span>
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="col-sm-6">
                        <div className="card bg-c-pink order-card">
                          <div className="card-block">
                            <h6 className="m-b-20">Orders Received</h6>
                            <h2 className="text-right">
                              <i className="fa fa-credit-card f-left"></i>
                              <span>486</span>
                            </h2>
                            <p className="m-b-0">
                              Completed Orders
                              <span className="f-right">351</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default UserProfilePortFolio;
