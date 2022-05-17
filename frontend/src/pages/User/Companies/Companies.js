import React from 'react'
import {Card,Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import CompaniesList from '../../../components/User/Companies/CompaniesList'
import Header from '../../../components/User/Header/Header'
import Footer from '../../../components/User/Footer/Footer'


function Companies() {
  return (
    <>
    <Header />
    <CompaniesList />
    <Footer />
    </>
  )
}

export default Companies