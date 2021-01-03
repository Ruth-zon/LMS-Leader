import React, {Component, useState} from 'react';
import {Button, Row} from 'react-bootstrap';
import {connect} from 'react-redux';
import {useParams, useRouteMatch} from 'react-router-dom';
import {actions} from '../../Store/actions';
import '../configurator.css';
import {createBrowserHistory} from 'history';
import $ from 'jquery';
import swal from 'sweetalert';
import {FaAngleDown, FaAngleRight, FaPlus, FaTrash} from 'react-icons/fa';
import history from '../../history';
import {
  ConfigBuyCourse,
  ConfigCurriculum,
  ConfigCurriculumX,
  ConfigHeader,
  ConfigOverview,
  ConfigBuyCourseShare,
  ConfigBuyCourseInfo,
  ConfigMoreCourses,
  ConfigBelive,
  ConfigFooter,
  ConfigTopEducators,
  ConfigTopEducatorsX,
  ConfigInstructorReviews,
  CourseButtons,
} from './CourseConfigSections';
import {handleDelete} from '../handleImage';
const browserHistory = createBrowserHistory();

function mapStateToProps(state) {
  return {
    course: state.courseReducer.course,
    styles: state.stylesReducer.styles,
    user: state.userReducer.user,
  };
}

const mapDispatchToProps = (dispatch) => ({
  addCourseToServer: (data) => dispatch(actions.addCourseToServer(data)),
  deleteCourseFromServer: (data) =>
    dispatch(actions.deleteCourseFromServer(data)),
  setName: (data) => dispatch(actions.setName(data)),
  setSubtitle: (data) => dispatch(actions.setSubtitle(data)),
  setImage: (data) => dispatch(actions.setImage(data)),
  setPrice: (data) => dispatch(actions.setPrice(data)),
  setPrevPrice: (data) => dispatch(actions.setPrevPrice(data)),
  setPrevPriceTime: (data) => dispatch(actions.setPrevPriceTime(data)),
  showStars: () => dispatch(actions.showStars()),
  showStudents: () => dispatch(actions.showStudents()),
  showWeeks: () => dispatch(actions.showWeeks()),
  showLessons: () => dispatch(actions.showLessons()),
  showPrice: () => dispatch(actions.showPrice()),
  showPrevPrice: () => dispatch(actions.showPrevPrice()),
  showPrevPriceTime: () => dispatch(actions.showPrevPriceTime()),
  setPrevPriceType: () => dispatch(actions.setPrevPriceType()),
  setLinkedin: (data) => dispatch(actions.setLinkedin(data)),
  setInstegram: (data) => dispatch(actions.setInstegram(data)),
  setFacebook: (data) => dispatch(actions.setFacebook(data)),
  setTwitter: (data) => dispatch(actions.setTwitter(data)),
  setReddit: (data) => dispatch(actions.setReddit(data)),
  setYoutube: (data) => dispatch(actions.setYoutube(data)),
  setWhatsapp: (data) => dispatch(actions.setWhatsapp(data)),
  setColorTopEducators: (data) => dispatch(actions.setColorTopEducators(data)),
  setColorMoreCourses: (data) => dispatch(actions.setColorMoreCourses(data)),
  setColorBuyCourse: (data) => dispatch(actions.setColorBuyCourse(data)),
  setColorHeader: (data) => dispatch(actions.setColorHeader(data)),
  setColorBelive: (data) => dispatch(actions.setColorBelive(data)),
  setColorName: (data) => dispatch(actions.setColorName(data)),
  setColorSubtitle: (data) => dispatch(actions.setColorSubtitle(data)),
  setBeliveImage: (data) => dispatch(actions.setBeliveImage(data)),
  setBeliveAuther: (data) => dispatch(actions.setBeliveAuther(data)),
  setBeliveText: (data) => dispatch(actions.setBeliveText(data)),
  showLinkedin: () => dispatch(actions.showLinkedin()),
  showInstegram: () => dispatch(actions.showInstegram()),
  showFacebook: () => dispatch(actions.showFacebook()),
  showTwitter: () => dispatch(actions.showTwitter()),
  showReddit: () => dispatch(actions.showReddit()),
  showYoutube: () => dispatch(actions.showYoutube()),
  showWhatsapp: () => dispatch(actions.showWhatsapp()),
  showCourseFooter: () => dispatch(actions.showCourseFooter()),
  showTopEducarors: () => dispatch(actions.showTopEducarors()),
  showBelive: () => dispatch(actions.showBelive()),
  showMoreCourses: () => dispatch(actions.showMoreCourses()),
  initialEmptyLesson: () => dispatch(actions.initialEmptyLesson()),
  setDescription: (name) => dispatch(actions.setDescription(name)),
  addNewForOverview: (name) => dispatch(actions.addNewForOverview(name)),
  deleteFromOverview: (name) => dispatch(actions.deleteFromOverview(name)),
  addNewForInfo: (name) => dispatch(actions.addNewForInfo(name)),
  deleteFromInfo: (name) => dispatch(actions.deleteFromInfo(name)),
  addNewForTop: (name) => dispatch(actions.addNewForTop(name)),
  deleteFromTop: (name) => dispatch(actions.deleteFromTop(name)),
  setCourseInfo: (name) => dispatch(actions.setCourseInfo(name)),
  setTopEducatorsProp: (name) => dispatch(actions.setTopEducatorsProp(name)),
  setTopEducatorsImage: (name) => dispatch(actions.setTopEducatorsImage(name)),
  setMoreCourses: (name) => dispatch(actions.setMoreCourses(name)),
  showReviews: (name) => dispatch(actions.showReviews(name)),
  showInstructor: (name) => dispatch(actions.showInstructor(name)),
  setColorCourseByPart: (name) => dispatch(actions.setColorCourseByPart(name)),
  setTitleFont: (name) => dispatch(actions.setTitleFont(name)),
  setSectionConfig: (name) => dispatch(actions.setSectionConfig(name)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(function CourseConfig(props) {
  let match = useRouteMatch();
  let {name, course} = useParams();
  const addLesson = () => {
    if (!props.course._id || props.course.id == '0') {
      swal(
        'Oops...',
        'You need to save the course before adding a lesson',
        'warning'
      );
    } else {
      props.initialEmptyLesson();
      history.push('/' + name + '/' + course + '/addlesson');

      // browserHistory.replace(
      //   '/' + match.params.name + '/' + match.params.course + '/addLesson'
      // );
      // window.location.reload();
    }
  };
  // const [choose, setChoose] = useState(0);
  // const handleChoose = (click) => {
  //   if (choose === click) setChoose(0);
  //   else setChoose(click);
  // };
  const handleSave = () => {
    props.addCourseToServer(props.course);
    // browserHistory.replace('/' + match.params.name);
    // window.location.reload();
  };
  const switchConfigComponent = (name, id) => {
    switch (name) {
      case 'course_header':
        return <ConfigHeader data={props} />;
      case 'course_overview':
        return <ConfigOverview data={props} />;
      case 'course_curriculum':
        return <ConfigCurriculum data={props} />;
      case 'course_curriculum_x':
        return <ConfigCurriculumX data={props} />;
      case 'course_rev_inst':
        return <ConfigInstructorReviews data={props} />;
      case 'buy_course':
        return <ConfigBuyCourse data={props} />;
      case 'buy_course_share':
        return <ConfigBuyCourseShare data={props} />;
      case 'buy_course_info':
        return <ConfigBuyCourseInfo data={props} />;
      case 'course_more_courses':
        return <ConfigMoreCourses data={props} />;
      case 'course_belive':
        return <ConfigBelive data={props} />;
      case 'course_footer':
        return <ConfigFooter data={props} />;
      case 'course_top_educators':
        return <ConfigTopEducators data={props} />;
      case 'course_top_educators_x':
        return <ConfigTopEducatorsX data={props} id={id} />;
      case 'course_buttons':
        return (
          <CourseButtons
            course={props.course}
            color={props.setColorCourseByPart}
          />
        );
      // case 'change_font':
      //   return <CourseButtons course={props.course} color={props.setTitleFont} />
      default:
        return 'Click any object on the page to change its settings';
    }
  };
  let choose = props.styles.section_config.name;
  return (
    <>
      <div className="config">
        <button
          onClick={() =>
            handleDelete(props.deleteCourseFromServer, props.course)
          }
        >
          Delete course
          <FaTrash
            data-toggle="tooltip"
            data-placement="top"
            title="Delete this course"
          />
        </button>
        <button onClick={() => addLesson()}>
          Add Lesson
          <FaPlus
            data-toggle="tooltip"
            data-placement="top"
            title="Add lesson"
          />
        </button>
        <button
          onClick={() => {
            choose === 'course'
              ? props.setSectionConfig({name: ''})
              : props.setSectionConfig({name: 'course'});
          }}
        >
          General settings
          {choose === 'course' ? <FaAngleDown /> : <FaAngleRight />}
        </button>
        <div className={choose === 'course' ? 'd-block' : 'd-none'}>
          <div>
            <div>
              Background color of all the buttons
              <input
                type="color"
                value={props.course.colors.button}
                onChange={(e) => props.setColorCourseByPart([e.target.value, 'button'])}
              />
            </div>
            <div>
              font color of all the buttons
              <input
                type="color"
                value={props.course.colors.button}
                onChange={(e) => props.setColorCourseByPart([e.target.value, 'fontButton'])}
              />
            </div>
          </div>
          <h5>Sections</h5>
          <div>
        Show more courses
        <label
          className="switch"
          data-toggle="tooltip"
          data-placement="top"
          title="Hide/show this section"
        >
          <input
            type="checkbox"
            onClick={(e) => props.showMoreCourses()}
            checked={props.course.show.more.more_courses}
          />
          <span className="slider round"></span>
        </label>
      </div>
      <div>
        Show a quote
        <label
          className="switch"
          data-toggle="tooltip"
          data-placement="top"
          title="Hide/show this section"
        >
          <input
            type="checkbox"
            onClick={(e) => props.showBelive()}
            checked={props.course.show.more.belive}
          />
          <span className="slider round"></span>
        </label>
      </div>
      <div>
        Show top educators
        <label
          className="switch"
          data-toggle="tooltip"
          data-placement="top"
          title="Hide/show this section"
        >
          <input
            type="checkbox"
            onClick={(e) => props.showTopEducarors()}
            checked={props.course.show.more.top_educators}
          />
          <span className="slider round"></span>
        </label>
      </div>
      <div>
        Show footer
        <label
          className="switch"
          data-toggle="tooltip"
          data-placement="top"
          title="Hide/show this section"
        >
          <input
            type="checkbox"
            onClick={(e) => props.showCourseFooter()}
            checked={props.course.show.more.footer}
          />
          <span className="slider round"></span>
        </label>
      </div>
          <ConfigBuyCourse data={props} />
        </div>
        <br />
        <br />
        <div className={choose === 'course' ? 'd-none' : 'd-block'}>
          {switchConfigComponent(
            props.styles.section_config.name,
            props.styles.section_config.id
          )}
        </div>
        <div id="bottom_configurtor">
          <Button variant="primary" onClick={handleSave}>
            Save course
          </Button>
        </div>
      </div>
    </>
  );
});

// export default CourseConfig;

/* Course Description
          {props.course.description['Course Description']}
          Certification
          {props.course.description['Certification']}
          Who this course is for
          {props.course.description['Course Description']} */
