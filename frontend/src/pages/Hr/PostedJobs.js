import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import HrHeader from "../../components/Hr/HrHeader/HrHeader";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

function PostedJobs() {
  const userId = useSelector((state) => state.userId);
  const [postedjob, setPostedjob] = useState();
  const [deleteItem, setDeleteItem] = useState(false);

  const deleteJob = async () => {
    console.log(deleteItem);
    try {
      await axios.delete(
        `http://127.0.0.1:8000/hr_login/jobslist/${deleteItem.id}/`
      );
      postedJobs();
      setDeleteItem(false);
    } catch (error) {
      console.log(error);
    }
  };

  const postedJobs = async () => {
    try {
      const { data } = await axios.get(
        `http://127.0.0.1:8000/hr_login/jobslist/${userId.userId}/`
      );
      console.log(data);
      setPostedjob(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    postedJobs();
  }, []);

  return (
    <>
      <HrHeader />
      <Container>
        <Row>
          <Col sm={8}>
            <div className="wrapper">
              {postedjob &&
                postedjob.map((value) => (
                  <div className="card radius shadowDepth1 shadow-lg">
                    <div className="card__content card__padding">
                      <div className="card__meta">
                        <a>{value.title}</a>
                        <time className="title">
                          Posted On: {value.posting_date}
                        </time>
                      </div>

                      <article className="card__article">
                        <h2>
                          <a>
                            {value.title} - {value.location}
                          </a>
                        </h2>

                        <p
                          style={{
                            fontFamily: "-moz-initial",
                            color: "#231F20",
                          }}
                        >
                          {value.job_highlights}
                        </p>
                      </article>
                    </div>

                    <div class="card__action">
                      <div className="card__author d-flex justify-content-end">
                        <Button
                          className="text-right"
                          size="lg"
                          variant="primary"
                        >
                          Edit
                        </Button>
                        <Button
                          className="text-right mx-2"
                          size="lg"
                          variant="danger"
                          onClick={() => setDeleteItem(value)}
                        >
                          Delete
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </Col>

          {/* ==========================  modal ============================= */}

          {deleteItem && (
            <Modal
              size="sm"
              show={true}
              onHide={() => setDeleteItem(false)}
              aria-labelledby="contained-modal-title-vcenter"
              centered
            >
              <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-sm">
                  Confirmation
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>Are you sure you want to Delete</Modal.Body>
              <Modal.Footer>
                <Button
                  variant="secondary"
                  onClick={() => setDeleteItem(false)}
                >
                  Close
                </Button>
                <Button onClick={deleteJob} variant="danger">
                  Delete
                </Button>
              </Modal.Footer>
            </Modal>
          )}

          {/* ==========================  modal ============================= */}
        </Row>
      </Container>
    </>
  );
}

export default PostedJobs;
