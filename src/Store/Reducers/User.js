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
        mySchool: '',
        profession:' illustrator & Artist',
        about: 'Hi, my name is Amelie. I am a photo artist and art director from Munich. Last year I was chosen to be one of the nine Adobe Creative Residents in 2019/2020.My pictures are widely known for their colorful, surrealistic touch. by books, lyrics and words in total, I am able to abstract and visualize them into new artworks.',
        schoolList: [{
            schoolId:'',
            coursesEnrolled:['','']
        }],
        colors: {
            aboutStudent: '#FEF0EF',
            recomandCourses:'#EFEFF6'
        },
        lesson:Courses.lessons,
    
    }
};

const myuser = {
    setUserProps(state, action){
        for (let i in action.payload)
        {
            state.user[i]=action.payload[i];
        }
    },
    initialUser(state, action) {
        state.lesson = action.payload;
    },
};

export default produce(
    (state, action) => createReducer(state, action, myuser),
    initialState
);
