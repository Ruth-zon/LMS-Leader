import React, {Component} from 'react';
import {Row, Container, Col, Image} from 'react-bootstrap';
import '../../../ViewComponents/coursepage/course.css';
import {FaRegStar, FaRegEye, FaRegPlayCircle} from 'react-icons/all';

class Instructor extends Component {
  render() {
    return (
      <>
        <div className="instructor">
          <Container>
            <Row>
              <Col md="3">
                <Image src="./img_from_xd/image 71.png"></Image>
              </Col>
              <Col md="9">
                <h3>Demetri Caron</h3>
                <Container>
                  <Row className="icons">
                    <Col xs="4" className="align-left">
                      <FaRegStar color="#F3B23A" />
                      4.5 (1,348 ratings)
                    </Col>
                    <Col xs="4">
                      <FaRegEye color="#DB4500" />
                     271,658 Students
                    </Col>
                    <Col xs="4" className="align-right">
                      <FaRegPlayCircle color="#3E9365" />
                      {/* {data.lesion + ' '} Lesion */}28 Courses
                    </Col>
                  </Row>
                </Container>
                <p>
                  CBE brings you courses that are affordable, current,
                  entertaining and based on practical work experience instead of
                  theory.
                </p>
              </Col>
            </Row>
            <Row>
              <h4>Adobe Certified Instructor & Adobe Certified Expert</h4>
              <p>
                Effortless comfortable full leather lining eye-catching unique
                detail to the toe low ‘cut away’ sides clean and sleek. Polished
                finish elegant court shoe work duty stretchy mid kitten heel
                this ladylike design slingback strap mid kitten heel this
                ladylike design. Sharing is who I am, and teaching is where I am
                at my best, because I’ve been on both sides of that equation,
                and getting to deliver useful training is my meaningful way to
                be a part of the creative community.am at my best, because I’ve
                been on both sides of that equation, and getting to deliver
                useful training is my meaningful Thanks.
              </p>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

export default Instructor;
