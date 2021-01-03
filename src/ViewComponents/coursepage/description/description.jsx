import React, {Component} from 'react';
import {render} from 'react-dom';
import Overview from './overview';
import Curriculum from './curriculum';
import Reviews from './reviews';
import Instructor from './instructor';
import {Button} from 'react-bootstrap';
import '../course.css';

class Description extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      choose: 1,
      // course: this.props.data
    };
    this.chooseComponent = this.chooseComponent.bind(this);
  }

  chooseComponent(name) {
    switch (name) {
      case 'choose1':
        this.setState({
          choose: 1,
        });
        break;
      case 'choose2':
        this.setState({
          choose: 2,
        });
        break;
      case 'choose3':
        this.setState({
          choose: 3,
        });
        break;
      case 'choose4':
        this.setState({
          choose: 4,
        });
        break;
    }
  }

  render() {
    const {choose} = this.state;
    return (
      <div className="description content">
        <div>
          <button
            className={this.state.choose === 1 ? 'btn-choose' : 'btn'}
            onClick={() => this.chooseComponent('choose1')}
          >
            Overview
          </button>
          <button
            className={this.state.choose === 2 ? 'btn-choose' : 'btn'}
            onClick={() => this.chooseComponent('choose2')}
          >
            Curriculum
          </button>
          {this.props.course.show.instructor && (
            <button
              className={this.state.choose === 3 ? 'btn-choose' : 'btn'}
              onClick={() => this.chooseComponent('choose3')}
            >
              Instructor
            </button>
          )}
          {this.props.course.show.reviews && (
            <button
              className={this.state.choose === 4 ? 'btn-choose' : 'btn'}
              onClick={() => this.chooseComponent('choose4')}
            >
              Reviews
            </button>
          )}
        </div>
        <br />
        {choose === 1 && <Overview/>}
        {choose === 2 && <Curriculum />}
        {choose === 3 &&  this.props.course.show.instructor&&<Instructor />}
        {choose === 4 &&  this.props.course.show.reviews &&<Reviews />}

        <br />
      </div>
    );
  }
}

export default Description;
