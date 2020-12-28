import React from 'react';
import {connect} from 'react-redux';
import {actions} from './Store/actions';

function mapStateToProps(state) {
  return {
    course: state.courseReducer.course,
  };
}

const mapDispatchToProps = (dispatch) => ({
  setName: (firstName) => dispatch(actions.setName(firstName)),
});

// e 1
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(function Help(props) {
  // const { ,setFirstName,setLastName,setAge,setMobile} = props;

  return (
    <div>
      <label>name</label>
      <input
        value={props.course.name}
        onChange={(e) => props.setName(e.target.value)}
      ></input>
      <br></br>
    </div>
  );
});
