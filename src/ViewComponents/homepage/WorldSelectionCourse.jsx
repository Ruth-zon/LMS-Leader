import {FaArrowLeft, FaArrowRight} from 'react-icons/all';
// import '../courseConfig/node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {Card, CardDeck, Dropdown, Form} from 'react-bootstrap';
import '../../ViewComponents/homepage/App.css';
import ListCourses from '../ListCourses';
import {connect} from 'react-redux';
import {actions} from '../../Store/actions';
import Carousel from 'react-elastic-carousel';
import '../HomePage/carousel.css';
import CourseCard from '../CourseCard';

function mapStateToProps(state) {
  return {
    course: state.courseReducer.course,
    courses: state.listCoursesReducer.courses,
    school: state.schoolReducer.school,
  };
}

const mapDispatchToProps = (dispatch) => ({
  setSectionConfig: (name) => dispatch(actions.setSectionConfig(name)),
  setWorldSelection: (name) => dispatch(actions.setWorldSelection(name)),
});

function CourseCards(props) {
  if (!props.courses || props.courses.length) return "Add courses to see them here"
  const algo = props.school.worldSelection.algorithm;
  const courses_algo = props.courses.sort((a, b) =>
    a[algo] > b[algo] ? 1 : -1
  );
  const listItems = [];
  let times =
    props.school.worldSelection.items <= courses_algo.length
      ? props.school.worldSelection.items
      : courses_algo.length;
  for (let i = 0; i < times; i++) {
    listItems.push(
      <>
        {/* // <Carousel.Item> */}
        {/* <CardDeck> */}
        <CourseCard key={i} course={courses_algo[i]} />
        {/* <ListCourses i={i * 3} courses={courses_algo} /> */}
        {/* // </CardDeck> */}
        {/* </Carousel.Item>*/}
      </>
    );
  }
  return listItems;
}
function WorldSelectionCourse(props) {
  // const {course, setName, setSubtitle, setImage} = props;

  const prev = (
    <button className="carousel-left">
      <FaArrowLeft />
    </button>
  );
  const next = (
    <button className="carousel-right">
      <FaArrowRight />
    </button>
  );
  const breakPoints = [
    {width: 1, itemsToShow: 1},
    {width: 1000, itemsToShow: 3},
  ];
  let carousel = null;
  return (
    <section
      onClick={() => props.setSectionConfig({name: 'worldSelection'})}
      id="world"
      style={{backgroundColor: props.school.colors.worldSelection}}
      className="hover-config"
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
          <button>View all</button>
        </Form>
        <h3>
          <textarea
            value={props.school.worldSelection.header}
            onChange={(e) =>
              props.setWorldSelection([e.target.value, 'header'])
            }
          />
        </h3>
      </div>
      <Carousel
        className="content"
        breakPoints={breakPoints}
        ref={(ref) => (carousel = ref)}
      >
        <CourseCards school={props.school} courses={props.courses} />
        {/* <Carousel.Item>
          <CardDeck>
            <ListCourses courses={props.courses} i={0} />
          </CardDeck>
        </Carousel.Item>
        <Carousel.Item>
          <CardDeck>
            <ListCourses courses={props.courses} i={3} />
          </CardDeck>
        </Carousel.Item> */}
      </Carousel>
      {/* <Form inline className="carousel">
            <button className="carousel-left">
              <FaArrowLeft />
            </button>
            <span className="carousel-line"></span>
            <button className="carousel-right">
              <FaArrowRight />
            </button>
          </Form> */}
    </section>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WorldSelectionCourse);

// export {WorldSelectionCourse, GetChoice};
