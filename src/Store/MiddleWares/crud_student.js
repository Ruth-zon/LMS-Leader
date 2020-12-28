import { actions } from '../actions';
import { createBrowserHistory } from 'history';
import { matchPath } from 'react-router-dom';
import swal from 'sweetalert';
import { getCookie } from '../../login/wizard'
import history from '../../history'
import $ from 'jquery';
import store from '../Store';
import { handleDelete } from '../../ConfigComponents/handleImage';
import Lesson from '../Reducers/Lesson';

// const history = createBrowserHistory();

// const url="localhost:3000"
const url = "lms.leader.codes"
// const user=store.getState().userReducer.user;



// router.get("/students", studentsController.getStudents);

export const student = ({ dispatch, getState }) => next => action => {
    //courses
    let jwt = getCookie('jwt');
    // let jwt = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJ3ZGtwNUQyaFJPYzRYSmJCY3FkdzlDOUM3T3gyIiwiZW1haWwiOiJydXRoem9uQGxlYWRlci5jb2RlcyIsImlwIjoiMTk1LjYwLjIzNS4xNDEiLCJpYXQiOjE2MDU3ODA2MDh9.StX-QtG8q4z2JvJ4VFMZQn2PYkb0vqo00Vbmn0GNlFU';

    const user = getState().userReducer.user;

    // let uid = "wdkp5D2hROc4XJbBcqdw9C9C7Ox2"
    let uid = user.uid;

    // const url = "https://lobby.leader.codes/api";

    if (action.type === 'GET_COURSES_FROM_SERVER_GUESS') {
        $.ajax({
            url: 'https://lms.leader.codes/api/' + action.payload + '/coursesNoAuth',
            method: 'get',
            dataType: 'json',
            contentType: 'application/json',
            withCradentials: true,
            // data: JSON.stringify(dataToProfilePage),
            success: function (data) {
                let courses = []
                if (data && data.length) {
                    for (let course in data) {
                        courses.push(data[course])
                    }
                    dispatch(actions.initialCourses(courses))
                }
                var url = window.location;
                if (decodeURI(url.pathname.split('/')[1]) == "view") {
                    var course = decodeURI(url.pathname.split('/')[3]);
                    if (course) {
                        let cours = courses.find((c) => (c.name == course));
                        if (cours) {
                            dispatch(actions.initialCourse(cours));
                            dispatch(actions.initialEmptyLesson())
                        }
                    }
                }
            },
        });
    }

    if (action.type === 'GET_SCHOOL_FROM_SERVER_GUESS') {
        dispatch(actions.setProcess(true));
        $.ajax({
            url: 'https://lms.leader.codes/api/' + action.payload + '/schoolNoAuth',
            method: 'get',
            contentType: 'application/json',
            withCradentials: true,
            success: function (res) {
                if (res) {
                    dispatch(actions.initialSchool(res));
                    // if (getState().listCoursesReducer.courses.length == 0)
                    //     if (!user.uid || user.uid == 0)
                    //         dispatch(actions.getCoursesFromServerGuess(action.payload))
                    //     else
                    //         dispatch(actions.getCoursesFromServerStudent(res.uid))
                    dispatch(actions.setProcess(false));
                }
            },
            error: function (err) {
                console.log("error get all for user " + err.massage);
                dispatch(actions.setProcess(false));////////////////
            }
        });
    }
    if (action.type === 'GET_ALL_FOR_GUESS') {
        const sid=localStorage.getItem('sid');        
        dispatch(actions.setProcess(true));
        $.ajax({
            url: 'https://lms.leader.codes/api/' + action.payload + '/getStudentUser',
            method: 'get',
            contentType: 'application/json',
            withCradentials: true,
            success: function (res) {
                dispatch(actions.getSchoolFromServerGuess(action.payload));
                if (res) {
                    dispatch(actions.initialUser(res));
                    if (getState().listCoursesReducer.courses.length == 0)
                        if (!user.uid || user.uid == 0 || !sid)
                            dispatch(actions.getCoursesFromServerGuess(action.payload))
                        else
                            dispatch(actions.getCoursesFromServerStudent(res.uid))
                    dispatch(actions.setProcess(false));

                }
            },
            error: function (err) {
                console.log("error get all for user " + err.massage);
                dispatch(actions.setProcess(false));////////////////
            }

        });
    }
    return next(action);
}

