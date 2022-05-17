import React from 'react'
import AdminPanelSideBar from '../../components/Admin/AdminPanelSideBar/AdminPanelSideBar'
import UserManagement from '../../components/Admin/UserManagement/UserManagement'
import {Container,Row,Col} from 'react-bootstrap'
import AdminHeader from '../../components/Admin/AdminHeader/AdminHeader'

function UserManager() {
  return (
      <Container>
          <AdminHeader />
    <Row>
        <Col sm={3}>
            <AdminPanelSideBar />
        </Col>
        <Col sm={9}>
            <UserManagement />
        </Col>
    </Row>
    </Container>
  )
}

export default UserManager