import React, { useEffect, useState } from 'react'
import './JobContent.css'
import {Container,Button, Form,Col,Row,Figure,ListGroup,Alert} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function JobContent() {
    const navigate = useNavigate()
    const[jobs,setJobs] = useState([])

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/jobsrender/`)
        .then(res => {
         setJobs (res.data)
         console.log(res.data[0].hr_recruiter)
        })
      },[]);


  return (
    <Container>
      
        
       
  <div>
    
    <div className="wrapper">
    {jobs.map((value,index)=>
          
          <div className="card radius shadowDepth1 shadow-lg">
      
              <div className="card__content card__padding">
                  <div className="card__share">
                      <div className="card__social">  
                          <a className="share-icon facebook" href="#"><span className="fa fa-facebook"></span></a>
                          <a className="share-icon twitter" href="#"><span className="fa fa-twitter"></span></a>
                          <a className="share-icon googleplus" href="#"><span className="fa fa-google-plus"></span></a>
                      </div>

                      <a id="share" className="share-toggle share-icon" href="#"></a>
                  </div>

                  <div className="card__meta">
                      <a href="#">{value.location}</a>
                      <time className='title'>Posted On: {value.posting_date}</time>
                  </div>

                  <article className="card__article">
                      <h2><a href="#">{value.title} - {value.company}</a></h2>

                      <p style={{fontFamily:'-moz-initial',color:'#231F20'}}>{value.job_description}...</p>
                  </article>
              </div>

              <div class="card__action">
                  
                  <div className="card__author">
                      <img src="https://storage.needpix.com/rsynced_images/head-659652_1280.png" className='image-fluid' alt="user" style={{width:'30px',height:'30px'}} />
                      <div className="card__author-content">
                          By <a href="#">{value.hr_recruiter.username}</a>
                      </div>
                  </div>
              </div>
          </div>

)}
      </div>
  </div>

  </Container>
  )
}

export default JobContent