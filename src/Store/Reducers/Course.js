import produce from 'immer';
import { Course } from '../classes';
import { Courses, ExCourse } from '../data';
import createReducer from './ReducerUtils';


const initialState = {
  course: {
    _id: '0',
    name: 'Enter the name of the course here',
    subtitle: 'Here is a short description of the course and the content that will be taught in it',
    image: './img_from_xd/Image 108@2x.png',
    category: "",
    preview: "",
    stars: 3,
    views: 0,
    weeks: 0,
    students: [
      {
        uid:'',stars:3
      },
      {
        uid:'',stars:3
      }
    ],
    teacher: {
      name: 'Name of the lecturer',
      img: './img_from_xd/Rectangle 22.png'
    },
    price: 0,
    prev_price: 0,
    prev_price_time: 11,
    prev_price_type: 'hours',
    date_created: '',
    // language: 'Course language',
    // use: 'Use on desktop, tablet & mobile',
    // access: 'Full lifetime access',
    // certificate: 'Certificate of Completion',
    course_info: [
      { name: "Course language", icon: "./img_from_xd/book.svg" },
      { name: 'Use on desktop, tablet & mobile', icon: "./img_from_xd/screen.svg" },
      { name: 'Full lifetime access', icon: "./img_from_xd/timer.svg" },
      { name: 'Certificate of Completion', icon: "./img_from_xd/other.svg" },
    ],
    share: {
      instegram: '',
      facebook: '',
      whatsapp: '',
      twitter: '',
      linkedin: '',
      youtube: '',
      reddit: '',
    },
    belive: {
      text: 'I believe in lifelong learning and Skillfy is a great place to learn from experts. I’ve learned a lot and recommend it to all my friends.',
      auther: 'Riaz Surti | Hearthy Foods',
      image: './img_from_xd/image 116.png',
    },
    description: [
      { header: "Course Description", text: "See-through delicate embroidered organza blue lining luxury acetate-mix stretch pleat detailing. Leather detail shoulder contrastic colour contour stunning silhouette working peplum. Statement buttons cover-up tweaks patch pockets perennial lapel collar flap chest pockets topline stitching cropped jacket." },
      { header: "Certification", text: "Effortless comfortable full leather lining eye-catching unique detail to the toe low ‘cut-away’ sides clean and sleek. Polished finish elegant court shoe work duty stretch slingback strap mid kitten heel this ladylike design slingback strap mid kitten heel this ladylike design." },
      { header: "Who this course is for", text: "Anyone interested in learning about business (only practical concepts that you can use and no boring theory + we won’t cover business topics that are common sense" },
    ],
    more_courses: {
      header: "More courses you might like",
      algorithm: "category",
      items: 6
    },
    show: {
      stars: true,
      views: true,
      prev_price: true,
      price: false,
      prev_price_time: true,
      // language: true,
      // use: true,
      // access: true,
      // certificate: true,
      students: true,
      weeks: true,
      lessons: true,
      more: {
        more_courses: true,
        belive: true,
        top_educators: true,
        footer: true,
      },
      share: {
        instegram: true,
        facebook: true,
        whatsapp: true,
        twitter: true,
        linkedin: true,
        youtube: true,
        reddit: true,
      },
      description: true,
      reviews: true,
      instructor: true,
      // "Course Description": true,
      // "Certification": true,
      // "Who this course is for": true,
    },
    colors: {
      header: '#FEF0EF',
      name: '#5F5982',
      subtitle: '#5F5982',
      buy_course: '#F56962',
      more_courses: '#EFEFF6',
      belive: '#FEF0EF',
      top_educators: '#EFEFF6',
      button: '#f56962',
      fontButton: '#fffff'

    },
    top_educators: [
      {
        bg: './img_from_xd/path 65.svg',
        image: './img_from_xd/image 61.png',
        header: 'Pass above Rs 250.',
        content: 'Avail 10% off on Testbook',
        color: '#DF4161',
        discount: '10',
      },
      {
        bg: './img_from_xd/path 65-1.svg',
        image: './img_from_xd/image 62.png',
        header: 'Productivity Course a',
        content: 'The Complete Personal',
        color: '#64929F',
        discount: '58',
      },
      {
        bg: './img_from_xd/path 65-1.svg',
        image: './img_from_xd/image 63.png',
        header: 'Up To 58% Off',
        content: 'Get 12-Month Subscription',
        color: '#B3A092',
        discount: '50',
      },
    ],
    // lessons:[1,2,3],
    lessons: [
      { _id: 1, name: "Everything You Need to Know Business", time: "10 weeks" },
      { _id: 2, name: "Everything You Need to Know Business", time: "10 weeks" },
      { _id: 3, name: "Everything You Need to Know Business", time: "10 weeks" },
    ]
  },
  titleFont:''

};

const mycourse = {
  // initialById(state, action) {
  //   debugger;
  //   console.log(action.payload);    
  //   if (action.payload == '0')
  //     state.course = ExCourse;
  //   else
  //     state.course=Courses[action.payload - 1]
  // },
  initialCourse(state, action) {
    state.course =  action.payload;
  },
  initialEmptyCourse(state) {
    state.course = initialState.course;
  },
  setName(state, action) {
    state.course.name = action.payload;
  },
  setSubtitle(state, action) {
    state.course.subtitle = action.payload;
  },
  setImage(state, action) {
    state.course.image = action.payload;
  },
  setStars(state, action) {
    state.course.stars = action.payload;
  },
  setViews(state, action) {
    state.course.views = action.payload;
  },
  setWeeks(state, action) {
    state.course.weeks = action.payload;
  },
  setLesson(state, action) {
    state.course.lesson = action.payload;
  },
  setAuther(state, action) {
    state.course.teacher.name = action.payload;
  },
  setAutherImage(state, action) {
    state.course.teacher.img = action.payload;
  },
  addTeacher(state, action) {
    state.course.teacher = action.payload;
  },
  setPrice(state, action) {
    state.course.price = action.payload;
  },
  setPrevPrice(state, action) {
    state.course.prev_price = action.payload;
  },
  setPrevPriceTime(state, action) {
    state.course.prev_price_time = action.payload;
  },
  setPrevPriceType(state, action) {
    state.course.prev_price_type = action.payload;
  },
  setDescription(state, action) {
    state.course.description[action.payload.id][action.payload.key] = action.payload.value;
  },
  setMoreCourses(state, action) {
    state.course.more_courses[action.payload.key] = action.payload.value;
  },
  addNewForOverview(state, action) {
    state.course.description = state.course.description.concat(action.payload)
  },
  deleteFromOverview(state, action) {
    state.course.description = state.course.description.filter((element, ind) => ind !== action.payload);
  },
  addNewForInfo(state, action) {
    state.course.course_info = state.course.course_info.concat(action.payload)
  },
  deleteFromInfo(state, action) {
    state.course.course_info = state.course.course_info.filter((element, ind) => ind !== action.payload);
  },
  addNewForTop(state, action) {
    state.course.top_educators = state.course.top_educators.concat(action.payload)
  },
  deleteFromTop(state, action) {
    state.course.top_educators = state.course.top_educators.filter((element, ind) => ind !== action.payload);
  },
  setCourseInfo(state, action) {
    state.course.course_info[action.payload.id][action.payload.key] = [action.payload.value];
  },
  // setLanguage(state, action) {
  //   state.course.language = action.payload;
  // },
  // setUse(state, action) {
  //   state.course.use = action.payload;
  // },
  // setAccess(state, action) {
  //   state.course.access = action.payload;
  // },
  // setCertificate(state, action) {
  //   state.course.certificate = action.payload;
  // },
  setInstegram(state, action) {
    state.course.share.instegram = action.payload;
  },
  setFacebook(state, action) {
    state.course.share.facebook = action.payload;
  },
  setWhatsapp(state, action) {
    state.course.share.whatsapp = action.payload;
  },
  setTwitter(state, action) {
    state.course.share.twitter = action.payload;
  },
  setLinkedin(state, action) {
    state.course.share.linkedin = action.payload;
  },
  setYoutube(state, action) {
    state.course.share.youtube = action.payload;
  },
  setReddit(state, action) {
    state.course.share.reddit = action.payload;
  },
  setBeliveText(state, action) {
    state.course.belive.text = action.payload;
  },
  setBeliveAuther(state, action) {
    state.course.belive.auther = action.payload;
  },
  setBeliveImage(state, action) {
    state.course.belive.image = action.payload;
  },

  setTopEducatorsProp(state, action) {
    //array: [value, prop, index]
    state.course.top_educators[action.payload[2]][action.payload[1]] = action.payload[0];
  },
  setTopEducatorsImage(state, action) {
    //array: [value, prop, index]
    state.course.top_educators[action.payload[1]].image = action.payload[0];
  },
  initialLessons(state, action) {
    state.course.lessons = action.payload;
  },
  addLesson(state, action) {
    state.course.lessons = state.course.lessons.concat(action.payload);
  },
  removeLesson(state, action) {
    state.course.lessons = state.course.lessons.filter((x, ind) => x._id != action.payload._id);
  },
  updateLesson(state, action) {
    state.course.lessons = state.course.lessons.map(
      (element, i) => {
        if (element._id == action.payload._id)
          element = action.payload
      })
  },

  setColorHeader(state, action) {
    state.course.colors.header = action.payload;
  },
  setColorName(state, action) {
    state.course.colors.name = action.payload;
  },
  setColorSubtitle(state, action) {
    state.course.colors.subtitle = action.payload;
  },
  setColorBelive(state, action) {
    state.course.colors.belive = action.payload;
  },
  setColorBuyCourse(state, action) {
    state.course.colors.buy_course = action.payload;
  },
  setColorMoreCourses(state, action) {
    state.course.colors.more_courses = action.payload;
  },
  setColorTopEducators(state, action) {
    state.course.colors.top_educators = action.payload;
  },
  setColorCourseByPart(state, action) {
    state.course.colors[action.payload[1]] = action.payload[0];
  },
  // Showwwwww
  showStars(state) {
    state.course.show.stars = !state.course.show.stars;
  },

  showViews(state) {
    state.course.show.views = !state.course.show.views;
  },
  showPrice(state) {
    state.course.show.price = !state.course.show.price;
  },
  showPrevPrice(state) {
    state.course.show.prev_price = !state.course.show.prev_price;
  },
  showPrevPriceTime(state) {
    state.course.show.prev_price_time = !state.course.show.prev_price_time;
  },
  showDescription(state) {
    state.course.show.description = !state.course.show.description;
  },
  showStudents(state) {
    state.course.show.students = !state.course.show.students;
  },
  showWeeks(state) {
    state.course.show.weeks = !state.course.show.weeks;
  },
  showLessons(state) {
    state.course.show.lessons = !state.course.show.lessons;
  },
  showReviews(state) {
    state.course.show.reviews = !state.course.show.reviews;
  },
  showInstructor(state) {
    state.course.show.instructor = !state.course.show.instructor;
  },

  showInstegram(state) {
    state.course.show.share.instegram = !state.course.show.share.instegram;
  },
  showFacebook(state) {
    state.course.show.share.facebook = !state.course.show.share.facebook;
  },
  showWhatsapp(state) {
    state.course.show.share.whatsapp = !state.course.show.share.whatsapp;
  },
  showTwitter(state) {
    state.course.show.share.twitter = !state.course.show.share.twitter;
  },
  showLinkedin(state) {
    state.course.show.share.linkedin = !state.course.show.share.linkedin;
  },
  showYoutube(state) {
    state.course.show.share.youtube = !state.course.show.share.youtube;
  },
  showReddit(state) {
    state.course.show.share.reddit = !state.course.show.share.reddit;
  },
  showMoreCourses(state) {
    state.course.show.more.more_courses = !state.course.show.more.more_courses;
  },
  showBelive(state) {
    state.course.show.more.belive = !state.course.show.more.belive;
  },
  showTopEducarors(state) {
    state.course.show.more.top_educators = !state.course.show.more.top_educators;
  },
  showCourseFooter(state) {
    state.course.show.more.footer = !state.course.show.more.footer;
  },

  setTitleFont(state, action) {
    state.course.titleFont = action.payload;
  },

  updateStars(state, action) {
    state.course.students.find(s=>s.uid== action.payload.uid).stars = action.payload.stars;
    // updateStarsForStudent(action.payload);
  },
};


export default produce(
  (state, action) => createReducer(state, action, mycourse),
  initialState
);
