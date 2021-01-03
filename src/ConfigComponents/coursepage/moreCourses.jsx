import {FaArrowLeft, FaArrowRight} from 'react-icons/all';
// import '../courseConfig/node_modules/bootstrap/dist/css/bootstrap.min.css';
// import CourseCard from '../homepage/Courses'
import ListCourses from '../ListCourses';
import React from 'react';
import {CardDeck, Form, Dropdown, Button} from 'react-bootstrap';
import '../../ViewComponents/homepage/App.css';
import {connect} from 'react-redux';
import {Courses} from '../../Store/data';
import {actions} from '../../Store/actions';
import Carousel from 'react-elastic-carousel';
import '../HomePage/carousel.css';
import CourseCard from '../CourseCard';
function mapStateToProps(state) {
  return {
    course: state.courseReducer.course,
    courses: state.listCoursesReducer.courses,
  };
}

const mapDispatchToProps = (dispatch) => ({
  setSectionConfig: (name) => dispatch(actions.setSectionConfig(name)),
  setMoreCourses: (name) => dispatch(actions.setMoreCourses(name)),
});

function CarouselItem(props) {
  if (!props.courses || !props.courses.length)
    return 'Add courses to see them here';
  const algo = props.course.more_courses.algorithm;
  const courses_algo = props.courses.filter(
    (course) => course[algo] == props.course[algo]
  );
  const listItems = [];
  let times =
    props.course.more_courses.items <= courses_algo.length
      ? props.course.more_courses.items
      : courses_algo.length;
  for (let i = 0; i < times; i++) {
    listItems.push(<CourseCard course={courses_algo[i]} />);
  }
  // debugger;
  return listItems;
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(function MoreCourses(props) {
  let {course, courses} = props;
  let carousel = null;
  const breakPoints = [
    {width: 1, itemsToShow: 1},
    {width: 1000, itemsToShow: 2},
    {width: 1500, itemsToShow: 3},
  ];
  // const prev = (
  //   <button onClick={carousel.slidePrev()} className="carousel-left">
  //     <FaArrowLeft />
  //   </button>
  // );
  // const next = (
  //   <button onClick={carousel.slideNext()} className="carousel-right">
  //     <FaArrowRight />
  //   </button>
  // );
  return (
    <section
      id="world"
      onClick={(e) => {
        if (e.target === e.currentTarget)
          props.setSectionConfig({name: 'course_more_courses'});
      }}
      className="hover-config"
      style={{backgroundColor: props.course.colors.more_courses}}
    >
      <div className="title">
        <Form inline>
          <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown-basic">
              Design
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <button
            style={{
              backgroundColor: props.course.colors.button,
              borderColor: props.course.colors.fontButton,
            }}
            onClick={(e) => {
              props.setSectionConfig({name: 'course_buttons'});
            }}
          >
            <p style={{color: props.course.colors.fontButton}}>View all</p>
          </button>
          {/* <Button
                variant="primary"
                block
                style={{ backgroundColor: props.course.colors.button, borderColor: props.course.colors.fontButton }}
                onClick={(e) => {
                  props.setSectionConfig({ name: 'course_buttons' });
                }}
              >
                <p style={{ color: props.course.colors.fontButton }}> Buy Now</p>
              </Button> */}
        </Form>
        <h3>
          <input
            value={course.more_courses.header}
            onChange={(e) =>
              props.setMoreCourses({key: 'header', value: e.target.value})
            }
          />
        </h3>
      </div>
      <Carousel
        itemPadding={[0, 10]}
        className="content"
        breakPoints={breakPoints}
        ref={(ref) => (carousel = ref)}
      >
        <CarouselItem courses={courses} course={course} />
      </Carousel>
      <div className="content mt--42">
        <Button
          variant="light"
          // disabled={
          //   !carousel.state.firstItem
          // }
          onClick={() => {
            carousel.slidePrev();
          }}
          className="carousel-left"
        >
          <FaArrowLeft />
        </Button>
        <Button
          // disabled={
          //   !carousel ||
          //   !props.course.top_educators.length -
          //     carousel.state.firstItem -
          //     carousel.state.pages.length
          // }
          variant="light"
          onClick={() => {
            if (
              props.course.more_courses.length -
                carousel.state.firstItem -
                carousel.state.pages.length >
              0
            )
              carousel.slideNext();
          }}
          className="carousel-right"
        >
          <FaArrowRight />
        </Button>
      </div>
    </section>
  );
});
// export default MoreCourses;
