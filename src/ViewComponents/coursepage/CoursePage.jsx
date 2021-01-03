import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from 'react-router-dom';
import Footer from '../homepage/Footer';
import Navigation from '../../navbar';
import Header from './Header';
import './course.css';
import Description from './description/description';
import BuyCourse from './buyCourseCard';
import MoreCourses from './moreCourses';
import Belive from './belive';
import TopEducators from './topEducators';
// import { actions } from '../Store/actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    course: state.courseReducer.course
  };
}

export default connect(
  mapStateToProps,

)(function CoursePage(props) {

  // console.log(props.course)
  // let params = useParams();

  return (
    <Router className="coursePage">
      <Navigation />
      <div className="coursepage">
        <BuyCourse  />

        <Header/>
        <Description />
        <MoreCourses />
        <Belive />
        <TopEducators />
      </div>
      <Footer />
    </Router>
  );
}

)
