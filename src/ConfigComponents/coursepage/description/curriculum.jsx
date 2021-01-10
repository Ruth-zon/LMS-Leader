import React, {Component} from 'react';
import '../../../ViewComponents/coursepage/course.css';
import {Image, ListGroup, Button} from 'react-bootstrap';
import {actions} from '../../../Store/actions';
import {connect} from 'react-redux';
import history from '../../../history';

function mapStateToProps(state) {
  return {
    course: state.courseReducer.course,
  };
}

const mapDispatchToProps = (dispatch) => ({
  removeLesson: (i) => dispatch(actions.removeLesson(i)),
  setLessonProp: (i) => dispatch(actions.setLessonProp(i)),
  initialLesson: (i) => dispatch(actions.initialLesson(i)),
});
class Curriculum extends Component {
  navigate = (lesson, props) => {
    let name = history.location.pathname.split('/')[1];
    history.push('/' + name + '/' + this.props.course.name + '/' + lesson);
    let lessn = props.course.lessons.find((l) => l.name == lesson);
    props.initialLesson(lessn);
    props.setLessonProp([props.course._id, "course_id"]);
  };
  render() {
    let course = this.props.course;
    return course.lessons.map((value, ind) => (
      <ListGroup horizontal={'sm'} className="my-2 curriculum pr-2" key={ind}>
        <ListGroup.Item>
          <Image src="./img_from_xd/player (2).svg"></Image>
        </ListGroup.Item>
        <ListGroup.Item className="width-webkit">
          {value.name}
          <div>
            <Image src="./img_from_xd/orange clock.svg"></Image>
            Duration {value.time}
          </div>
        </ListGroup.Item>
        <ListGroup.Item>
          <Button
            className="btn btn-choose"
            onClick={() => this.navigate(value.name, this.props)}
          >
            Edit
          </Button>
        </ListGroup.Item>
      </ListGroup>
    ));
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Curriculum);
