import React, {useContext} from 'react';
import '../../ViewComponents/coursepage/course.css';
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
import {actions} from '../../Store/actions';
import '../configurator.css';

function mapStateToProps(state) {
  return {
    course: state.courseReducer.course,
  };
}

const mapDispatchToProps = (dispatch) => ({
  setName: (name) => dispatch(actions.setName(name)),
  setSubtitle: (sub) => dispatch(actions.setSubtitle(sub)),
  setWeeks: (sub) => dispatch(actions.setWeeks(sub)),
  setSectionConfig: (name) => dispatch(actions.setSectionConfig(name)),
  changeFont: (name) => dispatch(actions.setTitleFont(name)),
});

function Header(props) {
  return (
    <>
      <div
        data-toggle="tooltip"
        data-placement="top"
        title="color"
        onClick={() => props.setSectionConfig({name: 'course_header'})}
        className="hover-config header"
        style={{backgroundColor: props.course.colors.header}}
      >
        <div className="content">
          <h1>
            <textarea
              value={props.course.name}
              style={{color: props.course.colors.name}}
              onChange={(e) => props.setName(e.target.value)}
              type="text"
            />
          </h1>
          <br />
          <div className={props.view ? 'header-view' : ''}>
            <h3>
              <textarea
                style={{color: props.course.colors.subtitle}}
                value={props.course.subtitle}
                onChange={(e) => props.setSubtitle(e.target.value)}
                type="text"
              />
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
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);
