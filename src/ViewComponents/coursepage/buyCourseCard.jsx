import React, { Component } from 'react';
import './course.css';
import { Card, Col, Button, Image, ListGroup } from 'react-bootstrap';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    course: state.courseReducer.course,
    
  };
}
export default connect(
  mapStateToProps,

)(function BuyCourse(props) {
  // let course = props.data;
  

  return (
    <div className="buy-course shadow mt-5">
      <Card style={{ width: '18rem' }}>
        {!props.view && <Card.Img variant="top" src={props.course.image} />}
        <Card.Body>
          <Card.Title>{props.course.price}</Card.Title>
          <Card.Text>
            <Image src="./img_from_xd/orange clock.svg"></Image>
            {/* { props.course} */}
              11 Hour left at this price
            </Card.Text>
          <Button variant="primary" block>
            Buy Now
            </Button>
          <ListGroup className="card-list" variant="flush">
            <ListGroup.Item>
              <h5>This course includes</h5>
              <p>
                <Image src="./img_from_xd/book.svg"></Image>
                  {/* Language - {props.course.language} */}
              </p>
              <p>
                <Image src="./img_from_xd/screen.svg"></Image>
                  Use on desktop, tablet & mobile
                </p>
              <p>
                <Image src="./img_from_xd/timer.svg"></Image>
                  Full lifetime access
                </p>
              <p>
                <Image src="./img_from_xd/other.svg"></Image>
                  Certificate of Completion
                </p>
            </ListGroup.Item>

            <ListGroup.Item>
              <h6>Training 5 or more people?</h6>Get your team access to 3500+
                top courses anytime.
                <span className=" card-text"> Contact our sale</span>
            </ListGroup.Item>
            <ListGroup.Item>
              <h6>Share this course</h6>
              <Image src="./img_from_xd/instagram.svg"></Image>
              <Image src="./img_from_xd/facebook (1).svg"></Image>
              <Image src="./img_from_xd/whatsapp (1).svg"></Image>
              <Image src="./img_from_xd/twitter (1).svg"></Image>
              {/* <Image src="./img_from_xd/linkedin (1).svg"></Image> */}
              <Image src="./img_from_xd/youtube (1).svg"></Image>
              <Image src="./img_from_xd/reddit.svg"></Image>
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </div>
  );
}
)


