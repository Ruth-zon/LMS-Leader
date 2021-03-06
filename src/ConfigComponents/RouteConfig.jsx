import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from 'react-router-dom';
import CoursePage from './coursepage/coursePage';
// import LessonPage from './lessonPage';
import HomePage from './HomePage/HomePage';
import React from 'react';
import { connect } from 'react-redux';
import { actions } from '../Store/actions';
// import {Courses} from '../Store/data';
// import Frame from './Frame/HomePageFrame';
import HomePageFrame from './Frame/HomePageFrame';
import CoursePageFrame from './Frame/CoursePageFrame';
// import LessonConfig from './lessonPage/LessonConfig';
import LessonPageFrame from './Frame/LessonPageFrame';
import TopFrame from './Frame/top_frame';
import StudentProfilePage from '../ViewComponents/profilePage/studentProfilePage';
import Spinner from '../spinner/spinner';
import ManagerProfilePage from '../ViewComponents/profilePage/managerProfilePage';

// import studentProfilePage from '../ViewComponents/studentProfilePage';
// import Stage from './Frame/stage';
// import Configurator from './Frame/configurator';
// import CourseConfig from './coursepage/CourseConfig';
// import LessonPage from './lessonPage/LessonPage';
// import HomeConfig fro./HomePage/HomeConfigfig';

// import CoursePage from './coursepage/coursepage';
const mapDispatchToProps = (dispatch) => ({
  initialCourses: (courses) => dispatch(actions.initialCourse(courses)),
  initialCourse: (courses) => dispatch(actions.initialCourse(courses)),
  setProcess: (name) => dispatch(actions.setProcess(name)),
});

function mapStateToProps(state) {
  return {
    styles: state.stylesReducer.styles,
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(function RouteConfig(props) {
  let match = useRouteMatch();
  // props.initialCourse(Courses);
  return (
    <div>
      {/* <Link to={`${match.url}/components`}>Components</Link> */}
      {props.styles.process ? (
        <Spinner />
      ) : (
      <Switch >
        <Route path={`${match.path}/profile`}>
          {/* <CoursePage /> */}
          <ManagerProfilePage />

        </Route>
        <Route path={`${match.path}/addcourse`}>
          {/* <CoursePage /> */}
          <CoursePageFrame />

        </Route>

        <Route path={`${match.path}/:course/addLesson`}>
          <LessonPageFrame />

        </Route>
        <Route path={`${match.path}/:course/:lesson`}>
          <LessonPageFrame />

        </Route>
        <Route path={`${match.path}/:course`}>
          {/* <CoursePageFrame /> */}
          <CoursePageFrame />

        </Route>
        <Route path={match.path}>
          <HomePageFrame />
          {/* <HomePage /> */}

        </Route>
      </Switch>)}
    </div>
  );
});
// function Topic() {
//   let {topicId} = useParams();
//   return <h3>Requested topic ID: {topicId}</h3>;
// }
// export default RouteConfig;
