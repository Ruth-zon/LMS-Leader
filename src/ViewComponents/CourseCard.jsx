import {FaRegStar, FaRegEye, FaRegPlayCircle} from 'react-icons/all';
// import './courseConfig/node_modules/bootstrap/dist/css/bootstrap.min.css';
import React, {useContext} from 'react';
import {connect} from 'react-redux';
import {Card, Container, Row, Col} from 'react-bootstrap';
import './homepage/App.css';
import {actions} from '../Store/actions';
import {createHashHistory} from 'history';
import {createBrowserHistory} from 'history';
import {UserContext} from '../login/userProvider';
import history from '../history'
// const history = createHashHistory();
// const browserHistory = createBrowserHistory();

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(
export default function CourseCard(props) {
  // const user = useContext(UserContext);
  // const user={};
  var url = window.location;
  var school = url.pathname.split('/')[2];
  const navigate = () => {
    // browserHistory.replace('/courses/:'+JSON.stringify( data));
    // browserHistory.replace('/viewcourse/' + props.course.id);
    history.push(`/view/${school}/${props.course.name}`);
    // window.location.reload();
    console.log(props);
  };
  return (
    // <Link to="/courses">
    <Card
      className="course-card"
      // onClick={routeChange}
      // onClick={ window.location.href='/courses/:'+this}
      onClick={navigate}
      // onPress={() => navigation.navigate('Details')}
      // href="./coursepage/CoursePage.jsx"
    >
      {/* {user!==null && props.course.user_id === user.uid && (
        <Card.Text className="text-own">your own course</Card.Text>
      )} */}
      <Card.Img
        variant="top"
        className="card-img"
        src={process.env.PUBLIC_URL + props.course.image}
      />
      <Card.Header className="header">
        <Container>
          <Row>
            <Col xs="4" className="align-left">
              <FaRegStar color="#F3B23A" />
              {props.course.stars}
            </Col>
            <Col xs="4">
              <FaRegEye color="#DB4500" />
              {props.course.views}
            </Col>
            <Col xs="4" className="align-right">
              <FaRegPlayCircle color="#3E9365" />
              {props.course.lessons.length + ' '} Lessons
            </Col>
          </Row>
        </Container>
      </Card.Header>

      <Card.Body>
        <Card.Title className="align-left">
          {props.course.name}
          <br />
          <br />
        </Card.Title>
        <Container>
          <Row>
            <Col xs="2" className="align-left profile">
              <img src={props.course.teacher.img} alt="card"></img>
            </Col>
            <Col xs="4" className="align-left profile">
              {props.course.teacher.name}
            </Col>
            <Col xs="6" className="align-right price">
              <span>{props.course.prev_price} </span>
              {props.course.price}
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
    // </Link>
  );
}
// );
