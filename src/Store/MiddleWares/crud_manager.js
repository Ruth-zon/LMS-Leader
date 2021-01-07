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
const url="lms.leader.codes"
// const user=store.getState().userReducer.user;



// router.get("/students", studentsController.getStudents);

export const manager = ({ dispatch, getState }) => next => action => {
    //courses
    // let jwt = getCookie('jwt');
    let jwt = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJ3ZGtwNUQyaFJPYzRYSmJCY3FkdzlDOUM3T3gyIiwiZW1haWwiOiJydXRoem9uQGxlYWRlci5jb2RlcyIsImlwIjoiMTk1LjYwLjIzNS4xNDEiLCJpYXQiOjE2MDU3ODA2MDh9.StX-QtG8q4z2JvJ4VFMZQn2PYkb0vqo00Vbmn0GNlFU';

    const user = getState().userReducer.user;

    let uid = "wdkp5D2hROc4XJbBcqdw9C9C7Ox2"
    // let uid = user.uid;

    // const url = "https://lobby.leader.codes/api";
    if (action.type === 'GET_COURSES_FROM_SERVER') {
        if (action.payload)
            uid = action.payload
        $.ajax({
            url: 'https://lms.leader.codes/api/' + uid + '/courses',
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
                let courses = []
                if (data && data.length) {
                    for (let course in data) {

                        courses.push(data[course])
                    }
                    dispatch(actions.initialCourses(courses))
                }
                var url = window.location;
                if (decodeURI(url.pathname.split('/')[1]) != "view") {
                    var course = decodeURI(url.pathname.split('/')[2]);
                    var lesson = decodeURI(url.pathname.split('/')[3]);
                    if (course && course != "addcourse" && course != "addCourse#") {
                        let cours = courses.find((c) => (c.name == course));
                        if (cours) {
                            dispatch(actions.initialCourse(cours));
                            dispatch(actions.setLessonProp([cours._id, "course_id"]))
                            if (lesson && lesson != "addlesson" && lesson != "addLesson#") {
                                let lessn = cours.lessons.find((l) => (l.name == lesson));
                                if (lessn) {
                                    dispatch(actions.initialLesson(lessn))
                                    dispatch(actions.setLessonProp([cours._id, "course_id"]))
                                }
                            }
                        }
                    }
                }
                else {
                    var course = decodeURI(url.pathname.split('/')[3]);
                    var lesson = decodeURI(url.pathname.split('/')[4]);
                    if (course) {
                        let cours = courses.find((c) => (c.name == course));
                        if (cours) {
                            dispatch(actions.initialCourse(cours));
                            if (Lesson) {
                                let lessn = cours.lessons.find((l) => (l.name == lesson));
                                if (lessn) {
                                    dispatch(actions.initialLesson(lessn))
                                    dispatch(actions.setLessonProp([cours._id, "course_id"]))
                                }
                            }
                        }
                    }
                }
            },
        });
    }

    if (action.type === 'ADD_COURSE_TO_SERVER') {
        let course = Object.assign({}, action.payload);
        delete course["lessons"];
        // delete course["teacher"];

        if (course._id == 0 || !course._id) {
            let school = store.getState().schoolReducer.school;
            if (school._id == 0 || !school._id)
                dispatch(actions.addSchoolToServer(school))
            delete course._id;
            course.date_created = new Date().toLocaleString();
            $.ajax({
                url: 'https://lms.leader.codes/api/' + uid + '/addCourse',
                headers: {
                    Authorization: jwt,
                },
                data: JSON.stringify(course),
                method: 'post',
                dataType: 'json',
                contentType: 'application/json',
                withCradentials: true,
                // data: JSON.stringify(dataToProfilePage),
                success: function (data) {
                    dispatch(actions.initialCourse(data.data));
                    dispatch(actions.addTeacher(data.teacher))
                    dispatch(actions.addCourse(data.data));
                    // history.replace('/' + matchPath.params.name);
                    // window.location.reload();
                    console.log("course " + data.data._id);
                    swal("Yes,", "Course added successfully", "success");
                    history.push('/' + user.userName + '/' + data.data.name);
                    // window.location.reload();
                    // window.location.href = url +'/'+ user.userName;

                },
                error: function () {
                    swal("Oops...", "Something went wrong, please try again later", "error");
                },
            });
        }
        else {
            $.ajax({
                url: 'https://lms.leader.codes/api/' + uid + '/' + course._id + '/updateCourse',
                headers: {
                    Authorization: jwt,
                },
                data: JSON.stringify(course),
                method: 'post',
                dataType: 'json',
                contentType: 'application/json',
                withCradentials: true,
                // data: JSON.stringify(dataToProfilePage),
                success: function (data) {

                    dispatch(actions.initialCourse(data.data))
                    console.log("course " + data.data._id);
                    swal("Course saved successfully", "", "success");
                    history.push('/' + user.userName);
                    // history.replace('/' + user.userName);
                    // window.location.reload();
                    // window.location.href = url + user.userName;

                },
                error: function () {
                    swal("Oops...", "Something went wrong, please try again later", "error");
                },
            });
        }
    }
    if (action.type === 'DELETE_COURSE_FROM_SERVER') {
        $.ajax({
            url: 'https://lms.leader.codes/api/' + uid + '/' + action.payload._id + '/deleteCourse',
            headers: {
                Authorization: jwt,
            },
            // data: action.payload,
            method: 'get',
            // dataType: 'json',
            contentType: 'application/json',
            withCradentials: true,
            // data: JSON.stringify(dataToProfilePage),
            success: function (data) {
                //   history.replace('/' + match.params.name);
                // window.location.reload();
                dispatch(actions.removeCourse(data.data));
                history.push('/' + user.userName);
            },
        });
    }
    //lessons
    if (action.type === 'GET_LESSONS_FROM_SERVER') {
        $.ajax({
            url: 'https://lms.leader.codes/api/' + uid + '/' + action.payload.course_id + '/lessons',
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
                dispatch(actions.initialLessons(data.data))
            },
        });
    }
    if (action.type === 'ADD_LESSON_TO_SERVER') {
        let lesson = Object.assign({}, action.payload);
        let cours = getState().courseReducer.course;
        let course_id = lesson.course_id != 0 ? lesson.course_id : cours._id;
        if (lesson._id == 0) {
            delete lesson._id;
            $.ajax({
                url: 'https://lms.leader.codes/api/' + uid + '/' + course_id + '/addLesson',
                headers: {
                    Authorization: jwt,
                },
                data: JSON.stringify(lesson),
                method: 'post',
                dataType: 'json',
                contentType: 'application/json',
                withCradentials: true,
                // data: JSON.stringify(dataToProfilePage),
                success: function (data) {
                    // history.replace('/' + matchPath.params.name);
                    // window.location.reload();
                    dispatch(actions.addLesson(data.data))
                    console.log("lesson " + data.data._id);
                    swal("Lesson added successfully", "", "success");
                    history.push('/' + user.userName + '/' + cours.name);
                    // window.location.reload();
                    // window.location.href = url + user.userName+'/' +data.course_id;

                },
                error: function () {
                    swal("Oops...", "Something went wrong, please try again later", "error");
                },
            });
        }
        else {
            $.ajax({
                url: 'https://lms.leader.codes/api/' + uid + '/' + action.payload._id + '/updateLesson',
                headers: {
                    Authorization: jwt,
                },
                data: JSON.stringify(lesson),
                method: 'post',
                dataType: 'json',
                contentType: 'application/json',
                withCradentials: true,
                // data: JSON.stringify(dataToProfilePage),
                success: function (data) {
                    // history.replace('/' + matchPath.params.name);
                    // window.location.reload();
                    dispatch(actions.initialLesson(data.data));
                    dispatch(actions.updateLesson(data.data));
                    console.log("lesson " + data.data._id);
                    swal("Lesson saved successfully", "", "success");
                    history.push('/' + user.userName + '/' + cours.name);
                    // window.location.reload();
                    // window.location.href = url + user.userName+'/' +data.course_id;
                },
                error: function () {
                    swal("Oops...", "Something went wrong, please try again later", "error");
                },
            });
        }
    }
    if (action.type === 'DELETE_LESSON_FROM_SERVER') {
        let cours = getState().courseReducer.course;
        $.ajax({
            url: 'https://lms.leader.codes/api/' + uid + '/' + action.payload._id + '/deleteLesson',
            headers: {
                Authorization: jwt,
            },
            data: action.payload,
            method: 'get',
            dataType: 'json',
            contentType: 'application/json',
            withCradentials: true,
            // data: JSON.stringify(dataToProfilePage),
            success: function () {
                //   history.replace('/' + match.params.name);
                // window.location.reload();
                dispatch(actions.removeLesson(action.payload))
                history.push('/' + user.userName + '/' + cours.name);
            },
            error: function () {
                swal("Oops...", "Something went wrong, please try again later", "error");
            },
        });
    }
    //school
    if (action.type === 'ADD_SCHOOL_TO_SERVER') {
        let school = Object.assign({}, action.payload);
        if (school._id == 0 || !school._id) {
            delete school._id;
            $.ajax({
                url: 'https://lms.leader.codes/api/' + uid + '/addSchool',
                headers: {
                    Authorization: jwt,
                },
                data: JSON.stringify(school),
                method: 'post',
                dataType: 'json',
                contentType: 'application/json',
                withCradentials: true,
                success: function (data) {
                    // history.replace('/' + match.params.name);
                    // window.location.reload();
                    dispatch(actions.initialSchool(data.data));
                    console.log("school " + data.data._id);
                    swal("School saved successfully", "the link to your school: https://"+url+"/view/"+data.data._id, "success");
                },
                error: function () {
                    swal("Oops...", "Something went wrong, please try again later", "error");
                },
            });
        }
        else {

            $.ajax({
                url: 'https://lms.leader.codes/api/' + uid + '/' + school._id + '/updateSchool',
                headers: {
                    Authorization: jwt,
                },
                data: JSON.stringify(school),
                method: 'post',
                dataType: 'json',
                contentType: 'application/json',
                withCradentials: true,
                success: function (data) {
                    //   history.replace('/' + match.params.name);
                    // window.location.reload();
                    dispatch(actions.initialSchool(data.data));
                    console.log("school " + data.data._id);
                    swal("School saved successfully", "", "success");
                },
                error: function () {
                    swal("Oops...", "Something went wrong, please try again later", "error");
                },
            });
        }
    }
    if (action.type === 'GET_SCHOOL_FROM_SERVER') {
        if (action.payload)
            uid = action.payload
        $.ajax({
            url: 'https://lms.leader.codes/api/' + uid + '/school',
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
                // history.replace('/' + matchPath.params.name);
                // window.location.reload();
                if (data)
                    dispatch(actions.initialSchool(data));

            },

        });
    }
    //user
    if (action.type === 'GET_ALL_FOR_USER') {
        var userName = action.payload;
        dispatch(actions.setProcess(true));
        $.ajax({
            url: 'https://lms.leader.codes/api/' + action.payload + '/getUid',
            headers: {
                Authorization: jwt,
            },
            method: 'get',
            contentType: 'application/json',
            withCradentials: true,
            success: function (res) {
                if (res.data && res.data.uid) {
                    let user = res.data;
                    dispatch(actions.setUserProps({ "uid": user.uid, "email": user.email, "photoURL": user.photoURL, "userName": user.username }))
                    if (getState().listCoursesReducer.courses.length == 0)
                        dispatch(actions.getCoursesFromServer(user.uid))
                    if (getState().schoolReducer.school._id == 0)
                        dispatch(actions.getSchoolFromServer(user.uid))
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

