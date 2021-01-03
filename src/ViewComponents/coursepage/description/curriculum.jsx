import React, {Component} from 'react';
import '../course.css';
import {Image, ListGroup, Button} from 'react-bootstrap';
import history from '../../../history';

class Curriculum extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
    };
  }
  navigate = (lesson) => {
    // browserHistory.replace('/courses/:'+JSON.stringify( data));

    history.push(history.location.pathname + '/' + lesson);
  };
  render() {
    let course = this.props.course;
    return course.lessons.map((value, idx) => (
      <ListGroup horizontal={'sm'} className="my-2 curriculum" key={idx}>
        <ListGroup.Item>
          <Image src="./img_from_xd/player (2).svg"></Image>
        </ListGroup.Item>
        <ListGroup.Item>
          {value.name}
          <div>
            {' '}
            <Image src="./img_from_xd/orange clock.svg"></Image>
            {value.time}
          </div>
        </ListGroup.Item>
        <ListGroup.Item>
          <Button
            className="btn btn-choose"
            onClick={(e) => this.navigate(value.name)}
          >
            Enter
          </Button>
        </ListGroup.Item>
      </ListGroup>
    ));
  }
}

export default Curriculum;
