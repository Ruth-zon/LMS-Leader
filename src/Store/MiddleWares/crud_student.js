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
    // let jwt = getCookie('jwt');
    let jwt = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJ3ZGtwNUQyaFJPYzRYSmJCY3FkdzlDOUM3T3gyIiwiZW1haWwiOiJydXRoem9uQGxlYWRlci5jb2RlcyIsImlwIjoiMTk1LjYwLjIzNS4xNDEiLCJpYXQiOjE2MDU3ODA2MDh9.StX-QtG8q4z2JvJ4VFMZQn2PYkb0vqo00Vbmn0GNlFU';

    const user = getState().userReducer.user;

    let uid = "wdkp5D2hROc4XJbBcqdw9C9C7Ox2"
    // let uid = user.uid;
    let school = localStorage.getItem('school');

    let sid = localStorage.getItem('sid');

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
                            if (cours.students.find(s => s.uid == sid))
                                dispatch(actions.getLessonsForStudent(cours._id));
                            // dispatch(actions.initialEmptyLesson())

                        }
                    }
                }
            },
        });
    }
    if (action.type === 'GET_LESSONS_FOR_STUDENT') {
        $.ajax({
            url: 'https://lms.leader.codes/api/' + sid + '/' + action.payload + '/lessons',
            headers: {
                Authorization: jwt,
            },
            // data: JSON.stringify(action.payload),
            method: 'get',
            dataType: 'json',
            contentType: 'application/json',
            withCradentials: true,
            // data: JSON.stringify(dataToProfilePage),
            success: function (data) {
                dispatch(actions.initialLessons(data))
                var url = window.location;
                var lesson = decodeURI(url.pathname.split('/')[4]);
                if (lesson && lesson != "addlesson" && lesson != "addLesson#") {
                    let lessn = data.find((l) => (l.name == lesson));
                    if (lessn) {
                        dispatch(actions.initialLesson(lessn))
                        dispatch(actions.setLessonProp([action.payload, "course_id"]))
                    }
                }
            },
        });
    }
    if (action.type === 'UPDATE_VIEWS_FOR_STUDENT') {
        // uid/:courseId/:lessonId/finishedLesson
        $.ajax({
            url: 'https://lms.leader.codes/api/' + sid + '/' + action.payload.course + '/' + action.payload.lesson + '/finishedLesson',
            headers: {
                Authorization: jwt,
            },
            // data: JSON.stringify(action.payload),
            method: 'get',
            dataType: 'json',
            contentType: 'application/json',
            withCradentials: true,
            // data: JSON.stringify(dataToProfilePage),
            success: function (data) {
                // dispatch(actions.initialLessons(data.data))
            },
        });
    }
    if (action.type === 'UPDATE_STARS_FOR_STUDENT') {
        $.ajax({
            url: 'https://lms.leader.codes/api/' + sid + '/' + action.payload.course + '/' + action.payload.stars + '/updateStars',
            headers: {
                Authorization: jwt,
            },
            // data: JSON.stringify(action.payload),
            method: 'get',
            dataType: 'json',
            contentType: 'application/json',
            withCradentials: true,
            // data: JSON.stringify(dataToProfilePage),
            success: function (data) {
                dispatch(actions.setStars(data.data))
            },
        });
    }

    if (action.type === 'ADD_STUDENT_TO_SCHOOL') {
        dispatch(actions.setProcess(true));
        $.ajax({
            url: 'https://lms.leader.codes/api/' + action.payload.uid + '/' + action.payload.school + '/enrollToSchool',
            method: 'get',
            contentType: 'application/json',
            withCradentials: true,
            headers: {
                Authorization: jwt,
            },
            success: function (res) {
                // if (res.status=="sucssess")
                swal("Yes,", "You have successfully registered for school", "success");
                history.push('/view/' + school);

            },
            error: function (err) {
                swal("Oops...", "Something went wrong, please try again later", "error");

            }
        });
    }
    if (action.type === 'ADD_STUDENT_TO_COURSE') {
        dispatch(actions.setProcess(true));
        $.ajax({
            url: 'https://lms.leader.codes/api/' + sid + '/' + school + '/' + action.payload.course + '/enrollToCourse',
            method: 'get',
            contentType: 'application/json',
            withCradentials: true,
            headers: {
                Authorization: jwt,
            },
            success: function (res) {
                // if (res.status=="sucssess")
                swal("Yes,", "You have successfully registered for this course", "success");
                history.push('/view/' + school + '/' + action.payload.course);
            },
            error: function (err) {
                swal("Oops...", "Something went wrong, please try again later", "error");
            }
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
        dispatch(actions.setProcess(true));
        const sid = localStorage.getItem('sid');
        dispatch(actions.getSchoolFromServerGuess(action.payload));
        if (sid && (user.uid == 0 || !user.uid)) {
            dispatch(actions.setProcess(true));
            $.ajax({
                url: 'https://lms.leader.codes/api/' + sid + '/getStudentUser',
                method: 'get',
                contentType: 'application/json',
                withCradentials: true,
                headers: {
                    Authorization: jwt,
                },
                success: function (res) {
                    if (res) {
                        dispatch(actions.initialUser(res));
                        if (!user.uid || user.uid == 0)
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
        else {
            dispatch(actions.getCoursesFromServerGuess(action.payload))
        }
    }
    return next(action);
}

