import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import './AdminPanelSideBar.css'

function AdminPanelSideBar() {
	const navigate = useNavigate()
  return (
      <Container >
      <>
     <div className="card shadow-lg sidebar" >
	<article className="card-group-item" style={{background:'grey',marginTop:'1rem'}}>
		<header className="card-header titles">
			<h6 className="title">Dashboard </h6>
		</header>
	
	</article>
	
	<article className="card-group-item"  style={{background:'grey',marginTop:'1rem'}}  onClick={()=>navigate('/user_management')}>
		<header className="card-header titles">
			<h6 className="title">User Management </h6>
		</header>
	</article> 

    <article className="card-group-item" style={{background:'grey',marginTop:'1rem'}} onClick={()=>navigate('/hr_management')}>
		<header className="card-header titles">
			<h6 className="title">HR Management</h6>
		</header>
	</article>
    <article className="card-group-item" style={{background:'grey',marginBottom:'1rem',marginTop:'1rem'}}>
		<header className="card-header titles">
			<h6 className="title">Premium Customers</h6>
		</header>
	</article>
</div> 
    </>
    </Container>
  )
}

export default AdminPanelSideBar