import React, {useContext} from 'react';
import './course.css';
import {Row, Col, Container} from 'react-bootstrap';
import {
  FaRegStar,
  FaRegEye,
  FaRegPlayCircle,
  FaRegClock,
} from 'react-icons/all';
import {UserContext} from '../../login/userProvider';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

function mapStateToProps(state) {
  return {
    course: state.courseReducer.course,
  };
}

const mapDispatchToProps = (dispatch) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(function Header(props) {
  // const user = useContext(UserContext);
  console.log(props);
  return (
    <>
      <div className="header">
        <div className="content">
          {/* <p className="text-own">
            your own course - you may edit it
              <Link to={'/editcourse/' + props.data.id}> here</Link>
          </p> */}
          <h1>{props.course.name}</h1>
          <br />
          <div className={props.view ? 'header-view' : ''}>
            <h3>
              {/* Learn graphic design today with Photoshop, Illustrator, Adobe
                  XD, InDesign & more in this Adobe CC Masterclass! */}
              {props.course.subtitle}
            </h3>
            <Container>
              <Row>
                <Col xs="3">
                  <FaRegStar color="#F3B23A" />
                  {props.course.stars}
                </Col>
                <Col xs="3">
                  <FaRegEye color="#DB4500" />
                  {/* {props.data.views} */}
                  Enrolled {props.course.students} students
                </Col>
                <Col xs="3">
                  <FaRegClock />
                  Duration 10 week
                </Col>
                <Col xs="3">
                  <FaRegPlayCircle color="#3E9365" />
                  {props.course.lessons.length} Lessons
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
});
