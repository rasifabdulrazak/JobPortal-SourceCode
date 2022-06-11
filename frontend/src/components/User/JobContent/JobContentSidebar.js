import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import {placeFilter,educationFilter}from '../../../Redux/Actions/UserInfoActions'
import { useSelector,useDispatch } from 'react-redux'
import './JobContentSidebar.css'

function JobContentSidebar() {
	const dispatch=useDispatch()
	const navigate = useNavigate()
	const placeSort=(place)=>{
		console.log(place);
		dispatch(placeFilter(place))
	}
	const educationSort = (education)=>{
		console.log(education);
		dispatch(educationFilter(education))
	}

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
			  <input onChange={()=>placeSort('Kozhikode')} class="form-check-input" type="radio" name="exampleRadio" value="" />
			  <span class="form-check-label">
			    Kozhikode
			  </span>
			</label>
			<label class="form-check">
			  <input onClick={()=>placeSort('Kochi')} class="form-check-input" type="radio" name="exampleRadio" value="" />
			  <span class="form-check-label">
			    Kochi
			  </span>
			</label>
			<label class="form-check">
			  <input  onClick={()=>placeSort('Chennai')} class="form-check-input" type="radio" name="exampleRadio" value="" />
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
			  <input onClick={()=>educationSort('Btech')} class="form-check-input" type="radio" name="exampleRadio" value="" />
			  <span class="form-check-label">
			    Btech
			  </span>
			</label>
			<label class="form-check">
			  <input onClick={()=>educationSort('MCA')} class="form-check-input" type="radio" name="exampleRadio" value="" />
			  <span class="form-check-label">
			    MCA
			  </span>
			</label>
			<label class="form-check">
			  <input onClick={()=>educationSort('BCA')} class="form-check-input" type="radio" name="exampleRadio" value="" />
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