import { FaArrowLeft, FaArrowRight } from 'react-icons/all';
import React from 'react';
import { Card, CardDeck, Dropdown, Carousel, Form, Row, Container, Col } from 'react-bootstrap';
import '../../ViewComponents/homepage/App.css';
import ListCourses from '../ListCourses';
import { connect } from 'react-redux';
import { actions } from '../../Store/actions';
import CourseCard from '../CourseCard';
import { Courses } from '../../Store/data'


function mapStateToProps(state) {
  return {
    courses: state.listCoursesReducer.courses,
    school: state.schoolReducer.school,
  };
}


function CourseCards(props) {
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
    console.log(courses_algo)
    listItems.push(
      <>
        <Col xs="12" md="6" xl="4">
          <CourseCard key={i}  course={courses_algo[i]} />
        </Col>
      </>
    );
  }
  return listItems;
}

export default connect(
  mapStateToProps

)(function GetChoice(props) {
  return (
    <section
      id="choice"
      style={{ backgroundColor: props.school.colors.getChoice }}
    >
      <div className="title row ">

        <h3 className="h3-getChoice col-5">
          <p className="title-get-choice"> {props.school.getChoice.header}</p>
        </h3>
        <Form inline className="form-getChoice col-4">
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
      </div>
      <Container className="content">
        <Row>
          <CourseCards school={props.school} courses={props.courses} />
        </Row>
      </Container>
    </section>
  );
});

// export {WorldSelectionCourse, GetChoice};
