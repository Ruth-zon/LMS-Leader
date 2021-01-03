import React, {Component} from 'react';
import '../course.css';
import {connect} from 'react-redux';

function mapStateToProps(state) {
  return {
    course: state.courseReducer.course,
  };
}
class Overview extends Component {
  constructor() {
    super();
    this.state = {
      // course: this.props.data,
    };
  }

  render() {
    let data = this.props.course.description;
    // console.log(this.props.data.description);
    // console.log(JSON.parse(this.props.data.description));
    console.log(data);
    return (
      <>
        <div className="overview">
          {data.map((value, key) => {
            return (
              <>
                <h5>{value.header}</h5>
                <h6>{value.text}</h6>
              </>
            );
          })}
        </div>
      </>
    );
  }
}

export default  connect(mapStateToProps, null)(Overview);
