import {FaRegStar, FaRegEye, FaRegPlayCircle} from 'react-icons/all';
import React, {useContext, useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {Card, Container, Row, Col} from 'react-bootstrap';
import '../homepage/App.css';
import {actions} from '../../Store/actions';
import {createHashHistory} from 'history';
import {createBrowserHistory} from 'history';
import {UserContext} from '../../login/userProvider';
import {Courses} from '../../Store/data';
import $ from 'jquery';
import history from '../../history';
import {Item} from 'semantic-ui-react';

// const history = createHashHistory();
// const browserHistory = createBrowserHistory();
const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user,
    school: state.schoolReducer.school,
  };
};
const mapDispatchToProps = (dispatch) => ({
  setCurrentCourse: (name) => dispatch(actions.setCurrentCourse(name)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(function MoreCourseCard(props) {
  const type = (props.user.uid = props.school.uid ? 'manager' : 'student');
  var url = window.location;
  var school = url.pathname.split('/')[2];
  const navigate = () => {
    if (type == 'manager') history.push(`${props.user.name}/addCourse`);
    else history.push(`/view/${props.school.name}/${props.course.name}`);
  };
  return (
    <Card className="course-card" onClick={navigate}>
      <Card.Img
        variant="top"
        className="card-img"
        src={'./img_from_xd/plus img.png'}
      />
      <Card.Body>
        <Card.Title className="align-left">
          {type === 'manager'
            ? 'Click here to add new course'
            : 'Click here to enroll new course'}
        </Card.Title>
      </Card.Body>
    </Card>
  );
});
