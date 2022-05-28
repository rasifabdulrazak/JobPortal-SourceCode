import React from "react";
import AdminHeader from "../../components/Admin/AdminHeader/AdminHeader";
import AdminPanelSideBar from "../../components/Admin/AdminPanelSideBar/AdminPanelSideBar";
import PremiumPlans from "../../components/Admin/PremiumPlans/PremiumPlans";
import { Container, Row, Col } from "react-bootstrap";

const PrePlans = () => {
  return (
    <Container>
      <AdminHeader />
      <Row>
        <Col sm={3}>
          <AdminPanelSideBar />
        </Col>
        <Col sm={9}>
          <PremiumPlans />
        </Col>
      </Row>
    </Container>
  );
};

export default PrePlans;
