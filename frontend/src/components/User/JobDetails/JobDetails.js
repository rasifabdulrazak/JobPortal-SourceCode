import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Alert } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./JobDetails.css";
import SweetAlert from "react-bootstrap-sweetalert";

function JobDetails() {
  const params = useParams();
  const userId = useSelector((state) => state.userId);
  const [jobs, setJobs] = useState();
  const [confirm, setConfirm] = useState(false);
  const [requirements, setRequirements] = useState([]);
  const [jobdescription, setJobdescription] = useState([]);
  const [jobhighlights, setJobhighlights] = useState([]);
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/jobsrender/${params.id}/`)
      .then((res) => {
        console.log("++++++++++++++++")
        console.log(res)
        console.log("++++++++++++++++")
        setJobs(res.data);
        console.log(res.data);
        let job_requirements = res.data.requirements.split(".");
        if (job_requirements.length > 1) {
          job_requirements.length = job_requirements.length - 1;
        }
        let job_description = res.data.job_description.split(".");
        if (job_description.length > 1) {
          job_description.length = job_description.length - 1;
        }
        let job_highlights = res.data.job_highlights.split(".");
        if (job_highlights.length > 1) {
          job_highlights.length = job_highlights.length - 1;
        }
        let educational_requirments =
          res.data.educational_requirments.split(".");
        if (educational_requirments.length > 1) {
          educational_requirments.length = educational_requirments.length - 1;
        }
        let experience_required = res.data.experience_required.split(".");
        if (experience_required.length > 1) {
          experience_required.length = experience_required.length - 1;
        }
        setRequirements(job_requirements);
        setJobdescription(job_description);
        setJobhighlights(job_highlights);
        setEducation(educational_requirments);
        setExperience(experience_required);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const jobApplyHandler = async ()=>{
    try {
      const data={
        applied_user:userId.userId,
        applied_job:params.id
      }
      await axios.post('http://127.0.0.1:8000/hr_login/applied_jobs/',data)
      setConfirm(true);
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container>
      <Row>
        <Col sm={8}>
          <div className="wrappere">
            <div className="card radius shadowDepth1 shadow-lg">
              <div className="card__content card__padding">
                <div className="card__share">
                  <div className="card__social">
                    <a className="share-icon facebook">
                      <span className="fa fa-facebook"></span>
                    </a>
                    <a className="share-icon twitter">
                      <span className="fa fa-twitter"></span>
                    </a>
                    <a className="share-icon googleplus">
                      <span className="fa fa-google-plus"></span>
                    </a>
                  </div>

                  <a
                    id="share"
                    className="share-toggle share-icon"
                    href="#"
                  ></a>
                </div>

                <div className="card__meta">
                  <a>{jobs && jobs.title}</a>
                  <time>{jobs && jobs.posting_date}</time>
                </div>

                <article className="card__article">
                  <h2>
                    <a>
                      {jobs && jobs.title}- {jobs && jobs.company}
                    </a>
                  </h2>

                  <p style={{ fontFamily: "-moz-initial", color: "#231F20" }}>
                    {jobhighlights && jobhighlights[0]}...
                  </p>
                </article>
              </div>

              <div class="card__action">
                <div className="card__author">
                  <a id="share" className="fa fa-map-marker share-icon"></a>
                  <div
                    className="card__author-content"
                    style={{ marginLeft: "10px" }}
                  >
                    <a>{jobs && jobs.location}</a>
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
                    <a className="share-icon facebook">
                      <span className="fa fa-facebook"></span>
                    </a>
                    <a className="share-icon twitter">
                      <span className="fa fa-twitter"></span>
                    </a>
                    <a className="share-icon googleplus">
                      <span className="fa fa-google-plus"></span>
                    </a>
                  </div>
                </div>
                <div className="card__meta">
                  <a>Full stack Developer</a>
                  <time>17th March</time>
                </div>

                <article className="card__article">
                  <h2>
                    <a>Material Design Card - For Blog Post Article</a>
                  </h2>

                  <p style={{ fontFamily: "-moz-initial", color: "#231F20" }}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ducimus harum...
                  </p>
                </article>
              </div>

              <div class="card__action"></div>
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
                  <a className="share-icon facebook">
                    <span className="fa fa-facebook"></span>
                  </a>
                  <a className="share-icon twitter">
                    <span className="fa fa-twitter"></span>
                  </a>
                  <a className="share-icon googleplus">
                    <span className="fa fa-google-plus"></span>
                  </a>
                </div>
              </div>

              <div className="card__meta">
                <a>{jobs && jobs.title}</a>
                <time>{jobs && jobs.posting_date}</time>
              </div>

              <article className="card__article">
                <h2>
                  <a>
                    {jobs && jobs.title} - {jobs && jobs.company}
                  </a>
                </h2>

                <Alert className="shadow-lg" variant="light">
                  <Alert.Heading>Job Highlights</Alert.Heading>
                  {jobhighlights.map((value) => (
                    <p
                      style={{
                        fontFamily: "-moz-initial",
                        color: "#231F20",
                        fontSize: "1.5rem",
                      }}
                    >
                      <ul>
                        <li> {value}</li>
                      </ul>
                    </p>
                  ))}
                  <hr />
                </Alert>

                <Alert className="shadow-lg" variant="light">
                  <Alert.Heading>Job Description</Alert.Heading>
                  {jobdescription.map((value) => (
                    <p
                      style={{
                        fontFamily: "-moz-initial",
                        color: "#231F20",
                        fontSize: "1.5rem",
                      }}
                    >
                      <ul>
                        <li>{value}</li>
                      </ul>
                    </p>
                  ))}
                  <hr />
                </Alert>
                <Row>
                  <Col sm={4}>
                    <div class="card card-margin shadow-lg">
                      <div class="card-header no-border">
                        <h5 class="card-title">Education Requirements</h5>
                      </div>
                      <div class="card-body pt-0">
                        <div class="widget-49">
                          <div class="widget-49-title-wrapper"></div>
                          {education.map((value) => (
                            <ul class="widget-49-meeting-points">
                              <li class="widget-49-meeting-item">
                                <span>{value}</span>
                              </li>
                            </ul>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col sm={4}>
                    <div class="card card-margin shadow-lg">
                      <div class="card-header no-border">
                        <h5 class="card-title">Experiece Required</h5>
                      </div>
                      <div class="card-body pt-0">
                        <div class="widget-49">
                          <div class="widget-49-title-wrapper"></div>
                          {experience.map((value) => (
                            <ul class="widget-49-meeting-points">
                              <li class="widget-49-meeting-item">
                                <span>{value}</span>
                              </li>
                            </ul>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col sm={4}>
                    <div class="card card-margin shadow-lg">
                      <div class="card-header no-border ">
                        <h5 class="card-title">Skills Required</h5>
                      </div>
                      <div class="card-body pt-0">
                        <div class="widget-49">
                          <div class="widget-49-title-wrapper"></div>
                          <ol class="widget-49-meeting-points">
                            <li class="widget-49-meeting-item">
                              <span>Expand module is removed</span>
                            </li>
                            <li class="widget-49-meeting-item">
                              <span>Data migration is in scope</span>
                            </li>
                            <li class="widget-49-meeting-item">
                              <span>
                                Session timeout increase to 30 minutes
                              </span>
                            </li>
                          </ol>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <hr />
                </Row>
                <Row>
                  <Col sm={4}>
                    <Alert className="shadow-lg" variant="light">
                      <Alert.Heading>Salary</Alert.Heading>
                      <p
                        style={{
                          fontFamily: "-moz-initial",
                          color: "#231F20",
                          fontSize: "1.5rem",
                        }}
                      >
                        <ul>
                          <li>
                            {jobs && jobs.salary_from} -{" "}
                            {jobs && jobs.salary_to}
                          </li>
                        </ul>
                      </p>
                      <hr />
                    </Alert>
                  </Col>
                  <Col sm={4}>
                    <Alert className="shadow-lg" variant="light">
                      <Alert.Heading>Location</Alert.Heading>
                      <p
                        style={{
                          fontFamily: "-moz-initial",
                          color: "#231F20",
                          fontSize: "1.5rem",
                        }}
                      >
                        <ul>
                          <li>{jobs && jobs.location}</li>
                        </ul>
                      </p>
                      <hr />
                    </Alert>
                  </Col>
                  <Col sm={4}>
                    <Alert className="shadow-lg" variant="light">
                      <Alert.Heading>Company</Alert.Heading>
                      <p
                        style={{
                          fontFamily: "-moz-initial",
                          color: "#231F20",
                          fontSize: "1.5rem",
                        }}
                      >
                        <ul>
                          <li>
                            {jobs && jobs.company} (
                            <a href="" style={{ color: "blue" }}>
                              Infosys.com
                            </a>
                            )
                          </li>
                        </ul>
                      </p>
                      <hr />
                    </Alert>
                  </Col>
                </Row>
                <Row>
                  <Alert className="shadow-lg" variant="light">
                    <Alert.Heading>About Company</Alert.Heading>
                    <p
                      style={{
                        fontFamily: "-moz-initial",
                        color: "#231F20",
                        fontSize: "1.5rem",
                        padding: "1rem",
                      }}
                    >
                      {jobs && jobs.about_company}
                    </p>
                    <hr />
                  </Alert>
                </Row>
                <Row>
                  <Alert className="shadow-lg" variant="light">
                    <Alert.Heading>Job Requirements</Alert.Heading>
                    {requirements.map((value) => (
                      <p
                        style={{
                          fontFamily: "-moz-initial",
                          color: "#231F20",
                          fontSize: "1.5rem",
                        }}
                      >
                        <ul>
                          <li>{value}</li>
                        </ul>
                      </p>
                    ))}
                    <hr />
                  </Alert>
                </Row>
              </article>
            </div>

            <div class="card__action">
              <div className="card__author">
                <img
                  src="https://storage.needpix.com/rsynced_images/head-659652_1280.png"
                  className="image-fluid"
                  alt="user"
                  style={{ width: "30px", height: "30px" }}
                />
                <div
                  className="card__author-content"
                  style={{ justifyContent: "end" }}
                >
                  By <a>{jobs && jobs.hr_recruiter.username}</a>
                </div>
              </div>
            </div>
            <Button
              onClick={()=>jobApplyHandler()}
              variant="primary"
              size="lg"
              style={{
                marginRight: "10rem",
                marginLeft: "10rem",
                marginBottom: "5rem",
              }}
            >
              Apply
            </Button>
          </div>
        </div>
      </Row>
      <SweetAlert
        success
        title="Application Succesfull"
        show={confirm}
        onConfirm={() => setConfirm(false)}
      >
        Your Application was sent Succesfully
      </SweetAlert>
    </Container>
  );
}

export default JobDetails;
