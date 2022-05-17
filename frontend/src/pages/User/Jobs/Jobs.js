import React from 'react'
import { Container,Row,Col} from 'react-bootstrap'
import Header from '../../../components/User/Header/Header'
import Footer from '../../../components/User/Footer/Footer'
import JobContent from '../../../components/User/JobContent/JobContent'
import JobContentSidebar from '../../../components/User/JobContent/JobContentSidebar'
import './Jobs.css'
import SearchBar from "material-ui-search-bar";


function Jobs() {
  return (
    <>
    <Header />
 
    <Container>
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
  )
}

export default Jobs