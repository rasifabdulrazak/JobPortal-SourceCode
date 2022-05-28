import React, { useEffect, useState } from "react";
import "./JobContent.css";
import {
  Container,
  Button,
  Form,
  Col,
  Row,
  Figure,
  ListGroup,
  Alert,
} from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { ArrowRight } from "react-bootstrap-icons";
import SweetAlert from "react-bootstrap-sweetalert";
import { useDispatch, useSelector } from "react-redux";

function JobContent() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [confirm, setConfirm] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [exist, setExist] = useState();
  const userId = useSelector((state) => state.userId);

  const savedJobs = async () => {
    const { data } = await axios.get(
      `http://127.0.0.1:8000/hr_login/saved_jobs/${userId.userId}`
    );
    console.log("++++++++++++++++")
    console.log(data)
    setExist(data);
  };

  const saveJob = async (e) => {
    const detail = {
      saved_user: userId.userId,
      saved_job: e,
    };
    const { data } = await axios.post(
      `http://127.0.0.1:8000/hr_login/saving_job/`,
      detail
    );
    console.log(data);
    setConfirm(true);
  };

  const fecthJobs = async () => {
    const { data } = await axios.get(`http://127.0.0.1:8000/api/jobsrender/`);
    setJobs(data);
  };

  useEffect(() => {
    fecthJobs();
  }, []);

 

  return (
    <Container>
      <div>
        {
          jobs && jobs.map((value)=>{
            const {id,
              hr_recruiter,
              posting_date,
              title,
              company,
              about_company,
              location,
              experience_required,
              job_description,
              job_highlights,
              educational_requirments,
              salary_from,
              salary_to,
              requirements,
              skills_required
            } = value;

            return (
              <div className="wrapper">
         
            <div className="card radius shadowDepth1 shadow-lg">
              <div className="card__content card__padding">
                <div className="card__share">
                  {userId &&  (
                    <a
                      id="share"
                      className="fa fa-save share-icon"
                      title="save job"
                      onClick={() => saveJob(value.id)}
                    ></a>
                  )}
                </div>

                <div className="card__meta">
                  <a>{value.location}</a>
                  <time className="title">Posted On: {posting_date}</time>
                </div>

                <article
                  className="card__article"
                  onClick={() => navigate(`/job_details/${value.id}`)}
                >
                  <h2>
                    <a>
                      {title} - {company}
                    </a>
                  </h2>

                  <p style={{ fontFamily: "-moz-initial", color: "#231F20" }}>
                    {job_highlights}...
                  </p>
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
                  <div className="card__author-content">
                    By <a>{hr_recruiter.username}</a>
                  </div>
                </div>
              </div>
            </div>
        </div>

            )

          })
        }
        
      </div>

      <SweetAlert
        success
        title="Saved!"
        show={confirm}
        onConfirm={() => setConfirm(false)}
      >
        Job Saved Succesfully
      </SweetAlert>
    </Container>
  );
}

export default JobContent;
