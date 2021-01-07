import React, {Component} from 'react';
import '../../../ViewComponents/coursepage/course.css';
import {Image, ListGroup, Button} from 'react-bootstrap';
import {actions} from '../../../Store/actions';
import {connect} from 'react-redux';
import {createHashHistory} from 'history';
import {createBrowserHistory} from 'history';
import {useRouteMatch, useLocation} from 'react-router-dom';
import {FaTrash} from 'react-icons/fa';
import {handleDelete} from '../../handleImage';
import history from '../../../history';

// const history = history;
// const browserHistory = createBrowserHistory();

function mapStateToProps(state) {
  return {
    course: state.courseReducer.course,
  };
}

const mapDispatchToProps = (dispatch) => ({
  // setLessonsProp: (data) => dispatch(actions.setLessonsProp(data)),
  removeLesson: (i) => dispatch(actions.removeLesson(i)),
  setLessonProp: (i) => dispatch(actions.setLessonProp(i)),
  initialLesson: (i) => dispatch(actions.initialLesson(i)),
});
class Curriculum extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
    };
    // const location = useLocation()
    // console.log("name"+location.pathname)
    // const name = this.props.match.params.name;
  }
  navigate = (lesson, props) => {
    // browserHistory.replace('/courses/:'+JSON.stringify( data));
    let name = history.location.pathname.split('/')[1];
    history.push('/' + name + '/' + this.props.course.name + '/' + lesson);
    let lessn = props.course.lessons.find((l) => l.name == lesson);
    props.initialLesson(lessn);
    props.setLessonProp([props.course._id, "course_id"]);
    // window.location.reload();
    console.log(lesson);
  };
  render() {
    // console.log(this.props.lesson);
    let course = this.props.course;
    // let arr = ['sm', 'sm', 'sm'];
    return course.lessons.map((value, ind) => (
      <ListGroup horizontal={'sm'} className="my-2 curriculum pr-2" key={ind}>
        <ListGroup.Item>
          {/* <FaTrash
            className="trash-lesson"
            id={'lesson-trash-' + ind}
            onClick={(e) => this.props.removeLesson(ind)}
          /> */}
          <Image src="./img_from_xd/player (2).svg"></Image>
        </ListGroup.Item>
        <ListGroup.Item className="width-webkit">
          {value.name}
          {/* Everything You Need to Know Business */}
          <div>
            <Image src="./img_from_xd/orange clock.svg"></Image>
            Duration {value.time}
          </div>
        </ListGroup.Item>
        <ListGroup.Item>
          <Button
            className="btn btn-choose"
            onClick={(e) => this.navigate(value.name, this.props)}
          >
            Edit
          </Button>
        </ListGroup.Item>
      </ListGroup>
    ));
  }
}

// export default Curriculum;
export default connect(mapStateToProps, mapDispatchToProps)(Curriculum);
