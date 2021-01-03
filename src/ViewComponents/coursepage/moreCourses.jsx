import {FaArrowLeft, FaArrowRight} from 'react-icons/all';
// import '../courseConfig/node_modules/bootstrap/dist/css/bootstrap.min.css';
// import CourseCard from '../homepage/Courses'
import ListCourses from '../ListCourses';
import React from 'react';
import {CardDeck, Form, Dropdown, Button} from 'react-bootstrap';
import '../homepage/App.css';
import Carousel from 'react-elastic-carousel';
import '../../ConfigComponents/HomePage/carousel.css';
import {connect} from 'react-redux';
import CourseCard from '../CourseCard';

function mapStateToProps(state) {
  return {
    course: state.courseReducer.course,
    courses: state.listCoursesReducer.courses,
  };
}

const mapDispatchToProps = (dispatch) => ({});

function CarouselItem(props) {
  if (!props.courses || !props.courses.length) return '';
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

  return (
    <section
      id="world"
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
              color: props.course.colors.fontButton,
            }}
          >
            View all
          </button>
        </Form>
        <h3>{course.more_courses.header}</h3>
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
          onClick={() => {
            carousel.slidePrev();
          }}
          className="carousel-left"
        >
          <FaArrowLeft />
        </Button>
        <Button
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
