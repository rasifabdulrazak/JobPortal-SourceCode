import React, { useEffect, useState } from "react";
import { Container, Col, Row, Button, Form, Modal } from "react-bootstrap";
import "./RecruiterList.css";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm, Controller } from "react-hook-form";

function RecruiterList() {
  const [smShow, setSmShow] = useState(false);
  const [recruiter, setRecruiter] = useState();
  const userId = useSelector((state) => state.userId);
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const submitMessage = async ()=>{
    const data = {
      user1:parseInt(userId.userId),
      user2:parseInt(smShow)
    }
    console.log(data)
    const response = await axios.post(`http://127.0.0.1:8000/chat_app/chat/`,data)
    
    setSmShow(false)
  }


  const hrlisting = async () => {
    try {
      const { data } = await axios.get(
        "http://127.0.0.1:8000/hr_login/hr_register/"
      );
      setRecruiter(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    hrlisting();
  }, []);

  return (
    <Container>
      <Row>
        {recruiter &&
          recruiter.map((value) => (
            <Col>
              <div class="wrappers ">
                <div class="card radius shadowDepth1 shadow-lg">
                  <div class="card__image border-tlr-radius">
                    <img
                      src="https://storage.needpix.com/rsynced_images/head-659652_1280.png"
                      alt="image"
                      class="border-tlr-radius image-fluid"
                      style={{ height: "20rem" }}
                    />
                  </div>

                  <div class="card__content card__padding">
                    <div class="card__share">
                      <div class="card__social">
                        <a class="share-icon facebook">
                          <span class="fa fa-facebook"></span>
                        </a>
                        <a class="share-icon twitter">
                          <span class="fa fa-twitter"></span>
                        </a>
                        <a class="share-icon googleplus">
                          <span class="fa fa-google-plus"></span>
                        </a>
                      </div>

                      <a id="share" class="share-toggle share-icon"></a>
                    </div>

                    <div class="card__meta">
                      <a>Web</a>
                      <time>{value.date_joined}</time>
                    </div>

                    <article class="card__article">
                      <h2>
                        <a>{value.username}</a>
                      </h2>

                      <p>{value.email}</p>
                    </article>
                    <Button onClick={()=>setSmShow(value.id)}>View details</Button>
                  </div>
                </div>
              </div>
            </Col>
          ))}
      </Row>


       {/* #########################  modal  ######################################## */}

        
      {smShow && <Modal
            size="sm"
            show={smShow}
            onHide={() => setSmShow(false)}
            aria-labelledby="example-modal-sizes-title-sm"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-modal-sizes-title-sm">
                Send Initial Message
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={handleSubmit(submitMessage)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Message</Form.Label>
                  <Form.Control required type="text" placeholder="Enter a message" />
                </Form.Group>
                <div className="text-center">
                <Button variant="primary" type="submit" >
                  Send
                </Button>
                </div>
                
              </Form>
            </Modal.Body>
          
          </Modal>}
        

        {/* #########################  modal  ######################################## */}


    </Container>
  );
}

export default RecruiterList;
