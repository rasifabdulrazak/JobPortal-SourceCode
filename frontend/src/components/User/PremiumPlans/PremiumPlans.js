import React, { useState, useEffect } from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import "./PremiumPlans.css";
import axios from "axios";

function PremiumPlans() {
  const Colors = [
    "#A569BD",
    "#5DADE2",
    "#34495E",
    "#2ECC71",
    "#A6ACAF",
    "#EC7063",
  ];
  var color = -1;
  const [plans, setPlans] = useState();
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
    <Container>
      <Row>
        <Col sm={4}>
          <div className="wrappere">
            <div className="card radius shadowDepth1 shadow-lg">
              <div className="card__content card__padding">
                <h3>Features of premium Customers</h3>
                <div>
                  <ListGroup>
                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                    <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                  </ListGroup>
                </div>
              </div>
            </div>
          </div>

          <div className="wrappere">
            <div className="card radius shadowDepth1 shadow-lg">
              <div className="card__content card__padding">
                <h3>Explore your Skillsets..</h3>
                <div>
                  <ListGroup>
                    <ListGroup.Item>
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo @consequat."
                    </ListGroup.Item>
                  </ListGroup>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col sm={8}>
          <div className="wrappere">
            <div className="card radius shadowDepth1 shadow-lg">
              <div className="card__content card__padding">
                <div className="container">
                  {/*                   
                  <div className="row">
                    {plans &&
                      plans.map((value, index) => (
                        <div className="col-sm-6">
                          <div
                            className="card  order-card shadow-lg"
                            style={{ backgroundColor: Colors[index] }}
                          >
                            <div className="card-block">
                              <h6 className="m-b-20">{value.plan_name}</h6>
                              <h2 className="text-right">
                                <i className="fa fa-inr  f-left"></i>
                                <span>{value.plan_rate}</span>
                              </h2>
                              <p className="m-b-0 text-white">
                                {value.plan_description}
                                <span className="f-right">
                                  {value.duration} month
                                </span>
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div> */}

                  <div className="row">
                    {plans &&
                      plans.map((value, index) => {
                        if (color == 5) color = -1;
                        color += 1;

                        return (
                          <div className="col-sm-6">
                            <div
                              className="card  order-card shadow-lg"
                              style={{ backgroundColor: Colors[color] }}
                            >
                              <div className="card-block">
                                <h6 className="m-b-20">{value.plan_name}</h6>
                                <h2 className="text-right">
                                  <i className="fa fa-inr  f-left"></i>
                                  <span>{value.plan_rate}</span>
                                </h2>
                                <p className="m-b-0 text-white">
                                  {value.plan_description}
                                  <span className="f-right">
                                    {value.duration} month
                                  </span>
                                </p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default PremiumPlans;
