// import '../courseConfig/node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, useParams } from 'react-router-dom';
import Footer from '../../ViewComponents/Footer';
import Navigation from '../../navbar';
import Header from './Header';
import '../../ViewComponents/coursepage/course.css';
import Description from '../../ViewComponents/coursepage/description/description';
// import BuyCourse from '../coursepage/BuyCourse';
import MoreCourses from '../../ViewComponents/coursepage/moreCourses';
import Belive from '../coursepage/belive';
import Video from './video';
import TopEducators from '../../ViewComponents/coursepage/topEducators';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    styles: state.stylesReducer.styles,
    lesson: state.lessonReducer.lesson,
  };
}

// const mapDispatchToProps = (dispatch) => ({
//   initialById: (id) => dispatch(actions.initialById(id)),
//   setName: (name) => dispatch(actions.setName(name)),
//   setSubtitle: (subtitle) => dispatch(actions.setSubtitle(subtitle)),
//   setImage: (image) => dispatch(actions.setImage(image)),
//   initialCourse: (image) => dispatch(actions.initialCourse(image)),
// });
export default connect(
  mapStateToProps,
  null
)(function LessonPage(props) {
  // let {data }= useParams();
  // let params = useParams();
  // let course = crs[params.id-1]
  // .find((d) => (d.id = params.id));
  // const data=JSON.parse(params.data.toString())
  return (
    <div className="coursepage coursepageconf">
      <Header />
      <Video />
      {/* {props.lesson.show.description && <Description />} */}
      {/* {props.lesson.show.more_courses && <MoreCourses />} */}
      {/* {props.lesson.show.belive && <Belive />} */}
      {/* {props.lesson.show.top_educators && <TopEducators />} */}
      {/* {props.lesson.show.footer && <Footer />} */}
    </div>
  );
});

// export default LessonPage;
