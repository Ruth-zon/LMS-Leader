import React, { useContext } from 'react';
import '../../ViewComponents/coursepage/course.css';
import { Row, Col, Container } from 'react-bootstrap';
import {
  FaRegStar,
  FaRegEye,
  FaRegPlayCircle,
  FaRegClock,
} from 'react-icons/all';
import { UserContext } from '../../login/userProvider';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { actions } from '../../Store/actions';
// import {Input} from 'semantic-ui-react';
import '../configurator.css';

// const mapDispatchToProps = (dispatch) => ({
//   setName: (data) => dispatch(actions.setName(data)),
//   setSubtitle: (data) => dispatch(actions.setSubtitle(data)),
// });

// function mapStateToProps(state) {
//   return {
//     course: state.courseReducer.course,
//   };
// }

function mapStateToProps(state) {
  return {
    course: state.courseReducer.course,
    currentCourse: state.currentCourseReducer.currentCourse,

  };
}

const mapDispatchToProps = (dispatch) => ({
  setName: (name) => dispatch(actions.setName(name)),
  setSubtitle: (sub) => dispatch(actions.setSubtitle(sub)),
  setWeeks: (sub) => dispatch(actions.setWeeks(sub)),
  setSectionConfig: (name) => dispatch(actions.setSectionConfig(name)),
  changeFont: (name) => dispatch(actions.setTitleFont(name))

});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(function Header(props) {
  // const user = useContext(UserContext);
  // const {course, setName, setSubtitle} = props;
  let prev = Object.assign({}, props.course);
  return (
    <>
      <div data-toggle="tooltip" data-placement="top" title="color"
        onClick={() => props.setSectionConfig({ name: 'course_header' })}
        className="hover-config header"
        style={{ backgroundColor: props.course.colors.header }}
      >
        <div className="content">
          {/* {user !== null && course.user_id === user.uid && (
            <p className="text-own">
              your own course - you may edit it
              <a href={'/editcourse/' + course.id}> here</a>
            </p>
          )} */}
          <h1>
            <textarea
              value={props.course.name}
              style={{ color: props.course.colors.name }}
              onChange={(e) => props.setName(e.target.value)}
              type="text"
            />
          </h1>
          <br />
          <div className={props.view ? 'header-view' : ''}>
            <h3>
              {/* Learn graphic design today with Photoshop, Illustrator, Adobe
                  XD, InDesign & more in this Adobe CC Masterclass! */}
              <textarea
                style={{ color: props.course.colors.subtitle }}
                value={props.course.subtitle}
                onChange={(e) => props.setSubtitle(e.target.value)}
                type="text"
              />
              {/* {course.subtitle} */}
            </h3>
            <Container>
              <Row>
                {props.course.show.stars && (
                  <Col xs="3">
                    <FaRegStar color="#F3B23A" />
                    {props.course._id == 0 ? '??' : props.course.stars} stars
                  </Col>
                )}
                {props.course.show.students && (
                  <Col xs="3">
                    <FaRegEye color="#DB4500" />
                    {/* {course.views} */}
                    Enrolled{' '}
                    {props.course._id === 0
                      ? '??'
                      : props.course.students.length}{' '}
                    students
                  </Col>
                )}
                {props.course.show.weeks && (
                  <Col xs="3">
                    <FaRegClock />
                    Duration{' '}
                    <input
                      type="number"
                      className="weeks-i"
                      onChange={(e) => props.setWeeks(e.target.value)}
                      value={props.course.students_num}
                      min="0"
                    />
                    weeks
                  </Col>
                )}
                {props.course.show.lessons && (
                  <Col xs="3">
                    <FaRegPlayCircle color="#3E9365" />
                    {props.course._id == 0
                      ? '??'
                      : props.course.lessons.length + ' '}
                    Lessons
                  </Col>
                )}
              </Row>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
});

// export default Header;
