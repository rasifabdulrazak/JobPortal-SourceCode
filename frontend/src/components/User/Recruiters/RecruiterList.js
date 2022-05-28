import React, { useEffect, useState } from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import "./RecruiterList.css";
import axios from "axios";

function RecruiterList() {
  const [recruiter, setRecruiter] = useState();

  const hrlisting = async () => {
    try {
      const { data } = await axios.get(
        "http://127.0.0.1:8000/hr_login/hr_register/"
      );
      setRecruiter(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    hrlisting();
  }, []);

  return (
    <Container>
      <Row>
        {recruiter &&
          recruiter.map((value) => (
            <Col>
              <div class="wrappers ">
                <div class="card radius shadowDepth1 shadow-lg">
                  <div class="card__image border-tlr-radius">
                    <img
                      src="https://storage.needpix.com/rsynced_images/head-659652_1280.png"
                      alt="image"
                      class="border-tlr-radius image-fluid"
                      style={{ height: "20rem" }}
                    />
                  </div>

                  <div class="card__content card__padding">
                    <div class="card__share">
                      <div class="card__social">
                        <a class="share-icon facebook">
                          <span class="fa fa-facebook"></span>
                        </a>
                        <a class="share-icon twitter">
                          <span class="fa fa-twitter"></span>
                        </a>
                        <a class="share-icon googleplus">
                          <span class="fa fa-google-plus"></span>
                        </a>
                      </div>

                      <a id="share" class="share-toggle share-icon"></a>
                    </div>

                    <div class="card__meta">
                      <a>Web</a>
                      <time>{value.date_joined}</time>
                    </div>

                    <article class="card__article">
                      <h2>
                        <a>{value.username}</a>
                      </h2>

                      <p>{value.email}</p>
                    </article>
                    <Button>View details</Button>
                  </div>
                </div>
              </div>
            </Col>
          ))}
      </Row>
    </Container>
  );
}

export default RecruiterList;
