import produce from 'immer';
import createReducer from './ReducerUtils';
import { Courses } from '../data';


const initialState = {
    user: {
        uid: '0',
        userName: '',
        email: '',
        photoURL: './img_from_xd/User.png',
        isPro: false,
        school: '',
        schoolsEnrolled: [{
            schoolId: "",
            coursesEnrolled: [{
                courseId: "",
                stars: 2,
                finishedLessons: ["", ""]
            }]
        }],
        profession: ' illustrator & Artist',
        about: 'Hi, my name is Amelie. I am a photo artist and art director from Munich. Last year I was chosen to be one of the nine Adobe Creative Residents in 2019/2020.My pictures are widely known for their colorful, surrealistic touch. by books, lyrics and words in total, I am able to abstract and visualize them into new artworks.',
        colors: {
            aboutStudent: '#FEF0EF',
            recomandCourses: '#EFEFF6'
        },
    }
};

const myuser = {
    setUserProps(state, action) {
        for (let i in action.payload) {
            state.user[i] = action.payload[i];
        }
    },
    initialUser(state, action) {
        state.user = action.payload;
    },
    updateViews(state, action) {
        let school = localStorage.getItem('school')
        // if (state.user.schoolsEnrolled.find(s => s._id == action.payload.school).coursesEnrolled.find(s => s._id == action.payload.course).finishedLessons[action.payload.lesson])
        state.user.schoolsEnrolled.find(s => s._id == school).coursesEnrolled.find(s => s._id == action.payload.course).finishedLessons.concat(action.payload.lesson)

    }
};

export default produce(
    (state, action) => createReducer(state, action, myuser),
    initialState
);
