// import 'semantic-ui-css/semantic.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import './ViewComponents/homepage/App.css';
import HomePage from './ViewComponents/homepage/HomePage';
// import {GetChoice, WorldSelectionCourse} from './Courses.jsx';
// import Navigation from '../navbar.jsx';
// import Header from './Header.jsx';
// import Categories from './Categories';
// import LearningPlatform from './LearningPlatform';
// import CTA from './CTA';
// import Testimoinal from './Testimoinal';
// import OurPartner from './OurPartner';
// import Footer from './Components/Footer';
// import {
//   Categories as ctgs,
//   Courses as crs,
//   // Students as tst,
//   Partners as prt,
//   Learnings as lrn,
// } from './data.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';
// import CoursePage from './ViewComponents/CoursePage';
// import LessonPage from './courseConfig/LessonPage';
import Login from './login/login';
import {createHashHistory} from 'history';
import {createBrowserHistory} from 'history';
import Register from './login/register';
import AddCoursePage from './ConfigComponents/AddCoursePage';
import RouteConfig from './ConfigComponents/RouteConfig';
import Help from './Help';
import CoursePage from './ViewComponents/coursepage/CoursePage';
import {signOut} from './login/firebase';
import Wizard from './login/wizard';
import history from './history.js';
import wizard from './login/wizard';
import studentProfilePage from './ViewComponents/profilePage/studentProfilePage';
import RouteView from './ViewComponents/RouteView';
import {connect} from 'react-redux';
import Spinner from './spinner/spinner';
import {actions} from './Store/actions';

function mapStateToProps(state) {
  return {
    styles: state.stylesReducer.styles,
  };
}
const mapDispatchToProps = (dispatch) => ({
  setProcess: (name) => dispatch(actions.setProcess(name)),
});
function App(props) {
  useEffect(() => {
  });
  return (
    <div className="App">
      
        <Router history={history}>
          <Switch>
            <Route path="/login" component={Login}>
              {/* <Login /> */}
            </Route>
            <Route path="/register" component={Register}>
              {/* <Register /> */}
            </Route>
            <Route path="/wizard" component={wizard}>
              {/* <Wizard /> */}
            </Route>
            <Route path="/view/:school" component={RouteView}>
              {/* <Wizard /> */}
            </Route>
            {/* <Route path="/course">
            <CoursePage />
          </Route> */}
            <Route path="/:name" component={RouteConfig}>
              {/* <RouteConfig /> */}
            </Route>

            <Route exact path="/">
              <Redirect to="/login" />
              {/* <HomePage /> */}
            </Route>
          </Switch>
        </Router>
      
      {/* <Login /> */}

      {/* <CoursePage /> */}
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

// export default App;
