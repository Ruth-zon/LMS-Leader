import {FaArrowLeft, FaArrowRight} from 'react-icons/all';
// import '../courseConfig/node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {
  Card,
  CardDeck,
  Dropdown,
  Carousel,
  Form,
  Row,
  Container,
  Col,
} from 'react-bootstrap';
import '../../ViewComponents/homepage/App.css';
import ListCourses from '../ListCourses';
import {connect} from 'react-redux';
import {actions} from '../../Store/actions';
import CourseCard from '../CourseCard';
import {Courses} from '../../Store/data';
const mapDispatchToProps = (dispatch) => ({
  setSchoolName: (name) => dispatch(actions.setSchoolName(name)),
  setSectionConfig: (name) => dispatch(actions.setSectionConfig(name)),
  setGetChoice: (name) => dispatch(actions.setGetChoice(name)),
  setWorldSelection: (name) => dispatch(actions.setWorldSelection(name)),
  // initialCourses: (name) => dispatch(actions.initialCourses(name)),
});

function mapStateToProps(state) {
  return {
    courses: state.listCoursesReducer.courses,
    school: state.schoolReducer.school,
  };
}

function CourseCards(props) {
  if (!props.courses || !props.courses.length)
    return 'Add courses to see them here';
  const algo = props.school.getChoice.algorithm;
  const courses_algo = props.courses.sort((a, b) => a[algo] - b[algo]);
  // props.initialCourses(courses_algo);
  let times =
    props.school.getChoice.items <= courses_algo.length
      ? props.school.getChoice.items
      : courses_algo.length;

  const listItems = [];
  for (let i = 0; i < times; i++) {
    let x = i;
    listItems.push(
      <>
        {/* // <Carousel.Item> */}
        {/* <CardDeck> */}
        <Col xs="12" md="6" xl="4">
          <CourseCard key={x} course={courses_algo[x]} />
        </Col>
        {/* <ListCourses i={i * 3} courses={courses_algo} /> */}
        {/* // </CardDeck> */}
        {/* </Carousel.Item>*/}
      </>
    );
  }
  return listItems;
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(function GetChoice(props) {
  // const breakPoints = [
  //   {width: 1, itemsToShow: 1},
  //   {width: 1000, itemsToShow: 3},
  // ];
  return (
    <section
      id="choice"
      style={{backgroundColor: props.school.colors.getChoice}}
      onClick={(e) => {
        if (e.target === e.currentTarget)
          props.setSectionConfig({name: 'getChoice'});
      }}
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
          <button
            style={{
              backgroundColor: props.school.colors.button,
              borderColor: props.school.colors.fontButton,
            }}
            onClick={(e) => {
              props.setSectionConfig({name: 'school_buttons'});
            }}
          >
            <p style={{color: props.school.colors.fontButton}}>View all</p>
          </button>
        </Form>
        <h3>
          <input
            value={props.school.getChoice.header}
            onChange={(e) => props.setGetChoice([e.target.value, 'header'])}
          />
        </h3>
      </div>
      <Container className="content">
        <Row>
          <CourseCards school={props.school} courses={props.courses} />
        </Row>
      </Container>
      {/* <CardDeck className="none"></CardDeck>
      <CardDeck>
        <ListCourses courses={props.courses} i={0} />
      </CardDeck>
      <CardDeck>
        <ListCourses courses={props.courses} i={3} />
      </CardDeck> */}
    </section>
  );
});

// export {WorldSelectionCourse, GetChoice};
