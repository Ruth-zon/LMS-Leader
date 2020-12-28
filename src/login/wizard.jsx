import React, {Component, useEffect} from 'react';
import '../ViewComponents/homepage/App.css';
import {connect} from 'react-redux';
import history from '../history';
import swal from 'sweetalert';
import $ from 'jquery';
import {actions} from '../Store/actions';
// const history = createBrowserHistory();

// import $ from jquery

export const getCookie = (c_name) => {
  if (document.cookie.length > 0) {
    let c_start = document.cookie.indexOf(c_name + '=');
    if (c_start != -1) {
      c_start = c_start + c_name.length + 1;
      let c_end = document.cookie.indexOf(';', c_start);
      if (c_end == -1) {
        c_end = document.cookie.length;
      }
      return unescape(document.cookie.substring(c_start, c_end));
    }
  }
  return '';
};

const usernameCheck = (setUserProps, getAllForUser, uid) => {
  const jwt = getCookie('jwt');
  // let jwt =
  // 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJ3ZGtwNUQyaFJPYzRYSmJCY3FkdzlDOUM3T3gyIiwiZW1haWwiOiJydXRoem9uQGxlYWRlci5jb2RlcyIsImlwIjoiMTk1LjYwLjIzNS4xNDEiLCJpYXQiOjE2MDU3ODA2MDh9.StX-QtG8q4z2JvJ4VFMZQn2PYkb0vqo00Vbmn0GNlFU';
  // let myUid="wdkp5D2hROc4XJbBcqdw9C9C7Ox2"

  const value = document.querySelector('input#usernameInput').value;
  const data = {token: jwt, usernameToCheck: value};
  // $.ajax({
  //   url: 'https://lms.leader.codes/register/checkUsername',
  //   headers: {
  //     Authorization: jwt,
  //   },
  //   // data: JSON.stringify(action.payload),
  //   method: 'post',
  //   dataType: 'json',
  //   data: JSON.stringify(data),
  //   contentType: 'application/json',
  //   withCradentials: true,
  //   // data: JSON.stringify(dataToProfilePage),
  //   success: function (res) {
  //     if (!res.availability) {
  //       swal(
  //         'Oops...',
  //         'The username is already taken. Please choose another username.',
  //         'error'
  //       );
  //     } else {
  //       swal('Oops...', 'Username available and created!', 'error');
  //       setUserProps({"userName":value})
  //       history.replace('/' + value + '/addCourse');
  //       // window.location.reload();
  //       // window.location.href = "https://lms.leader.codes/" + $.userName + '/addCourse'
  //     }
  //   },
  //   error: function (err){
  //     console.log(err);
  //   }
  // });
  if (
    value == 'login' ||
    value == 'register' ||
    value == 'wizard' ||
    value == 'view' ||
    value == 'profile' ||
    value == 'search' ||
    value == 'addCourse' ||
    value == 'addlesson'
  )
    swal('Oops...', 'The username is not valid, please try other.', 'error');
  fetch('https://lms.leader.codes/register/checkUsername', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: jwt,
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((res) => {
      if (!res.availability) {
        swal(
          '...',
          'The username is already taken. Please choose another username.',
          'error'
        );
      } else {
        swal('succsess', 'Username available and created!', 'succsess');
        setUserProps({userName: value});
        getAllForUser(value);
        // if (history.state.state!="undefined"&&history.state.state.from!="") {
        let from = localStorage.getItem('from');
        if (from) {
          localStorage.setItem('sid', uid);
          history.push('/' + from);
        } else history.push('/' + value);

        // history.push(history.state.state.from)

        // history.push('/' + value);
      }
    });
};

const mapDispatchToProps = (dispatch) => ({
  setUserProps: (data) => dispatch(actions.setUserProps(data)),
  getAllForUser: (data) => dispatch(actions.getAllForUser(data)),
});

function mapStateToProps(state) {
  return {
    user: state.userReducer.user,
  };
}

class Wizard extends Component {
  render() {
    return (
      <div className="auth">
        <div
          className="auth__main"
          style={{
            backgroundImage: 'url(./img_from_xd/bg-login-finish-mobile.jpg)',
          }}
        >
          <div className="auth__wrap">
            <div className="auth__preview">
              <img
                className="auth__pic"
                src="assets/img/logo-white.svg"
                width="48"
                alt="Logo"
              />
            </div>
            <div className="auth__title title title_xl">Welcome to Leader</div>
            <div className="auth__subtitle title title_sm">
              Enter your details to proceed further
            </div>
          </div>
        </div>
        <div className="auth__container">
          <div className="auth__inner">
            <div className="auth__head">
              <div className="auth__title title title_xl">
                <p>Welcome to Leader.</p>
              </div>
              <p>
                Please select a username to complete the registration process
              </p>
            </div>
            <form className="auth__form" id="loginFrom" method="post">
              <div className="field auth__field">
                <div className="field__label">Username</div>
                <div className="field__wrap">
                  <input
                    id="usernameInput"
                    name="username"
                    className="field__input"
                    type="text"
                    placeholder="Start typing…"
                  />
                  <div className="field__icon">
                    <i className="la la-user "></i>
                  </div>
                </div>
              </div>
              <input type="hidden" name="submitedFlag" />
              <div className="auth__btns">
                <a
                  id="signupBtn"
                  className="btn btn_light auth__btn"
                  style={{userSelect: 'none', cursor: 'pointer'}}
                  onClick={() =>
                    usernameCheck(
                      this.props.setUserProps,
                      this.props.getAllForUser,
                      this.props.user.uid
                    )
                  }
                >
                  Continue
                </a>
              </div>
              <div id="errMsg" style={{color: 'red'}}></div>
            </form>
          </div>
        </div>
        <div
          className="auth__bg"
          style={{backgroundImage: ' url(assets/img/bg-login-sign-in.jpg)'}}
        ></div>
        <div
          id="wait"
          style={{
            display: 'none',
            zIndex: '2',
            position: 'absolute',
            top: '50%',
            left: '50%',
          }}
        >
          <img
            src="https://cdn.dribbble.com/users/225707/screenshots/2958729/attachments/648705/straight-loader.gif"
            width="64"
            height="64"
          />
          <br />
          Loading...
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Wizard);
