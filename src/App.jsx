import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React, {useEffect, useState} from 'react';
import './ViewComponents/homepage/App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Login from './login/login';
import Register from './login/register';
import RouteConfig from './ConfigComponents/RouteConfig';
import history from './history.js';
import wizard from './login/wizard';
import studentProfilePage from './ViewComponents/profilePage/studentProfilePage';
import RouteView from './ViewComponents/RouteView';
import {connect} from 'react-redux';
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
  useEffect(() => {});
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route path="/login" component={Login}></Route>
          <Route path="/register" component={Register}></Route>
          <Route path="/wizard" component={wizard}></Route>
          <Route path="/view/profile" component={studentProfilePage}></Route>
          <Route path="/view/:school" component={RouteView}></Route>
          <Route path="/:name" component={RouteConfig}></Route>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);