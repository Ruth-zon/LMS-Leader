import React, {Component} from 'react';
import './course.css';
import {Card, Col, Button, Image, ListGroup} from 'react-bootstrap';
import {connect} from 'react-redux';

function mapStateToProps(state) {
  return {
    course: state.courseReducer.course,
  };
}
export default connect(mapStateToProps)(function BuyCourse(props) {
  let course = props.course;

  return (
    <div className="buy-course shadow mt-5">
      <Card style={{width: '18rem'}}>
        <Card.Img variant="top" src={props.course.image} />
        <Card.Body>
          {course.show.price && (
            <>
              <Card.Title>
                {props.course.price}
                {course.show.prev_price && <span>{course.prev_price}</span>}
              </Card.Title>
              {course.show.prev_price && course.show.prev_price_time && (
                <Card.Text>
                  <Image src="./img_from_xd/orange clock.svg"></Image>
                  {course.prev_price_time}
                  left at this price
                </Card.Text>
              )}
              <Button
                variant="primary"
                block
                style={{
                  backgroundColor: props.course.colors.button,
                  borderColor: props.course.colors.fontButton,
                }}
              >
                <p style={{color: props.course.colors.fontButton}}> Buy Now</p>
              </Button>
            </>
          )}
          <ListGroup className="card-list" variant="flush">
            <ListGroup.Item>
              <h5>This course includes</h5>
              {course.course_info.map((value, key) => {
                return (
                  <p>
                    <Image src={value.icon}></Image>
                    {value.name}
                  </p>
                );
              })}
            </ListGroup.Item>
            {/* <ListGroup.Item>
              <h6>Training 5 or more people?</h6>Get your team access to 3500+
              top courses anytime.
              <span className=" card-text"> Contact our sale</span>
            </ListGroup.Item> */}
            <ListGroup.Item>
              <h6>Share this course</h6>
              {course.show.share.instegram && (
                <Image src="./img_from_xd/instagram.svg"></Image>
              )}
              {course.show.share.facebook && (
                <Image src="./img_from_xd/facebook (1).svg"></Image>
              )}
              {course.show.share.whatsapp && (
                <Image src="./img_from_xd/whatsapp (1).svg"></Image>
              )}
              {course.show.share.twitter && (
                <Image src="./img_from_xd/twitter (1).svg"></Image>
              )}
              {/* {course.show.share.linkedin&&  <Image src="./img_from_xd/linkedin (1).svg"></Image> } */}
              {course.show.share.youtube && (
                <Image src="./img_from_xd/youtube (1).svg"></Image>
              )}
              {course.show.share.reddit && (
                <Image src="./img_from_xd/reddit.svg"></Image>
              )}
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </div>
  );
});
