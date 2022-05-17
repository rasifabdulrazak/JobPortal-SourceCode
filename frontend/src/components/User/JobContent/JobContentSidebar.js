import React from 'react'
import { Container, Row } from 'react-bootstrap'
import './JobContentSidebar.css'

function JobContentSidebar() {
  return (
      <Container>
          <>
          
         <div class="card shadow-lg sidebar">
			 <div className='mt-4 shadow-lg text-center' style={{boderRadius:'10px'}}><h5>Filter by</h5></div>
			 
	<article class="card-group-item" >
		<header class="card-header">
			<h6 class="">Education </h6>
		</header>
		<div class="filter-content">
			<div class="card-body">
			<form>
				<label class="form-check">
				  <input class="form-check-input" type="checkbox" value="" />
				  <span class="form-check-label">
				    Btech
				  </span>
				</label> 
				<label class="form-check">
				  <input class="form-check-input" type="checkbox" value="" />
				  <span class="form-check-label">
				    CA
				  </span>
				</label>  
				<label class="form-check">
				  <input class="form-check-input" type="checkbox" value="" />
				  <span class="form-check-label">
				    MCA
				  </span>
				</label>  
			</form>

			</div> 
		</div>
	</article>
	
	<article class="card-group-item">
		<header class="card-header">
			<h6 class="">Location </h6>
		</header>
		<div class="filter-content">
			<div class="card-body">
			<label class="form-check">
			  <input class="form-check-input" type="radio" name="exampleRadio" value="" />
			  <span class="form-check-label">
			    Banglore
			  </span>
			</label>
			<label class="form-check">
			  <input class="form-check-input" type="radio" name="exampleRadio" value="" />
			  <span class="form-check-label">
			    Kerala
			  </span>
			</label>
			<label class="form-check">
			  <input class="form-check-input" type="radio" name="exampleRadio" value="" />
			  <span class="form-check-label">
			    Chennai
			  </span>
			</label>
			</div>
		</div>
	</article> 

    <article class="card-group-item">
		<header class="card-header">
			<h6 class="">Salary</h6>
		</header>
		<div class="filter-content">
			<div class="card-body">
			<form>
				<label class="form-check">
				  <input class="form-check-input" type="checkbox" value="" />
				  <span class="form-check-label">
				    5-6LPA
				  </span>
				</label> 
				<label class="form-check">
				  <input class="form-check-input" type="checkbox" value="" />
				  <span class="form-check-label">
                  5-6LPA
				  </span>
				</label>  
				<label class="form-check">
				  <input class="form-check-input" type="checkbox" value="" />
				  <span class="form-check-label">
                  5-6LPA
				  </span>
				</label>  
			</form>

			</div> 
		</div>
	</article>
</div> 
</>
   </Container>
  )
}

export default JobContentSidebar