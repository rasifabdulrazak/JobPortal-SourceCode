import React, { useState, useRef } from "react";
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

function UserResume() {
  // const [show, setShow] = useState(false);

  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };
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
                <p>
                  Resume is the most important document recruiters look for.
                  Recruiters generally do not look at profiles without resumes.
                </p>
                <Row>
                  <Col sm={12}>
                    <p className="" style={{ fontWeight: "bold" }}>
                      <span>
                        Resume :Rasifrazak.pdf <ArrowDownCircleFill />
                        <Trash className="deleteicon" />
                      </span>
                      <br />
                    </p>
                  </Col>
                </Row>
                <hr />
                <p className="mb-0 text-center">
                  <div ref={ref}>
                    <Button onClick={handleClick}>Attach</Button>
                    <Overlay
                      show={show}
                      target={target}
                      placement="bottom"
                      container={ref}
                      containerPadding={20}
                    >
                      <Popover id="popover-contained">
                        <Popover.Header as="h3">
                          Attach Your Resume Here
                        </Popover.Header>
                        <Popover.Body>
                          <strong>
                            <Form.Control
                              type="file"
                              placeholder="Enter email"
                              required
                            />
                          </strong>{" "}
                          <Button variant="primary" size="sm">
                            Submit
                          </Button>
                        </Popover.Body>
                      </Popover>
                    </Overlay>
                  </div>
                </p>
              </Alert>
            </div>
          </div>
        </div>
      </Col>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      {/* </Row> */}
    </Container>
  );
}

export default UserResume;
