import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AdminPanelSideBar from "../../components/Admin/AdminPanelSideBar/AdminPanelSideBar";
import AdminHeader from "../../components/Admin/AdminHeader/AdminHeader";
import HrDetailView from "../../components/Admin/HrDetailView/HrDetailView";

const HrDetail = () => {
  return (
    <Container>
      <AdminHeader />
      <Row>
        <Col sm={3}>
          <AdminPanelSideBar />
        </Col>
        <Col sm={9}>
          <HrDetailView />
        </Col>
      </Row>
    </Container>
  );
};

export default HrDetail;
