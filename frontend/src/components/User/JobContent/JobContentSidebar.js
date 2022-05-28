import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import './JobContentSidebar.css'

function JobContentSidebar() {
	const navigate = useNavigate()
  return (
      <Container>
          <>
          
         <div class="card shadow-lg sidebar">
			 <div className='mt-4 shadow-lg text-center' style={{boderRadius:'10px'}}><h5>Filter by</h5></div>
			 
			 <article class="card-group-item">
		<header class="card-header">
			<h6 class="">Location </h6>
		</header>
		<div class="filter-content">
			<div class="card-body">
			<label class="form-check">
			  <input onClick={()=>navigate('Banglore')} class="form-check-input" type="radio" name="exampleRadio" value="" />
			  <span class="form-check-label">
			    Banglore
			  </span>
			</label>
			<label class="form-check">
			  <input onClick={()=>navigate('Kerala')} class="form-check-input" type="radio" name="exampleRadio" value="" />
			  <span class="form-check-label">
			    Kerala
			  </span>
			</label>
			<label class="form-check">
			  <input onClick={()=>navigate('Chennai')} class="form-check-input" type="radio" name="exampleRadio" value="" />
			  <span class="form-check-label">
			    Chennai
			  </span>
			</label>
			</div>
		</div>
	</article> 
	
	<article class="card-group-item">
		<header class="card-header">
			<h6 class="">Education </h6>
		</header>
		<div class="filter-content">
			<div class="card-body">
			<label class="form-check">
			  <input onClick={()=>navigate('Btech')} class="form-check-input" type="radio" name="exampleRadio" value="" />
			  <span class="form-check-label">
			    Btech
			  </span>
			</label>
			<label class="form-check">
			  <input onClick={()=>navigate('MCA')} class="form-check-input" type="radio" name="exampleRadio" value="" />
			  <span class="form-check-label">
			    MCA
			  </span>
			</label>
			<label class="form-check">
			  <input onClick={()=>navigate('BCA')} class="form-check-input" type="radio" name="exampleRadio" value="" />
			  <span class="form-check-label">
			    BCA
			  </span>
			</label>
			</div>
		</div>
	</article> 

    <article class="card-group-item">
		<header class="card-header">
			<h6 class="">Salary </h6>
		</header>
		<div class="filter-content">
			<div class="card-body">
			<label class="form-check">
			  <input onClick={()=>navigate('Banglore')} class="form-check-input" type="radio" name="exampleRadio" value="" />
			  <span class="form-check-label">
			    5-6 LPA
			  </span>
			</label>
			<label class="form-check">
			  <input onClick={()=>navigate('Banglore')} class="form-check-input" type="radio" name="exampleRadio" value="" />
			  <span class="form-check-label">
			    3-4 LPA
			  </span>
			</label>
			<label class="form-check">
			  <input onClick={()=>navigate('Banglore')} class="form-check-input" type="radio" name="exampleRadio" value="" />
			  <span class="form-check-label">
			    7-8 LPA
			  </span>
			</label>
			</div>
		</div>
	</article> 
</div> 
</>
   </Container>
  )
}

export default JobContentSidebar