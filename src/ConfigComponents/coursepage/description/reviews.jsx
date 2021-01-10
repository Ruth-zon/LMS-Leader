import React, {Component} from 'react';
import {Col, Container, Image, Row} from 'react-bootstrap';
import '../../../ViewComponents/coursepage/course.css';

class Reviews extends Component {
  render() {
    return (
      <>
        <div className="reviews">
          <h3>Student feedback</h3>

          <Container>
            <Row>
              <Col md="3">
                <Image src="./img_from_xd/image 74.png"></Image>
              </Col>
              <Col md="9">
                <h5>Wynton McCurdy</h5>
                <h6>16 courses, 10 reviews</h6>
              </Col>
            </Row>
            <Row>
              <p>
                Wow, I’ve learnt so much and it has already changed what and how
                I do things. I can not wait to start the next course.
              </p>
            </Row>
            <Row>
              <Col md="3">
                <Image src="./img_from_xd/image 75.png"></Image>
              </Col>
              <Col md="9">
                <h5>Wynton McCurdy</h5>
                <h6>16 courses, 10 reviews</h6>
              </Col>
            </Row>
            <Row>
              <p>
                Wow, I’ve learnt so much and it has already changed what and how
                I do things. I can not wait to start the next course.
              </p>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

export default Reviews;
