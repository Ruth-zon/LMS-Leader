import React, {useEffect} from 'react';
import Footer from './Footer';
import Header from './Header';
import '../../ViewComponents/coursepage/course.css';
import Description from './description/description';
import MoreCourses from './moreCourses';
import Belive from './belive';
import TopEducators from './topEducators';
import {connect} from 'react-redux';
import BuyCourse from './BuyCourse';
const mapDispatchToProps = (dispatch) => ({});

function mapStateToProps(state) {
  return {
    course: state.courseReducer.course,
  };
}
function CoursePage(props) {
  return (
    <>
      <div className="coursepage coursepageconf">
        <Header />
        <BuyCourse className="mt-5" />
        <Description />
        {props.course.show.more.more_courses && <MoreCourses />}
        {props.course.show.more.belive && <Belive />}
        {props.course.show.more.top_educators && <TopEducators />}
        {props.course.show.more.footer && <Footer />}
      </div>
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);
