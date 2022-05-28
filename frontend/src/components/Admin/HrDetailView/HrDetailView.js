import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Modal, Row, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

const HrDetailView = () => {
  const [smShow, setSmShow] = useState(false);
  const [hr, setHr] = useState();
  const params = useParams();

  const permission = async () => {
    try {
      await axios.patch(
        `http://127.0.0.1:8000/hr_login/hr_register/${params.id}/`
      );
      setSmShow(false);
      HrDetail();
    } catch (error) {
      console.log(error);
    }
  };

  const HrDetail = async () => {
    console.log(params);
    try {
      const { data } = await axios.get(
        `http://127.0.0.1:8000/hr_login/hr_register/${params.id}/`
      );
      console.log(data);
      setHr(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    HrDetail();
  }, []);
  return (
    <Container>
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

              <div className="card shadow-lg mt-5">
                <div className="row">
                  <div className="col-sm-5">
                    <img
                      className="d-block w-100"
                      src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
                      alt=""
                    />
                  </div>
                  <div className="col-sm-7">
                    {hr &&
                      hr.map((value) => (
                        <div className="card-block">
                          <h4 className="card-title">{value.username}</h4>
                          <p className="fonts">
                            <span style={{ fontWeight: "bold" }}>Email :</span>
                            {value.email}
                          </p>
                          <p className="fonts">
                            <span style={{ fontWeight: "bold" }}>
                              Phonenumber :
                            </span>{" "}
                            {value.phonenumber}
                          </p>
                          <p className="fonts">
                            <span style={{ fontWeight: "bold" }}>
                              Work Experience :
                            </span>{" "}
                            {value.work_status} year
                          </p>
                          <br />
                          {value.is_active ? (
                            <Button
                              variant="warning"
                              onClick={() => setSmShow(true)}
                            >
                              Verified
                            </Button>
                          ) : (
                            <a
                              className="btn btn-primary btn-lg float-right"
                              onClick={() => setSmShow(true)}
                            >
                              Give permision
                            </a>
                          )}
                        </div>
                      ))}
                  </div>
                </div>

                <div className="card__action"></div>
              </div>
            </div>
          </div>
        </div>
      </Row>
      <Modal
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            Confirmation
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to Block</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setSmShow(false)}>
            Close
          </Button>
          <Button onClick={permission}>Block</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default HrDetailView;
