import axios from "axios";
import React, { useEffect, useState } from "react";
import { Row, Container, Alert, Col, Modal, Button, Form } from "react-bootstrap";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import "./ClientDetails.css";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";




    

const ClientDetails = () => {
  const [smShow, setSmShow] = useState(false);
  const [user, setUser] = useState();
  const [education, setEducation] = useState([]);
  const [employement, setEmployement] = useState([]);
  const [projects, setProjects] = useState([]);
  const [personal, setPersonal] = useState([]);
  const [skills, setSkills] = useState([]);
  const [profile,setProfile] = useState([]);
  const params = useParams();

  const navigate = useNavigate();
  const userId = useSelector((state) => state.userId);
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const fetchProfile = async ()=>{
    const {data}= await axios.get(`http://127.0.0.1:8000/users/user_profile/${params.id}/`)
    console.log(data)
    setProfile(data)
  }

  const submitMessage = async ()=>{
    const data = {
      user1:userId.userId,
      user2:smShow.id
    }
    const response = await axios.post(`http://127.0.0.1:8000/chat_app/chat/`,data)
    setSmShow(false)
  }



  const fetchSkills = async () => {
    const { data } = await axios.get(
      `http://127.0.0.1:8000/users/user_skills/${params.id}/`
    );

    setSkills(data);
  };

  const fetchPersonal = async () => {
    const { data } = await axios.get(
      `http://127.0.0.1:8000/users/user_personal/${params.id}/`
    );

    setPersonal(data);
  };

  const fetchProjects = async () => {
    try {
      const { data } = await axios.get(
        `http://127.0.0.1:8000/users/user_projects/${params.id}/`
      );

      setProjects(data);
    } catch (error) {}
  };

  const fetchEmployement = async () => {
    try {
      const { data } = await axios.get(
        `http://127.0.0.1:8000/users/user_employment/${params.id}/`
      );
      console.log(data);
      setEmployement(data);
    } catch (error) {}
  };

  const fetchEducation = async () => {
    try {
      const { data } = await axios.get(
        `http://127.0.0.1:8000/users/user_education/${params.id}/`
      );

      setEducation(data);
    } catch (error) {}
  };

  const fetchUser = async () => {
    try {
      const { data } = await axios.get(
        `http://127.0.0.1:8000/users/${params.id}/`
      );
      setUser(data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchUser();
    fetchEducation();
    fetchEmployement();
    fetchProjects();
    fetchPersonal();
    fetchSkills();
    fetchProfile();
  }, []);

  return (
    <>
      <Container>
        <Row>
          <div className="wrapper">
            <div className="card radius shadowDepth1 shadow-lg">
              <div className="card__content card__padding">
                <div className="main-body">
                  <nav aria-label="breadcrumb" className="main-breadcrumb">
                    <ol className="breadcrumb">
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Client Profile
                      </li>
                    </ol>
                  </nav>

                  <div className="row gutters-sm">
                    <div className="col-md-4 mb-3">
                      <div className="wrapper" style={{ marginTop: "0px" }}>
                        <div className="card radius shadowDepth1 shadow-lg">
                          <div className="card__content card__padding">
                            {profile.length>0 &&
                              profile.map((value) => (
                                <div className="card">
                                  <div className="card-body">
                                    <div className="d-flex flex-column align-items-center text-center">
                                      <img
                                        src={value.profile_photo}
                                        alt="Admin"
                                        className="rounded-circle"
                                        width="150"
                                      />
                                      <div className="mt-3">
                                        <h4>{value.user.username}</h4>
                                        <p className="text-secondary mb-1">
                                          {value.email}
                                        </p>
                                        <p className="text-muted font-size-sm">
                                          {value.user.work_status}
                                        </p>

                                        <button
                                          className="btn btn-outline-primary"
                                          onClick={()=>setSmShow(value)}
                                        >
                                          Message
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ))}
                          </div>
                        </div>
                      </div>

                      <div className="wrapper" style={{ marginTop: "0px" }}>
                        <div className="card radius shadowDepth1 shadow-lg">
                          <div className="card__content card__padding">
                            <h4 className="mb-3">Key Skilss</h4>
                            <Row>
                              {skills.length > 0 ? (
                                skills.map((value) => (
                                  <Col
                                    style={{
                                      display: "flex",
                                      marginLeft: "3px",
                                    }}
                                  >
                                    <Alert
                                      key=""
                                      variant="secondary"
                                      style={{ marginRight: "1rem" }}
                                    >
                                      {value.skills}
                                    </Alert>
                                  </Col>
                                ))
                              ) : (
                                <p>Client Didnot Have any Key Skills</p>
                              )}
                            </Row>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div className="row gutters-sm">
                        <div className="col-sm-6 mb-3">
                          <div className="wrapper" style={{ marginTop: "0px" }}>
                            <div className="card radius shadowDepth1 shadow-lg">
                              <div className="card__content card__padding">
                                {education.length > 0 ? (
                                  education.map((value) => (
                                    <div className="card h-100">
                                      <div className="card-body">
                                        <h4 className="d-flex align-items-center mb-3">
                                          Education
                                        </h4>
                                        <small>Course : {value.course}</small>
                                        <div
                                          className="mb-3"
                                          style={{ height: "5px" }}
                                        ></div>
                                        <small>Branch : {value.branch}</small>
                                        <div
                                          className="mb-3"
                                          style={{ height: "5px" }}
                                        ></div>
                                        <small>
                                          University : {value.university}
                                        </small>
                                        <div
                                          className="mb-3"
                                          style={{ height: "5px" }}
                                        ></div>
                                        <small>
                                          Course Type : {value.course}
                                        </small>
                                        <div
                                          className="mb-3"
                                          style={{ height: "5px" }}
                                        ></div>
                                        <small>Grade : {value.grade}</small>
                                        <div
                                          className="mb-3"
                                          style={{ height: "5px" }}
                                        ></div>
                                        <small>
                                          PassOutYear : {value.passout_year}
                                        </small>
                                        <div
                                          className="mb-3"
                                          style={{ height: "5px" }}
                                        ></div>
                                      </div>
                                    </div>
                                  ))
                                ) : (
                                  <p>Client Didnot Have an Education History</p>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6 mb-3">
                          <div className="wrapper" style={{ marginTop: "0px" }}>
                            <div className="card radius shadowDepth1 shadow-lg">
                              <div className="card__content card__padding">
                                {employement.length > 0 ? (
                                  employement.map((value) => (
                                    <div className="card h-100">
                                      <div className="card-body">
                                        <h4 className="d-flex align-items-center mb-3">
                                          Employement
                                        </h4>
                                        <small>
                                          Company : {value.company_name}
                                        </small>
                                        <div
                                          className="mb-3"
                                          style={{ height: "5px" }}
                                        ></div>
                                        <small>
                                          Designation : {value.position}
                                        </small>
                                        <div
                                          className="mb-3"
                                          style={{ height: "5px" }}
                                        ></div>
                                        <small>
                                          Start date : {value.started_date}
                                        </small>
                                        <div
                                          className="mb-3"
                                          style={{ height: "5px" }}
                                        ></div>
                                        <small>
                                          End Date : {value.ending_date}
                                        </small>
                                        <div
                                          className="mb-3"
                                          style={{ height: "5px" }}
                                        ></div>
                                        <small>Salary : {value.salary}</small>
                                        <div
                                          className="mb-3"
                                          style={{ height: "5px" }}
                                        ></div>
                                        <small>
                                          Experience : {value.expereince}
                                        </small>
                                        <div
                                          className="mb-3"
                                          style={{ height: "5px" }}
                                        ></div>
                                      </div>
                                    </div>
                                  ))
                                ) : (
                                  <p>
                                    Client Didnot Have an Employement Details
                                  </p>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="row gutters-sm">
                        <div className="col-sm-6 mb-3">
                          <div className="wrapper" style={{ marginTop: "0px" }}>
                            <div className="card radius shadowDepth1 shadow-lg">
                              <div className="card__content card__padding">
                                {projects.length > 0 ? (
                                  projects.map((value) => (
                                    <div className="card h-100">
                                      <div className="card-body">
                                        <h4 className="d-flex align-items-center mb-3">
                                          Projects
                                        </h4>
                                        <small>Title : {value.title}</small>
                                        <div
                                          className="mb-3"
                                          style={{ height: "5px" }}
                                        ></div>
                                        <small>Status : {value.status}</small>
                                        <div
                                          className="mb-3"
                                          style={{ height: "5px" }}
                                        ></div>
                                        <small>
                                          Start Date : {value.start_date}
                                        </small>
                                        <div
                                          className="mb-3"
                                          style={{ height: "5px" }}
                                        ></div>
                                        <small>
                                          End Date : {value.end_date}
                                        </small>
                                        <div
                                          className="mb-3"
                                          style={{ height: "5px" }}
                                        ></div>
                                        <small>
                                          Description : {value.details}
                                        </small>
                                        <div
                                          className="mb-3"
                                          style={{ height: "5px" }}
                                        ></div>
                                      </div>
                                    </div>
                                  ))
                                ) : (
                                  <p>Client Didnot Have an Projects Details</p>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6 mb-3">
                          <div className="wrapper" style={{ marginTop: "0px" }}>
                            <div className="card radius shadowDepth1 shadow-lg">
                              <div className="card__content card__padding">
                                {personal.length > 0 ? (
                                  personal.map((value) => (
                                    <div className="card h-100">
                                      <div className="card-body">
                                        <h4 className="d-flex align-items-center mb-3 font-weight-bold">
                                          Personal Details
                                        </h4>
                                        <small>
                                          Date Of Birth : {value.date_of_birth}
                                        </small>
                                        <div
                                          className="mb-3"
                                          style={{ height: "5px" }}
                                        ></div>
                                        <small>Gender : {value.gender}</small>
                                        <div
                                          className="mb-3"
                                          style={{ height: "5px" }}
                                        ></div>
                                        <small>Adress : {value.adress}</small>
                                        <div
                                          className="mb-3"
                                          style={{ height: "5px" }}
                                        ></div>

                                        <small>
                                          HomeTown : {value.hometown}
                                        </small>
                                        <div
                                          className="mb-3"
                                          style={{ height: "5px" }}
                                        ></div>
                                        <small>
                                          Marital Status :{" "}
                                          {value.marital_status}
                                        </small>
                                        <div
                                          className="mb-3"
                                          style={{ height: "5px" }}
                                        ></div>
                                      </div>
                                    </div>
                                  ))
                                ) : (
                                  <p>Client Didnot Have an Personal Details</p>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Row>

        {/* #########################  modal  ######################################## */}

        
          <Modal
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
                  <Form.Control type="text" placeholder="Enter a message" />
                </Form.Group>
                <div className="text-center">
                <Button variant="primary" type="submit" >
                  Send
                </Button>
                </div>
                
              </Form>
            </Modal.Body>
          
          </Modal>
        

        {/* #########################  modal  ######################################## */}
      </Container>
    </>
  );
};

export default ClientDetails;
