import produce from 'immer';
import { actions } from '../actions';
import { Course } from '../classes';
import { Courses } from '../data';
import store from '../Store';
import createReducer from './ReducerUtils';


const initialState = {
  courses: [

  ],

};

const mycourses = {
  initialCourses(state, action) {
    state.courses = action.payload;
  },
  addCourse(state, action) {
    state.courses = state.courses.concat(action.payload);
  },
  removeCourse(state, action) {
    state.courses = state.courses.filter((x) => x != action.payload);
  },
  updateCourse(state, action) {
    state.courses = state.courses.map(
      (element, i) => {
        if (element._id == action.payload._id)
          element = action.payload
      })
  }
};

export default produce(
  (state, action) => { createReducer(state, action, mycourses) },
  initialState
);
