import React from "react";
import {
  Container,
  Row,
  Col,
  Navbar,
  Form,
  Button,
  FormControl,
} from "react-bootstrap";
import Header from "../../../components/User/Header/Header";
import Footer from "../../../components/User/Footer/Footer";
import JobContent from "../../../components/User/JobContent/JobContent";
import JobContentSidebar from "../../../components/User/JobContent/JobContentSidebar";
import "./Jobs.css";
import SearchBar from "material-ui-search-bar";
import { ArrowRight } from "react-bootstrap-icons";

function Jobs() {
  return (
    <>
      <Header />

      <Container>
        <Row style={{ marginTop: "2rem" }}>
          <div className="ui icon input">
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search.........................."
                className="me-2"
                aria-label="Search"
                style={{ height: "4rem" }}
              />

              <i className="search icon" />
            </Form>
          </div>
        </Row>
        <Row>
          <Col sm={3}>
            <JobContentSidebar />
          </Col>
          <Col sm={8}>
            <JobContent />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default Jobs;
