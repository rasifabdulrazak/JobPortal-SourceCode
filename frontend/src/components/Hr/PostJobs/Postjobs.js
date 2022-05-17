import { Container,Row,Col,Form,Button } from 'react-bootstrap'
import React from 'react'
import './Postjobs.css'

function Postjobs() {
  return (
    <>
    <Container>
        <Row>
       
        <div className="wrappere">
          
            <div className="card radius shadowDepth1 shadow-lg">
      
                <div className="card__content card__padding">
                <Form>
                    <Row>
                    <Col sm={6}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" placeholder="Enter email" />
                        {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text> */}
                    </Form.Group>
                    </Col>
                    <Col sm={6}>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Company</Form.Label>
                        <Form.Control type="text" placeholder="Password" />
                    </Form.Group>
                    {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group> */}
                    </Col>
                    </Row>

                    <Row>
                    <Col sm={6}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Location</Form.Label>
                        <Form.Control type="text" placeholder="Enter email" />
                        {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text> */}
                    </Form.Group>
                    </Col>
                    <Col sm={6}>
                    <Form.Group className="mb-3" controlId="formBasicPassword" >
                        <Form.Label>About Company</Form.Label>
                        <Form.Control type="text" placeholder="Password" />
                    </Form.Group>
                    {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group> */}
                    </Col>
                    </Row>

                    <Row>
                    <Col sm={6}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Experience Required</Form.Label>
                        <Form.Control type="text" placeholder="Enter email" />
                        {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text> */}
                    </Form.Group>
                    </Col>
                    <Col sm={6}>
                    <Form.Group className="mb-3" controlId="formBasicPassword" >
                        <Form.Label>Job Higlights</Form.Label>
                        <Form.Control type="text" placeholder="Password" />
                    </Form.Group>
                    {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group> */}
                    </Col>
                    </Row>

                    <Row>
                    <Col sm={6}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Salary From </Form.Label>
                        <Form.Control type="text" placeholder="Enter email" />
                        {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text> */}
                    </Form.Group>
                    </Col>
                    <Col sm={6}>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Salary To</Form.Label>
                        <Form.Control type="text" placeholder="Password" />
                    </Form.Group>
                    {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group> */}
                    </Col>
                    </Row>


                    <Row>
                    <Col sm={6}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>About Company</Form.Label>
                        <Form.Control type="text" placeholder="Enter email" style={{height:'10rem'}} />
                        {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text> */}
                    </Form.Group>
                    </Col>
                    <Col sm={6}>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>job Description</Form.Label>
                        <Form.Control type="text" placeholder="Password" style={{height:'10rem'}} />
                    </Form.Group>
                    {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group> */}
                    </Col>
                    </Row>

                    <Row>
                    <Col sm={6}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Requirements</Form.Label>
                        <Form.Control type="text" placeholder="Enter email" style={{height:'10rem'}}/>
                        {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text> */}
                    </Form.Group>
                    </Col>
                    </Row>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                </div>

            </div>

        </div>

        </Row>
    </Container>
    </>
  )
}

export default Postjobs