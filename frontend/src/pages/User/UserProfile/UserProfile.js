import React from "react";
import {
  Container,
  Button,
  Form,
  Col,
  Row,
  Figure,
  ListGroup,
  Alert,
  Overlay,
  Popover,
} from "react-bootstrap";
import UserProfilePortFolio from "../../../components/User/UserProfilePortFolio/UserProfilePortFolio";
import ProfileSideBar from "../../../components/User/ProfileSideBar/ProfileSideBar";
import UserResume from "../../../components/User/UserResume/UserResume";
import KeySkills from "../../../components/User/KeySkills/KeySkills";
import Usereducation from "../../../components/User/UserEducation/Usereducation";
import Footer from "../../../components/User/Footer/Footer";
import UserEmployement from "../../../components/User/UserEmployement/UserEmployement";
import UserProjects from "../../../components/User/UserProjects/UserProjects";
import UserPersonalDetail from "../../../components/User/UserPersonalDetail/UserPersonalDetail";
import Header from "../../../components/User/Header/Header";

const UserProfile = () => {
  return (
    <>
      <div>
        <Header />
        <UserProfilePortFolio />
        <Row>
          <Col sm={3}>
            <ProfileSideBar />
          </Col>
          <Col sm={8}>
            <UserResume />
            <KeySkills />
            <Usereducation />
            <UserEmployement />
            <UserProjects />
            <UserPersonalDetail />
          </Col>
        </Row>
        <Footer />
      </div>
    </>
  );
};

export default UserProfile;
