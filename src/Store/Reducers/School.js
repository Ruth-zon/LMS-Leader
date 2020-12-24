import produce from 'immer';
import { Course } from '../classes';
import { Courses, ExCourse } from '../data';
import createReducer from './ReducerUtils';


const initialState = {
  school: {
    // _id: '5fbb9c2c068ea32d1852f9fb',
    _id: '0',
    uid: '0',
    name: "School's name",
    title: 'Learn new skills online with top educators',
    subtitle: 'Choose from over 100,000 online video courses with new additions published every month.',
    logo: './img_from_xd/Image 108@2x.png',
    image: './img_from_xd/Image 117.png',
    categories: [
      { name: "Design", icon: "./img_from_xd/Layer 2.svg", backcolor: "#EFEFF6" },
      { name: "Development", icon: "./img_from_xd/Layer 2-2.svg", backcolor: "#FEF3E8" },
      { name: "IT & Software", icon: "./img_from_xd/monitor.svg", backcolor: "#DDF7FF" },
      { name: "Bussiness", icon: "./img_from_xd/Layer 2-20.svg", backcolor: "#E6FAEA" },
      { name: "Marketing", icon: "./img_from_xd/Layer 2-21.svg", backcolor: "#EFEFF6" },
      { name: "Photpgraghy", icon: "./img_from_xd/Layer 2-3.svg", backcolor: "#DDF7FF" },
    ],
    CTA: {
      title: "It's time to start investing in yourself in learning",
      text: 'Match your goals to our programs, explore your options, and map out your path to success. I plan to use skillfy for a long time!.'
    },

    learning:
    {
      header: 'We will help you learn what you are passionates about',
      image: './img_from_xd/Image.png',
      info: [
        { id: '01.', header: 'Go at your own pace', text: 'Find what you are intersted to learn online and choose what exactly best for you that you really passionate to learn and get to study about it' },
        { id: '02.', header: 'Learn from industry experts', text: 'Find what you are intersted to learn online and choose what exactly best for you that you really passionate to learn and get to study about it' },
        { id: '03.', header: 'Find video courses on almost any topic', text: 'Find what you are intersted to learn online and choose what exactly best for you that you really passionate to learn and get to study about it' },
      ],
    },
    testimoinals:
      [
        { name: "Rebecca Moore", image: './img_from_xd/User.png', description: "Skillfy is a life saver. I don’t have the time money for a college education. My goal is to become a freelance web designer and thanks to Skillfy." },
        { name: "Samatha R. Oiler", image: './img_from_xd/User-1.png', description: "Skillfy is a life saver. I don’t have the time money for a college education. My goal is to become a freelance web designer and thanks to Skillfy." },
        { name: "Sarah D. Thomas", image: './img_from_xd/User-2.png', description: "Skillfy is a life saver. I don’t have the time money for a college education. My goal is to become a freelance web designer and thanks to Skillfy." },
      ],
    partners: [
      "./img_from_xd/Image 9.png",
      "./img_from_xd/Image 10.png",
      "./img_from_xd/Image 11.png",
      "./img_from_xd/Image 12.png",
      "./img_from_xd/Image 13.png",
      "./img_from_xd/Image 14.png",
    ],
    getChoice:{
      header:"Get choice of your course",
      algorithm:"views",
      items:6,
      color:"#0000"
    },
    worldSelection: {
      header: "The world’s largest selection of courses",
      algorithm: "stars",
      items: 6
    },
    choiceFavourite:{
      header: "Choice favourite course from top category",
      algorithm:"views"
    },
    show: {
      categories: true,
      CTA: true,
      learning: true,
      testimoinal: true,
      partners: true,
      footer: true,
      getChoice: true,//!!!!!!!
      worldSelection: true,//!!!!!!!\
      searchbar: true

    },
    colors: {
      header: '#33333D',
      title: '#FFFFFF',
      subtitle: '#FFFFFF',
      categories: '#FFFFFF',
      CTA: '#3B3B44',
      learning: '#FFFFFF',
      testimoinal: '#EFEFF6',
      partners: '#FFF',
      footer: '#282834',
      getChoice: '#EFEFF6',//!!!!!!!
      worldSelection: '#FEF0EF',//!!!!!!!
      searchbar: '#f56962',
      button: '#f56962',
      fontButton: '#fffff',
      choiceFavourite: "#00000029"

    },
    footer: [
      {
        name: "Company",
        array: ["About", "Careers", "Press", "Blog", "Affiliates"],
        links: ["", "", "", "", "", ""]
      },
      {
        name: "Community",
        array: ["Go Premium", "Team Plans", "Refer a Friend", "Gift Cards", "Scholarships", "Free Classes"],
        links: ["", "", "", "", "", ""]
      }
      ,
      {
        name: "Teaching",
        array: ["Became a", "Teacher", "Teaching", "Academy", "Teacher", "Handbook"],
        links: ["", "", "", "", "", ""]
      }
      ,
      {
        name: "Support",
        array: ["Support", "contact us", "System requirements", "Register", "key", "Site feedback"],
        links: ["", "", "", "", "", ""]
      }
    ],
    footerBottom: {
      text: "© 2015-2020 Skillfy Education Private Limited. All rights reserved",
      share: {
        instegram: '',
        facebook: '',
        whatsapp: '',
        twitter: '',
        linkedin: '',
        youtube: '',
        reddit: '',
        google: ''
      },
      show: {
        instegram: false,
        facebook: true,
        whatsapp: false,
        twitter: true,
        linkedin: true,
        youtube: false,
        reddit: false,
        google: true,
      },
      aboutStudent: '#FEF0EF'
    }
  }
};

const myschool = {
  initialSchool(state, action) {
    state.school = action.payload;
  },
  setSchoolProp(state, action) {
    state.school[action.payload.prop] = action.payload.data;
  },
  setSchoolName(state, action) {
    state.school.name = action.payload;
  },
  setSchoolSubtitle(state, action) {
    state.school.subtitle = action.payload;
  },
  setSchoolTitle(state, action) {
    state.school.title = action.payload;
  },
  setSchoolImage(state, action) {
    state.school.image = action.payload;
  },
  setSchoolLogo(state, action) {
    state.school.logo = action.payload;
  },
  setLearningHeader(state, action) {
    state.school.learning.header = action.payload;
  },
  setLearningImage(state, action) {
    state.school.learning.image = action.payload;
  },
  setLearning(state, action) {
    state.school.learning.info[action.payload[2]][action.payload[1]] = action.payload[0];
  },
  setCta(state, action) {
    state.school.CTA[action.payload[1]] = action.payload[0];
  },
  setCategories(state, action) {
    state.school.categories[action.payload[2]][action.payload[1]] = action.payload[0];
  },
  setCategoriesImage(state, action) {
    state.school.categories[action.payload[1]].icon = action.payload[0];
  },
  setPartners(state, action) {
    state.school.partners[action.payload[1]] = action.payload[0];
  },
  setTestimoinalImage(state, action) {
    state.school.testimoinals[action.payload[1]].image = action.payload[0];
  },
  setTestimoinal(state, action) {
    state.school.testimoinals[action.payload[2]][action.payload[1]] = action.payload[0];
  },
  setCTAText(state, action) {
    state.school.CTA.text = action.payload;
  },
  setCTATitle(state, action) {
    state.school.CTA.title = action.payload;
  },
  setFooterColName(state, action) {
    state.school.footer[action.payload.col].name = action.payload.text;
  },
  setFooterShare(state, action) {
    state.school.footerBottom[action.payload.sh][action.payload.name] = action.payload.text;
  },
  setFooterText(state, action) {
    state.school.footerBottom.text = action.payload;
  },
  setFooter(state, action) {
    state.school.footer[action.payload.col][action.payload.key][action.payload.id] = action.payload.value
  },
  setGetChoice(state, action) {
    state.school.getChoice[action.payload[1]] = action.payload[0];
  },
  setChoiceFavorite(state, action) {
    state.school.choiceFavourite[action.payload[1]] = action.payload[0];
  },
  setWorldSelection(state, action) {
    state.school.worldSelection[action.payload[1]] = action.payload[0];
  },

  // Showwwwww
  showSchoolByPart(state, action) {
    state.school.show[action.payload] = !state.school.show[action.payload];
  },
  setColorSchoolByPart(state, action) {
    state.school.colors[action.payload[1]] = action.payload[0];
  },
  addNewForSection(state, action) {
    state.school[action.payload[1]] = state.school[action.payload[1]].concat(action.payload[0]);
  },
  addNewForLearning(state, action) {
    state.school.learning.info = state.school.learning.info.concat(action.payload);
  },
  deleteFromSection(state, action) {
    state.school[action.payload[1]] = state.school[action.payload[1]].filter((element, ind) => ind !== action.payload[0]);
  },
  deleteFromLearning(state, action) {
    state.school.learning.info = state.school.learning.info.filter((element, ind) => ind !== action.payload[0]);
  },
  addNewForFooter(state, action) {
    state.school.footer[action.payload.col].array = state.school.footer[action.payload.col].array.concat(action.payload.array);
    state.school.footer[action.payload.col].links = state.school.footer[action.payload.col].links.concat(action.payload.links);

  },
  deleteFromFooter(state, action) {
    state.school.footer[action.payload.col].array = state.school.footer[action.payload.col].array.filter((element, ind) => ind !== action.payload.id);
    state.school.footer[action.payload.col].links = state.school.footer[action.payload.col].links.filter((element, ind) => ind !== action.payload.id);
  },
  // saveSchool(state, action) {
  //   state.school =action.payload;
  // },


};
export default produce(
  (state, action) => createReducer(state, action, myschool),
  initialState
);
