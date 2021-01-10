import React, {Component} from 'react';
import Overview from './overview';
import Curriculum from './curriculum';
import Reviews from './reviews';
import Instructor from './instructor';
import '../../../ViewComponents/coursepage/course.css';
import {actions} from '../../../Store/actions';
import {connect} from 'react-redux';

const mapDispatchToProps = (dispatch) => ({
  setSectionConfig: (name) => dispatch(actions.setSectionConfig(name)),
});

function mapStateToProps(state) {
  return {
    course: state.courseReducer.course,
  };
}
class Description extends Component {
  constructor() {
    super();
    this.state = {
      choose: 1,
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
        <div
          className="hover-config"
          onClick={(e) => {
            if (e.target === e.currentTarget)
              this.props.setSectionConfig({name: 'course_rev_inst'});
          }}
        >
          <button
            className={this.state.choose === 1 ? 'btn-choose' : 'btn'}
            onClick={() => {
              this.chooseComponent('choose1');
              this.props.setSectionConfig({name: 'course_overview'});
            }}
          >
            Overview
          </button>
          <button
            className={this.state.choose === 2 ? 'btn-choose' : 'btn'}
            onClick={() => {
              this.chooseComponent('choose2');
              this.props.setSectionConfig({name: 'course_curriculum'});
            }}
          >
            Curriculum
          </button>
          {this.props.course.show.instructor && (
            <button
              className={this.state.choose === 3 ? 'btn-choose' : 'btn'}
              onClick={() => {
                this.chooseComponent('choose3');
                this.props.setSectionConfig({name: 'course_instructor'});
              }}
            >
              Instructor
            </button>
          )}
          {this.props.course.show.reviews && (
            <button
              className={this.state.choose === 4 ? 'btn-choose' : 'btn'}
              onClick={() => {
                this.chooseComponent('choose4');
                this.props.setSectionConfig({name: 'course_reviews'});
              }}
            >
              Reviews
            </button>
          )}
        </div>
        <br />
        {choose === 1 && <Overview />}
        {choose === 2 && <Curriculum />}
        {choose === 3 && this.props.course.show.instructor && <Instructor />}
        {choose === 4 && this.props.course.show.reviews && <Reviews />}
        <br />
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Description);
