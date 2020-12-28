import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from 'react-router-dom';
//   import CoursePage from './coursepage/CoursePage';
// import LessonPage from './lessonPage';
import HomePage from './homepage/HomePage';
import React from 'react';
import {connect} from 'react-redux';
import {actions} from '../Store/actions';
// import {Courses} from '../Store/data';
// import Frame from './Frame/HomePageFrame';
//   import HomePageFrame from './Frame/HomePageFrame';
//   import CoursePageFrame from './Frame/CoursePageFrame';
// import LessonConfig from './lessonPage/LessonConfig';
//   import LessonPageFrame from './Frame/LessonPageFrame';
//   import TopFrame from './Frame/top_frame';
import StudentProfilePage from './profilePage/studentProfilePage';
import CoursePage from './coursepage/CoursePage';
import LessonPage from './lessonPage/LessonPage';
import SearchCourse from './SearchPage/ShearchCourse';
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
});

function mapStateToProps(state) {
  return {
    styles: state.stylesReducer.styles,
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(function RouteView(props) {
  let match = useRouteMatch();
  // props.initialCourse(Courses);
  return (
    <div>
      {/* <Link to={`${match.url}/components`}>Components</Link> */}

      <Switch>
        <Route path={`${match.path}/profile`}>
          {/* <CoursePage /> */}
          <StudentProfilePage />
        </Route>
        <Route path={`${match.path}/search`}>
          {/* <CoursePage /> */}
          <SearchCourse />
        </Route>
        <Route path={`${match.path}/:course/:lesson`}>
          <LessonPage />
        </Route>
        <Route path={`${match.path}/:course`}>
          {/* <CoursePage /> */}
          <CoursePage />
        </Route>

        <Route path={match.path}>
          <HomePage />
          {/* <HomePage /> */}
        </Route>
      </Switch>
    </div>
  );
});
// function Topic() {
//   let {topicId} = useParams();
//   return <h3>Requested topic ID: {topicId}</h3>;
// }
// export default RouteConfig;
