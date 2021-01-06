import React, {Component} from 'react';
import {Col, Container, Image, Row} from 'react-bootstrap';
import '../course.css';
import StarRatings from 'react-star-ratings';
import {connect} from 'react-redux';
import {actions} from '../../../Store/actions';
import styled from 'styled-components';

function mapStateToProps(state) {
  return {
    lesson: state.lessonReducer.lesson,
    user: state.userReducer.user,
    course: state.courseReducer.course,
  };
}
const mapDispatchToProps = (dispatch) => ({
  updateStars: (courses) => dispatch(actions.updateStars(courses)),
  updateStarsForStudent: (courses) => dispatch(actions.updateStarsForStudent(courses)),
});

class Reviews extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
    };
    // this.props = this.props.bind(this);
  }

  changeRating = (newRating) => {
    let uid = this.props.user.uid;
    this.props.updateStars({uid: uid, stars: newRating});
    this.props.updateStarsForStudent({uid: uid, stars: newRating});
  };
  render() {
    return (
      <>
        <h3>Take your stars</h3>
        <StarRatings
          rating={
            this.props.course.students.find((s) => s.uid == this.props.user.uid)
              .stars
          }
          starRatedColor="#f56962"
          starHoverColor="#fef0ef"
          changeRating={this.changeRating}
          numberOfStars={5}
          name="rating"
        />
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
export default connect(mapStateToProps, mapDispatchToProps)(Reviews);

const Stars = styled.div`
   width: calc(100vw - 100px);
   height: 100px;
   background-color: ${(props) => props.bgColor || ' orange'};
   color: ${(props) => props.theme.textColor || ' black'}
   margin: 0 auto;
   display: flex;
   align-items: center;
   justify-content: center;
   margin-bottom: 10px;
   cursor: pointer;
   transition: all 0.3s;

   &amp;:hover {
     opacity: 0.7;
   }

   ${(props) =>
   props.isClicked &&
   `
      transform: skew(33deg);
    `}
 `;
