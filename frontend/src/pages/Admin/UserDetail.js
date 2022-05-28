import React from "react";
import UserdetailView from "../../components/Admin/UserDetailView/UserdetailView";
import { Container, Row, Col } from "react-bootstrap";
import AdminPanelSideBar from "../../components/Admin/AdminPanelSideBar/AdminPanelSideBar";
import AdminHeader from "../../components/Admin/AdminHeader/AdminHeader";

function UserDetail() {
  return (
    <Container>
      <AdminHeader />
      <Row>
        <Col sm={3}>
          <AdminPanelSideBar />
        </Col>
        <Col sm={9}>
          <UserdetailView />
        </Col>
      </Row>
    </Container>
  );
}

export default UserDetail;
