import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import AdminHeader from '../../components/Admin/AdminHeader/AdminHeader'
import AdminPanelSideBar from '../../components/Admin/AdminPanelSideBar/AdminPanelSideBar'
import PremiumCustomer from '../../components/Admin/PremiumCustomer/PremiumCustomer'

const PremiumCustomerPage = () => {
  return (
    <Container>
      <AdminHeader />
      <Row>
        <Col sm={3}>
          <AdminPanelSideBar />
        </Col>
        <Col sm={9}>
          <PremiumCustomer />
        </Col>
      </Row>
    </Container>
  )
}

export default PremiumCustomerPage