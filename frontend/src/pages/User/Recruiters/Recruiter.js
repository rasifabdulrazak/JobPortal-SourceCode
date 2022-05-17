import React from 'react'
import { Container ,Row,Col} from 'react-bootstrap'
import RecruiterList from '../../../components/User/Recruiters/RecruiterList'
import Header from '../../../components/User/Header/Header'
import Footer from '../../../components/User/Footer/Footer'


function Recruiter() {
  return (
    <>
    <Header />
      <Container>
        
        <Col >
        <RecruiterList />
        </Col>
        
    </Container>
    <Footer />
    </>
  )
}

export default Recruiter