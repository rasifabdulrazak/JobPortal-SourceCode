import React from "react";
import Footer from "../../../components/User/Footer/Footer";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../../../components/User/Header/Header";

function AppliedJobs() {
  return (
    <>
      <Header />
      <Container>
        <Row>
          <div className="text-center h1" style={{ marginTop: "1rem" }}>
            <h1>Applied Jobs</h1>
          </div>
        </Row>
        <Row>
          <Col sm={2}>
            <div class="card bg-c-blue order-card wrapper">
              <div class="card-block">
                <h6 class="m-b-20">Applied Jobs</h6>
                <h2 class="text-right">
                  <i class="fa fa-save f-left"></i>
                  <span style={{ marginLeft: "1rem" }}>2</span>
                </h2>
                <p class="m-b-0" style={{ color: "white" }}>
                  Applied<span class="f-right">2</span>
                </p>
              </div>
            </div>
          </Col>
          <Col sm={8}>
            <div className="wrapper">
              <div className="card radius shadowDepth1 shadow-lg">
                <div className="card__content card__padding">
                  <div className="card__share">
                    <div className="card__social">
                      <a className="share-icon facebook">
                        <span className="fa fa-facebook"></span>
                      </a>
                      <a className="share-icon twitter">
                        <span className="fa fa-twitter"></span>
                      </a>
                      <a className="share-icon googleplus">
                        <span className="fa fa-google-plus"></span>
                      </a>
                    </div>

                    <a id="share" className="share-toggle share-icon"></a>
                  </div>

                  <div className="card__meta">
                    <a>Web Design</a>
                    <time>17th March</time>
                  </div>

                  <article className="card__article">
                    <h2>
                      <a>Material Design Card - For Blog Post Article</a>
                    </h2>

                    <p style={{ fontFamily: "-moz-initial", color: "#231F20" }}>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Ducimus harum...
                    </p>
                  </article>
                </div>

                <div class="card__action">
                  <div className="card__author">
                    <img
                      src="https://storage.needpix.com/rsynced_images/head-659652_1280.png"
                      alt="user"
                      style={{ width: "30px", height: "30px" }}
                    />
                    <div className="card__author-content">
                      By <a>John Doe</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="wrapper">
              <div className="card radius shadowDepth1 shadow-lg">
                <div className="card__content card__padding">
                  <div className="card__share">
                    <div className="card__social">
                      <a className="share-icon facebook">
                        <span className="fa fa-facebook"></span>
                      </a>
                      <a className="share-icon twitter">
                        <span className="fa fa-twitter"></span>
                      </a>
                      <a className="share-icon googleplus">
                        <span className="fa fa-google-plus"></span>
                      </a>
                    </div>

                    <a
                      id="share"
                      className="share-toggle share-icon"
                      href="#"
                    ></a>
                  </div>

                  <div className="card__meta">
                    <a>Web Design</a>
                    <time>17th March</time>
                  </div>

                  <article className="card__article">
                    <h2>
                      <a>Material Design Card - For Blog Post Article</a>
                    </h2>

                    <p style={{ fontFamily: "-moz-initial", color: "#231F20" }}>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Ducimus harum...
                    </p>
                  </article>
                </div>

                <div class="card__action">
                  <div className="card__author">
                    <img
                      src="https://storage.needpix.com/rsynced_images/head-659652_1280.png"
                      alt="user"
                      style={{ width: "30px", height: "30px" }}
                    />
                    <div className="card__author-content">
                      By <a>John Doe</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default AppliedJobs;
