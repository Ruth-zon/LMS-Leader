import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import courseReducer from './Reducers/Course'
import schoolReducer from './Reducers/School'
import stylesReducer from './Reducers/Styles'
import lessonReducer from './Reducers/Lesson'
import userReducer from './Reducers/User'
import listCoursesReducer from './Reducers/listCourses'
import { student } from './MiddleWares/crud_student';
import { manager } from './MiddleWares/crud_manager';
import { actions } from './actions';
import { composeWithDevTools } from 'redux-devtools-extension';
import { getCookie } from '../login/wizard';

const reducer = combineReducers({  courseReducer, listCoursesReducer, schoolReducer, stylesReducer, lessonReducer, userReducer });

const store = createStore(reducer, composeWithDevTools(applyMiddleware(student, manager)));

var url = window.location;
var start = decodeURI(url.pathname.split('/')[1]);
if (start != "view" && start != "login" && start != "register" && start != "wizard")
    store.dispatch(actions.getAllForUser(start))
window.store = store;
export default store;
export { reducer };
