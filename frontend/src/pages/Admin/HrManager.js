import React from 'react'
import AdminHeader from '../../components/Admin/AdminHeader/AdminHeader'
import AdminPanelSideBar from '../../components/Admin/AdminPanelSideBar/AdminPanelSideBar'
import HrManagement from '../../components/Admin/HrManagement/HrManagement'
import {Container,Row,Col} from 'react-bootstrap'


function HrManager() {
  return (

    <Container>
    <AdminHeader />
<Row>
  <Col sm={3}>
      <AdminPanelSideBar />
  </Col>
  <Col sm={9}>
      <HrManagement />
  </Col>
</Row>
    </Container>
  )
}

export default HrManager