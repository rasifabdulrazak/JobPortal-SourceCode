import React, { useState, useRef, useEffect } from "react";
import {
  Container,
  Button,
  Modal,
  Form,
  Col,
  Row,
  Figure,
  ListGroup,
  Alert,
  Overlay,
  Popover,
} from "react-bootstrap";
import "./UserResume.css";
import { Pencil, Trash, ArrowDownCircleFill } from "react-bootstrap-icons";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import SweetAlert from "react-bootstrap-sweetalert";


function UserResume() {
  const [confirm, setConfirm] = useState(false);
  const [smShow, setSmShow] = useState(false);
  const [editModal,setEditModal] = useState(false)
  const [newsmShow, setnewSmShow] = useState(false);
  const {
    register,
    reset,
    trigger,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const [target, setTarget] = useState(null);
  const userId = useSelector((state) => state.userId);
  const ref = useRef(null);
  const [resume,setResume] = useState([])

  const resumeHandler = async (data) => {
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    const formData = new FormData();
    formData.set("user", userId.userId);
    formData.set("resume_headline", data.resume_headline);
    formData.set("resume", data.resume[0]);
  
    try {
      await axios.post(`http://127.0.0.1:8000/users/user_resume/`,formData,config)
      fetchEserResume()
      setSmShow(false)
    } catch (error) {
      console.log(error)
    }
  };

  const fetchEserResume = async ()=>{
    try {
      const {data}= await axios.get(`http://127.0.0.1:8000/users/user_resume/${userId.userId}/`)
      console.log(data)
      setResume(data)
    } catch (error) {
      
    }
  }

  const editResume = async (data)=>{
    try {
      await axios.put(`http://127.0.0.1:8000/users/user_resume/${editModal.id}/`,data)
      fetchEserResume()
      setEditModal(false)
    } catch (error) {
      console.log(error)
    }
  }

  const deleteResume = async ()=>{
    try {
      await axios.delete(`http://127.0.0.1:8000/users/user_resume/${newsmShow.id}/`)
      setnewSmShow(false)
      fetchEserResume()
      setConfirm(true)

    } catch (error) {
      
    }
  }

  useEffect(()=>{
    fetchEserResume()
  },[])

  return (
    <Container>
      {/* <Row className='resumepart'> */}
      <Col>
        <div className="wrappere">
          <div className="card radius shadowDepth1 shadow-lg">
            <div className="card__content card__padding">
          <Alert variant="light" className="shadow-lg">
                <Alert.Heading>
                  <p style={{ textAlign: "center" }}>Attach Resume </p>
                </Alert.Heading>
               
                {resume.length>0 ? resume.map((value)=><Row>
                <p>
                  {value.resume_headline}
                </p>
                  <Col sm={12}>
                    <p className="" style={{ fontWeight: "bold" }}>
                      <span>
                        Resume :{value.resume}<ArrowDownCircleFill />
                        <Pencil onClick={()=>setEditModal(value)} />
                        <Trash onClick={()=>setnewSmShow(value)} className="deleteicon" />
                      </span>
                      <br />
                    </p>
                  </Col>
                </Row>):<p>Upload Resume to increase opportunity</p>}
                <hr />
                <p className="mb-0 text-center">
                  <div ref={ref}>
                    <Button onClick={() => setSmShow(true)}>Attach</Button>
                  </div>
                </p>
              </Alert>
            </div>
          </div>
        </div>
      </Col>
{/* ***********************Adding Modal******************************** */}
      <Modal
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            Submit Your Resume
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit(resumeHandler)} encType="multipart/form-data">
          <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Resume Headline</Form.Label>
              <Form.Control 
                {...register("resume_headline", {
                  required: "resume_headline is required",
                  minLength: {
                    value: 6,
                    message: "Should contain 6 characters",
                  },
                })}
               
                type="text" 
                placeholder="Select File" />
              <Form.Text className="text-muted">
                <span className="text-center">
                  {errors.resume_headline && (
                    <small className="text-center text-danger">
                      {errors.resume_headline.message}
                    </small>
                  )}
                </span>
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Attach Resume</Form.Label>
              <Form.Control 
                {...register("resume", {
                  required: "resume is required",
                })}
                accept="application/pdf"
                type="file" 
                placeholder="Select File" />
              <Form.Text className="text-muted">
                <span className="text-center">
                  {errors.resume && (
                    <small className="text-center text-danger">
                      {errors.resume.message}
                    </small>
                  )}
                </span>
              </Form.Text>
            </Form.Group>
            <div className="text-center">
            <Button variant="primary" type="submit">
              Submit
            </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>

      {/* ***********************Adding Modal Ends******************************** */}


      {/* ***********************Edit Modal******************************** */}
     {editModal && <Modal
        size="sm"
        show={editModal}
        onHide={() => setEditModal(false)}
        aria-labelledby="example-modal-sizes-title-sm"
        centered
      >
        <Modal.Header onClick={()=>setEditModal(false)} closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            Submit Your Resume
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit(editResume)} encType="multipart/form-data">
          <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Resume Headline</Form.Label>
              <Form.Control 
                {...register("resume_headline", {
                  required: "resume_headline is required",
                  minLength: {
                    value: 6,
                    message: "Should contain 6 characters",
                  },
                })}
                value={editModal.resume_headline}
                onChange={(e) => setEditModal({ ...editModal, resume_headline: e.target.value })}
                type="text" 
                placeholder="Select File" />
              <Form.Text className="text-muted">
                <span className="text-center">
                  {errors.resume_headline && (
                    <small className="text-center text-danger">
                      {errors.resume_headline.message}
                    </small>
                  )}
                </span>
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Attach Resume</Form.Label>
              <Form.Control 
                {...register("resume", {
                  required: "resume is required",
                })}
                value={editModal.resume}
                onChange={(e) => setEditModal({ ...editModal, resume: e.target.value=null })}
                accept="application/pdf"
                type="file" 
                placeholder="Select File" />
              <Form.Text className="text-muted">
                <span className="text-center">
                  {errors.resume && (
                    <small className="text-center text-danger">
                      {errors.resume.message}
                    </small>
                  )}
                </span>
              </Form.Text>
            </Form.Group>
            <div className="text-center">
            <Button variant="secondary" onClick={()=>setEditModal(false)}>
              close
            </Button>
            <Button variant="primary" type="submit">
              Submit
            </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>}

      {/* ***********************Edit Modal Ends******************************** */}




       {/* ***********************Delete Modal ******************************** */}
       {newsmShow && <Modal
        size="sm"
        show={newsmShow}
        onHide={() => setnewSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
        centered
      >
        <Modal.Header closeButton onClick={()=>setnewSmShow(false)}>
          <Modal.Title id="example-modal-sizes-title-sm">
            Confirmation
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete</Modal.Body>
        <Modal.Footer>
        <Button onClick={()=>setnewSmShow(false)}>Close</Button>
        <Button variant="danger" onClick={()=>deleteResume()} >Delete</Button>
      </Modal.Footer>
      </Modal>
}
        {/* ***********************Delete Modal Ends******************************** */}

      {/* ***********************Delete Alerts Starts here******************************** */}
        <SweetAlert
        success
        title="Deleted!"
        show={confirm}
        onConfirm={() => setConfirm(false)}
      >
        Resume Deleted
      </SweetAlert>
       {/* ***********************Delete Alert Ends******************************** */}

      {/* </Row> */}
    </Container>
  );
}

export default UserResume;
