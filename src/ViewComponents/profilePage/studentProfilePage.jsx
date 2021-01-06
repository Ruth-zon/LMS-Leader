// import React from 'react'
import React, {useState, useEffect} from 'react';
import '../homepage/App.css';
import {connect} from 'react-redux';
import {actions} from '../../Store/actions';
import {handleImage} from '../../ConfigComponents/handleImage';
import './studentProfile.css';
// import fontPicker from '../ConfigComponents/fontPicker'
import Navigation from '../coursepage/navbar';
import Belive from '../coursepage/belive';
import TopEducators from '../coursepage/topEducators';
import Footer from '../homepage/Footer';
import CourseCardWithProgress from './CourseCardWithProgress';
import { Col, Container, Row } from 'react-bootstrap';
import {Courses} from '../../Store/data';
import CourseCard from '../CourseCard';
import MoreCourseCard from './MoreCourseCard';
// import UseState from 'react-hook-use-state';

const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user,
    courses: state.listCoursesReducer.courses,
  };
};

const mapDispatchToProps = (dispatch) => ({
  setSstudentImage: (sub) => dispatch(actions.setSstudentImage(sub)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(function StudentProfilePage(props) {
  let list = props.courses;
  const [sorted, setSorted] = useState(null);

  useEffect(() => {
    console.log('storted', sorted);
  }, [sorted]);

  const sortArray = (type, sorted, setSorted) => {
    const types = {
      views: 'views',
      stars: 'stars',
      popular: 'popular',
    };
    const sortProperty = types[type];
    if (sortProperty != 'popular') {
      let sortedTemp = list.sort((a, b) => b[sortProperty] - a[sortProperty]);
      console.log(sortedTemp);
      let sortedListTemp = [];
      sortedTemp.forEach((element) => {
        sortedListTemp.push(element);
      });
      setSorted(sortedListTemp);
    }
  };

  return (
    <div>
      {/* <fontPicker/> */}
      <Navigation></Navigation>
      <Container>
        <Row
          className="align-items-center"
          style={{backgroundColor: props.user.colors.aboutStudent}}
        >
          <Col class="file-upload student-img offset-2 col-3 mt-5">
            <img variant="top" src={props.user.photoURL} />
            <input
              type="file"
              accept=".jpg, .jpeg, .png"
              onChange={(e) => handleImage(e, props.setSstudentImage)}
            />
          </Col>
          <Col className="col-6 about ml-5 pt-4">
            <h2 className="student-name ">{props.user.userName || props.user.username}</h2>
            <p className="a ml-2">{props.user.profession}</p>
            <button className=" ml-5 follow-btn">Follow</button>
            <p>{props.user.about}</p>
            {/* <ul>
              <li>
                <img src="../img_from_xd/Star.png"></img>
                4.6 Instructor Rating
              </li>
              <li>
                <img src="../img_from_xd/Layer 2.png"></img>
                1,258 Students
              </li>
              <li>
                <img src="../img_from_xd/Layer 2.png"></img>
                Course
              </li>
            </ul> */}
          </Col>
        </Row>
        <Row className="row mt-5">
          <h2 className="offset-1 mt-5 col-3">My courses({list.length}) </h2>
          <select
            onChange={(e) => sortArray(e.target.value, sorted, setSorted)}
            className="form-control offset-5 col-1 popular-btn mt-5"
          >
            Popular
            <option selected>stars</option>
            <option selected>views</option>
            <option selected>popular</option>
          </select>
        </Row>
        <Row className="course-list mt-5">
          <ul>
            {sorted
              ? sorted.map((item) => (
                  <li className="col-md-3 col-sm-12">
                    <CourseCardWithProgress
                      course={item}
                    ></CourseCardWithProgress>
                  </li>
                ))
              : list.map((item) => (
                  <li className="col-md-3 col-sm-12">
                    <CourseCardWithProgress
                      course={item}
                    ></CourseCardWithProgress>
                  </li>
                ))}
            <li className="col-md-3 col-sm-12">
              <MoreCourseCard />
            </li>
          </ul>
        </Row>
        <Belive></Belive>
        {/* <TopEducators></TopEducators> */}
        <Footer></Footer>
      </Container>
    </div>
  );
});
