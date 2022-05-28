import React from "react";
import {
  Container,
  Button,
  Carousel,
  Form,
  Col,
  Row,
  Figure,
  ListGroup,
  Alert,
  Card,
} from "react-bootstrap";
import Footer from "../../../components/User/Footer/Footer";
import Header from "../../../components/User/Header/Header";
import "./Home.css";

function Home() {
  return (
    <>
      <Container>
        <Header />

        <Row className="homebackground image-fluid">
          <Col sm={6}>
            <blockquote class="blockquote blockquote-custom bg-white p-5 shadow rounded">
              <div class="blockquote-custom-icon bg-info shadow-sm">
                <i class="fa fa-quote-left text-white"></i>
              </div>
              <p class="mb-0 mt-2 font-italic">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo{" "}
                <a href="#" class="text-info">
                  @consequat
                </a>
                ."
              </p>
              <footer class="blockquote-footer pt-4 mt-4 border-top">
                Someone famous in
                <cite title="Source Title">Source Title</cite>
              </footer>
            </blockquote>

            <blockquote class="blockquote blockquote-custom bg-white p-5 shadow rounded">
              <div class="blockquote-custom-icon bg-info shadow-sm">
                <i class="fa fa-quote-left text-white"></i>
              </div>
              <p class="mb-0 mt-2 font-italic">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo{" "}
                <a href="#" class="text-info">
                  @consequat
                </a>
                ."
              </p>
              <footer class="blockquote-footer pt-4 mt-4 border-top">
                Someone famous in
                <cite title="Source Title">Source Title</cite>
              </footer>
            </blockquote>
          </Col>
          <Col sm={6}>
            <div className="wrapper">
              <div className="card radius shadowDepth1 shadow-lg">
                <div
                  className="card__content card__padding"
                  style={{ backgroundColor: "black" }}
                >
                  <Carousel fade>
                    <Carousel.Item>
                      <img
                        className="d-block w-100 image-fluid"
                        src="https://media.istockphoto.com/photos/top-view-of-a-white-desktop-concept-job-search-picture-id1279104620?k=20&m=1279104620&s=612x612&w=0&h=Lit4OzCRPW6Z5Pq1L4b9ZjUJvx6McLJySTLnUjJsECE="
                        alt="First slide"
                      />
                      <Carousel.Caption>
                        <h3>Explore your jobs</h3>
                        <p>Explore your jobs macthing in this .</p>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        width={50}
                        className="d-block w-100 image-fluid"
                        src="https://news.microsoft.com/wp-content/uploads/prod/sites/133/2019/02/Batch-2_4-960x560.jpg"
                        alt="Second slide"
                      />

                      <Carousel.Caption>
                        <h3>Explore your jobs</h3>
                        <p>Explore your jobs macthing in this .</p>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100 image-fluid"
                        src="https://surejob.in/wp-content/uploads/2021/02/image-3.png"
                        alt="Third slide"
                      />

                      <Carousel.Caption>
                        <h3>Explore your jobs</h3>
                        <p>Explore your jobs macthing in this .</p>
                      </Carousel.Caption>
                    </Carousel.Item>
                  </Carousel>
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

export default Home;
