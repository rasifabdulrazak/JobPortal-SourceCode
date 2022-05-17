import React from 'react'
import { Container, Row,Col,Carousel } from 'react-bootstrap'
import Footer from '../../components/User/Footer/Footer'
import HrHeader from '../../components/Hr/HrHeader/HrHeader'
import './style.css'

function HrHome() {
  return (
      <>
      <Container>
          <HrHeader />
          <Row className='backroundcarosel'>
              <Col>
              <div className="wrapper">
          
          <div className="card radius shadowDepth1 shadow-lg">
      
              <div className="card__content card__padding">
              <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100 image-fluid"
      src="http://cdn2.hubspot.net/hub/202646/file-549063946-jpg/blog-files/employment-recruiters-assist-in-getting-jobs.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 image-fluid"
      src="https://www.medreps.com/medical-sales-careers/wp-content/uploads/recruiter-image.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 image-fluid"
      src="https://www.proremodeler.com/sites/proremodeler/files/styles/pr_main_image/public/proremodeler-when-to-hire-a-headhunter.jpeg?itok=tw72fWtR"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
</div>
</div>

              </Col>
              <Col>

              

              </Col>
          </Row>
          <Row>
              <Col sm={4}>
              <div className="wrapper">
          
          <div className="card radius shadowDepth1 shadow-lg">
      
              <div className="card__content card__padding">
              <div class="card__image border-tlr-radius">
    				<img src="https://wallpaperaccess.com/full/760289.jpg" alt="image" class="border-tlr-radius" style={{height:'20rem'}} />
                </div>
                  
              

                  <div className="card__meta">
                      <a></a>
                      <time className='title'></time>
                  </div>

                  <article className="card__article">
                      <h2><a>Full-stack - ibm</a></h2>

                      <p style={{fontFamily:'-moz-initial',color:'#231F20'}}>This is nice...</p>
                  </article>
              </div>

              <div class="card__action">
                  
                
              </div>
          </div>


      </div>

              </Col>

              <Col sm={4}>

              <div className="wrapper">
          
          <div className="card radius shadowDepth1 shadow-lg">
      
              <div className="card__content card__padding">
              <div class="card__image border-tlr-radius">
    				<img src="https://wallpaperaccess.com/full/760289.jpg" alt="image" class="border-tlr-radius" style={{height:'20rem'}} />
                </div>
                  
              

                  <div className="card__meta">
                      <a></a>
                      <time className='title'></time>
                  </div>

                  <article className="card__article">
                      <h2><a href="#">Full-stack - ibm</a></h2>
                      <p style={{fontFamily:'-moz-initial',color:'#231F20'}}>This is nice...</p>
                  </article>
              </div>

              <div class="card__action">
                  
                
              </div>
          </div>


      </div>

              </Col>

              <Col sm={4}>
              <div className="wrapper">
          
          <div className="card radius shadowDepth1 shadow-lg">
      
              <div className="card__content card__padding">
              <div class="card__image border-tlr-radius">
    				<img src="https://wallpaperaccess.com/full/760289.jpg" alt="image" class="border-tlr-radius" style={{height:'20rem'}} />
                </div>
                  
              

                  <div className="card__meta">
                      
                      <time className='title'></time>
                  </div>

                  <article className="card__article">
                      <h2><a>Full-stack - ibm</a></h2>

                      <p style={{fontFamily:'-moz-initial',color:'#231F20'}}>This is nice...</p>
                  </article>
              </div>

              <div class="card__action">
                  
                
              </div>
          </div>


      </div>
              </Col>

              <Col sm={4}>
              <div className="wrapper">
          
          <div className="card radius shadowDepth1 shadow-lg">
      
              <div className="card__content card__padding">
              <div class="card__image border-tlr-radius">
    				<img src="https://wallpaperaccess.com/full/760289.jpg" alt="image" class="border-tlr-radius" style={{height:'20rem'}} />
                </div>
                  
              

                  <div className="card__meta">
                      
                      <time className='title'></time>
                  </div>

                  <article className="card__article">
                      <h2><a>Full-stack - ibm</a></h2>

                      <p style={{fontFamily:'-moz-initial',color:'#231F20'}}>This is nice...</p>
                  </article>
              </div>

              <div class="card__action">
                  
                
              </div>
          </div>


      </div>
              </Col>
          </Row>
       
      </Container>
      <Footer />
 
    </>
  )
}

export default HrHome