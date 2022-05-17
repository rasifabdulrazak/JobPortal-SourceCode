import React from 'react'
import { Container,Row,Col, Button,Alert } from 'react-bootstrap'
import './JobDetails.css'

function JobDetails() {
    
  return (
      <Container>
          <Row>
              <Col sm={8}>
           <div className="wrappere">
          
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
                      <a href="#">Full stack Developer</a>
                      <time>17th March</time>
                  </div>

                  <article className="card__article">
                      <h2><a href="#">Material Design Card - For Blog Post Article</a></h2>

                      <p style={{fontFamily:'-moz-initial',color:'#231F20'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus harum...</p>
                  </article>
              </div>

              <div class="card__action">
                  
                  <div className="card__author">
                      <a id="share" className="fa fa-map-marker share-icon" href="#"></a>
                      <div className="card__author-content" style={{marginLeft:'10px'}} >
                          <a href="#" >Kochi</a>
                          {/* <Button style={{marginBottom:'4rem'}}>Apply</Button> */}
                      </div>
                  </div>
              </div>
          </div>

         
      </div>
      </Col>
      <Col sm={4}>
      <div className="wrappere">
          
          <div className="card radius shadowDepth1 shadow-lg">
      
              <div className="card__content card__padding">
                  <div className="card__share">
                      <div className="card__social">  
                          <a className="share-icon facebook" href="#"><span className="fa fa-facebook"></span></a>
                          <a className="share-icon twitter" href="#"><span className="fa fa-twitter"></span></a>
                          <a className="share-icon googleplus" href="#"><span className="fa fa-google-plus"></span></a>
                      </div>

                
                  </div>

                  <div className="card__meta">
                      <a href="#">Full stack Developer</a>
                      <time>17th March</time>
                  </div>

                  <article className="card__article">
                      <h2><a href="#">Material Design Card - For Blog Post Article</a></h2>

                      <p style={{fontFamily:'-moz-initial',color:'#231F20'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus harum...</p>
                  </article>
              </div>

              <div class="card__action">
                  
                  
              </div>
          </div>

         
      </div>
      </Col>
      </Row>
      <Row>
      <div className="wrappere">
          
          <div className="card radius shadowDepth1 shadow-lg">
      
              <div className="card__content card__padding">
                  <div className="card__share">
                      <div className="card__social">  
                          <a className="share-icon facebook" href="#"><span className="fa fa-facebook"></span></a>
                          <a className="share-icon twitter" href="#"><span className="fa fa-twitter"></span></a>
                          <a className="share-icon googleplus" href="#"><span className="fa fa-google-plus"></span></a>
                      </div>
                  </div>

                  <div className="card__meta">
                      <a href="#">Full stack Developer</a>
                      <time>17th March</time>
                  </div>

                  <article className="card__article">
                      <h2><a href="#">Material Design Card - For Blog Post Article</a></h2>

                      <Alert className='shadow-lg' variant="light">
                        <Alert.Heading>Job Highlights</Alert.Heading>
                        <p style={{fontFamily:'-moz-initial',color:'#231F20',fontSize:'1.5rem'}}>
                        <ul>
                        <li> Aww yeah, you successfully read this important alert message. This example
                                                    text is going to run a bit longer so that you can see how spacing within an
                                                    alert works with this kind of content.</li>
                        <li>second item</li>
                        <li>third item</li>
                        </ul>
                           
                        </p>
                        <hr />
                   
                        </Alert>
                       
                        <Alert className='shadow-lg' variant="light">
                        <Alert.Heading>Job Description</Alert.Heading>
                      <p style={{fontFamily:'-moz-initial',color:'#231F20',fontSize:'1.5rem'}}>
                      <ul>
                        <li> Aww yeah, you successfully read this important alert message. This example
                                                    text is going to run a bit longer so that you can see how spacing within an
                                                    alert works with this kind of content.</li>
                        <li>second item</li>
                        <li>third item</li>
                        <li> Aww yeah, you successfully read this important alert message. This example
                                                    text is going to run a bit longer so that you can see how spacing within an
                                                    alert works with this kind of content.</li>
                                                    <li> Aww yeah, you successfully read this important alert message. This example
                                                    text is going to run a bit longer so that you can see how spacing within an
                                                    alert works with this kind of content.</li>
                                                    <li> Aww yeah, you successfully read this important alert message. This example
                                                    text is going to run a bit longer so that you can see how spacing within an
                                                    alert works with this kind of content.</li>
                        </ul>
                      </p>
                      <hr />
                      </Alert>
                      <Row>
                          <Col sm={4}>
                          <div class="card card-margin">
                        <div class="card-header no-border">
                            <h5 class="card-title">Education Requirements</h5>
                        </div>
                        <div class="card-body pt-0">
                            <div class="widget-49">
                                <div class="widget-49-title-wrapper">
                                   
                                </div>
                                <ol class="widget-49-meeting-points">
                                    <li class="widget-49-meeting-item"><span>Expand module is removed</span></li>
                                    <li class="widget-49-meeting-item"><span>Data migration is in scope</span></li>
                                    <li class="widget-49-meeting-item"><span>Session timeout increase to 30 minutes</span></li>
                                </ol>
                             
                        </div>
                        </div>
                        </div>
                          </Col>
                          <Col sm={4}>
                          <div class="card card-margin">
                        <div class="card-header no-border">
                            <h5 class="card-title">Experiece Required</h5>
                        </div>
                        <div class="card-body pt-0">
                            <div class="widget-49">
                                <div class="widget-49-title-wrapper">
                                   
                                </div>
                                <ol class="widget-49-meeting-points">
                                    <li class="widget-49-meeting-item"><span>Expand module is removed</span></li>
                                    <li class="widget-49-meeting-item"><span>Data migration is in scope</span></li>
                                    <li class="widget-49-meeting-item"><span>Session timeout increase to 30 minutes</span></li>
                                </ol>
                                </div>
                          
                        </div>
                        </div>
                          </Col>
                          <Col sm={4}>
                          <div class="card card-margin">
                        <div class="card-header no-border">
                            <h5 class="card-title">Skills Required</h5>
                        </div>
                        <div class="card-body pt-0">
                            <div class="widget-49">
                                <div class="widget-49-title-wrapper">
                                   
                                </div>
                                <ol class="widget-49-meeting-points">
                                    <li class="widget-49-meeting-item"><span>Expand module is removed</span></li>
                                    <li class="widget-49-meeting-item"><span>Data migration is in scope</span></li>
                                    <li class="widget-49-meeting-item"><span>Session timeout increase to 30 minutes</span></li>
                                </ol>
                                </div>
                          
                        </div>
                        </div>
                          </Col>
                          <hr />
                      </Row>
                      <Row>
                          <Col sm={4}>
                      <Alert className='shadow-lg' variant="light">
                        <Alert.Heading>Salary</Alert.Heading>
                      <p style={{fontFamily:'-moz-initial',color:'#231F20',fontSize:'1.5rem'}}>
                      <ul>
                        <li>90000 - 89999</li>
                        </ul>
                      </p>
                      <hr />
                      </Alert>
                      </Col>
                      <Col sm={4}>
                      <Alert className='shadow-lg' variant="light">
                        <Alert.Heading>Location</Alert.Heading>
                      <p style={{fontFamily:'-moz-initial',color:'#231F20',fontSize:'1.5rem'}}>
                            <ul>
                                <li>Kozhikode</li>
                            </ul>
                      </p>
                      <hr />
                      </Alert>
                      </Col>
                      <Col sm={4}>
                      <Alert className='shadow-lg' variant="light">
                        <Alert.Heading>Company</Alert.Heading>
                      <p style={{fontFamily:'-moz-initial',color:'#231F20',fontSize:'1.5rem'}}>
                            <ul>
                                <li>Infosys (<a href="" style={{color:'blue'}}>Infosys.com</a>)</li>
                               
                            </ul>
                      </p>
                      <hr />
                      </Alert>
                      </Col>
                      </Row>
                      <Row>
                      <Alert className='shadow-lg' variant="light">
                        <Alert.Heading>About Company</Alert.Heading>
                      <p style={{fontFamily:'-moz-initial',color:'#231F20',fontSize:'1.5rem',padding:'1rem'}}>
                     
                      SayOne is born out of our passion to change the world. 
                      This passion helps us move ahead. We get excited at the very thought of changing the world.
                      When our clients come with an idea that has world changing potential, 
                      we whole heartedly put ourselves into it and there by helping them.
                      We started our journey in 2011 and we have grown from a 3 member team to a team of 50 in these five years.
                       All through these years we have been working with a lot of start ups and SMEs, helping them achieving their dreams.
                        SayOne has worked with a lot of passionate start ups and SMEs from USA, EU, Middle east and Latin america.
                         We have delivered over 300+ projects for our clients.
            
                      </p>
                      <hr />
                      </Alert>
                      </Row>
                      <Row>
                      <Alert className='shadow-lg' variant="light">
                        <Alert.Heading>Job Requirements</Alert.Heading>
                      <p style={{fontFamily:'-moz-initial',color:'#231F20',fontSize:'1.5rem'}}>
                      <ul>
                        <li> Aww yeah, you successfully read this important alert message. This example
                                                    text is going to run a bit longer so that you can see how spacing within an
                                                    alert works with this kind of content.</li>
                        <li>second item</li>
                        <li>third item</li>
                        <li> Aww yeah, you successfully read this important alert message. This example
                                                    text is going to run a bit longer so that you can see how spacing within an
                                                    alert works with this kind of content.</li>
                        </ul>
                      </p>
                      <hr />
                      </Alert>
                      </Row>
                  </article>
              </div>

              <div class="card__action">
                  
                  <div className="card__author">
                      <img src="https://storage.needpix.com/rsynced_images/head-659652_1280.png" className='image-fluid' alt="user" style={{width:'30px',height:'30px'}} />
                      <div className="card__author-content" style={{justifyContent:'end'}}>
                          By <a href="#" >John Doe</a>
                      </div>
                  </div>
              </div>
              <Button  variant="primary" size="lg" style={{marginRight:'10rem',marginLeft:'10rem',marginBottom:'5rem'}}>Apply</Button>
              
          </div>

          
      </div>
      </Row>
    </Container>
  )
}

export default JobDetails