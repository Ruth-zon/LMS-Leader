// import './../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect } from 'react';
// import './homepage/App.css';

// import {
//   Categories as ctgs,
//   Courses as crs,
//   // Students as tst,
//   Partners as prt,
//   Learnings as lrn,
// } from './homepage/data.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from 'react-router-dom';
import Footer from './Footer';
import Navigation from '../../navbar';
import Header from './Header';
import '../../ViewComponents/coursepage/course.css';
import Description from './description/description';
import MoreCourses from './moreCourses';
import {
  // Categories as ctgs,
  Courses as crs,
  ExCourse,
  // Students as tst,
  // Partners as prt,
  // Learnings as lrn,
} from '../../Store/data.js';
import Belive from './belive';
import TopEducators from './topEducators';
import {actions} from '../../Store/actions';
import {connect} from 'react-redux';
import CourseConfig from './CourseConfig';
import BuyCourse from './BuyCourse';
const mapDispatchToProps = (dispatch) => ({
  initialCourse: (course) => dispatch(actions.initialCourse(course)),
});

function mapStateToProps(state) {
  return {
    courses: state.listCoursesReducer.courses,
    course: state.courseReducer.course,
    styles: state.stylesReducer.styles,
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(function CoursePage(props) {
  // let {data }= useParams();
  let params = useParams();

  useEffect(() => {
    let course = ExCourse;
    if (params.course) {
      course = props.courses.find((c) => (c = params.course));
      // props.initialCourse(course);
    }
  });
  // console.log(params.course);
  // console.log(course);
  // console.log(props.courses);
  // const data=JSON.parse(params.data.toString())
  return (
    <>
      <div className="coursepage coursepageconf">
        {/* <HeaderConfig />
        <CourseConfig /> */}
        {/* <div className="content-config"> */}
        <Header />
        <BuyCourse className="mt-5"/>
        {/* <help/> */}
        <Description />
        {props.course.show.more.more_courses && <MoreCourses />}
        {props.course.show.more.belive && <Belive />}
        {props.course.show.more.top_educators && <TopEducators />}
        {props.course.show.more.footer && <Footer />}
      </div>
      {/* </div> */}
    </>
  );
});

// export default CoursePage;
