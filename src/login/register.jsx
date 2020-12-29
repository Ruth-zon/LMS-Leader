import React, {Component, useEffect, useState} from 'react';
import {
  Button,
  Col,
  Container,
  Row,
  Form,
  Image,
  InputGroup,
} from 'react-bootstrap';
import './login.css';
import {createHashHistory} from 'history';
import {createBrowserHistory} from 'history';
// import firebase from '@firebase/app';
// import 'firebase/auth';
import $ from 'jquery';
import {auth, signInWithGoogle, checkPremission, signOut} from './firebase';
import store from '../Store/Store';
import {actions} from '../Store/actions';
import {Link, withRouter} from 'react-router-dom';
// var firebase = require('firebase');
// var app = firebase.initializeApp({ ... });

// var firebaseConfig = {
//   apiKey: 'AIzaSyB9giidNYNmRxYgj3PC4cysla54gHxaNJ4',
//   authDomain: 'lms-leader.firebaseapp.com',
//   databaseURL: 'https://lms-leader.firebaseio.com',
//   projectId: 'lms-leader',
//   storageBucket: 'lms-leader.appspot.com',
//   messagingSenderId: '451375116419',
//   appId: '1:451375116419:web:a631ec62e2e0a0304e6bb6',
//   measurementId: 'G-2DZBMG06NZ',
// };
// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }
// firebase.initializeApp(firebaseConfig);

// const history = createHashHistory();
// const browserHistory = createBrowserHistory();
const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

const Register = (props) => {
  const {history} = props;
  const [type, setType] = useState('password');

  // const [passwordShown, setPasswordShown] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [error, setError] = useState(null);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  // const nav = () => {
  //   browserHistory.replace('/');
  //   window.location.reload();
  // };
  const createUserWithEmailAndPasswordHandler = async (
    event,
    email,
    password,
    displayName
  ) => {
    event.preventDefault();
    if (!validEmailRegex.test(email)) {
      setEmailError('Email is not valid');
      return;
    }
    if (password.length < 8) {
      setPasswordError('Password must be at least 8 characters');
      return;
    }
    try {
      const {user} = await auth.createUserWithEmailAndPassword(email, password);
      // generateUserDocument(user, {displayName});
      store.dispatch(
        actions.setUserProps({
          uid: user.uid,
          email: user.email,
          photoURL: user.photoURL,
        })
      );
      // nav();
    } catch (error) {
      setError('Error Signing up with email and password');
    }
    setEmail('');
    setPassword('');
    setDisplayName('');
  };
  const onChangeHandler = (event) => {
    const {name, value} = event.currentTarget;
    if (name === 'userEmail') {
      setEmailError('');
      setEmail(value);
    } else if (name === 'userPassword') {
      setPasswordError('');
      setPassword(value);
    } else if (name === 'displayName') {
      setDisplayName(value);
    }
  };
  // const signInWithEmailAndPasswordHandler = (event, email, password) => {
  //   event.preventDefault();
  // };

  // const passswordSignIn = () => {
  //   firebase.auth().signInWithEmailAndPassword();
  // };
  const handleClick = () => setType(type === 'text' ? 'password' : 'text');

  useEffect(() => {
    // signOut();

    // document.cookie = 'jwt' + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;domain=.leader.codes';
    let exsistsJwt = document.cookie
      .split(';')
      .filter((s) => s.includes('jwt'));

    auth.onAuthStateChanged(function (user) {
      if (exsistsJwt.length < 1) {
        auth
          .signOut()
          .then(function () {
            console.log('logged out');
            document.cookie =
              'jwt' +
              '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;domain=.leader.codes';
          })
          .catch(function (error) {});
      } else if (user) {
        console.log('user: ' + user);
        auth.currentUser
          .getIdToken(true)
          .then((firebaseToken) => {
            $.ajax({
              url: 'https://lms.leader.codes/register/getAccessToken',
              method: 'post',
              dataType: 'json',
              contentType: 'application/json',
              data: JSON.stringify({
                action: 'firebaseloginwithcredentials',
                jwt: firebaseToken,
              }),
              success: function (data) {
                checkPremission(data);
              },
            });
          })
          .catch(function (error) {
            alert(error);
          });
      }
    });
  });
  return (
    <>
      <div className="login">
        {/* <Button onClick={this.nav}>login</Button> */}
        <Container>
          <Row>
            <Col xs="6" className="left">
              <Image className="size-70" src="./img_from_xd/iMAGE.svg"></Image>
              <h1>Turn your ambition into a success story</h1>
              <p>Choose from over 100,000 online video.</p>
            </Col>
            <Col xs="6" className="right">
              <h2>Create your free account</h2>
              <h5>See how the world’s best user experiences are created</h5>
              <Form>
                <Form.Group controlId="formBasicName">
                  <Form.Label>Full name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Your name"
                    name="displayName"
                    value={displayName}
                    onChange={(event) => onChangeHandler(event)}
                  />
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    name="userEmail"
                    value={email}
                    placeholder="Example@leader.codes"
                    onChange={(event) => onChangeHandler(event)}
                  />
                  <Form.Text className="error">{emailError}</Form.Text>
                  <Form.Text className="text-muted"></Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>
                    Password
                    {/* <FaRegStar /> */}
                  </Form.Label>
                  {/* <a href="">Forgot password?</a> */}
                  <InputGroup>
                    <InputGroup.Prepend>
                      {/* <Image src="./img_from_xd/Eyes.svg"></Image> */}
                      <InputGroup.Text onClick={handleClick}>
                        <Image src="./img_from_xd/Eyes.svg"></Image>
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                      type={type}
                      name="userPassword"
                      value={password}
                      onChange={(event) => onChangeHandler(event)}
                      placeholder="Enter password"
                    />
                  </InputGroup>
                  <Form.Text className="error">{passwordError}</Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Remember me" />
                </Form.Group>
                <Button
                  variant="primary"
                  type="submit"
                  //  onClick={this.nav}
                  onClick={(event) => {
                    createUserWithEmailAndPasswordHandler(
                      event,
                      email,
                      password,
                      displayName
                    );
                  }}
                >
                  Create your account
                </Button>
                <br />
                <div className="text-center">
                  <span className="or">OR</span>
                  <hr />
                </div>
                <Button
                  onClick={(e) => signInWithGoogle(e)}
                  type="submit"
                  variant="light"
                >
                  <Image src="./img_from_xd/gOOGLE.png"></Image>
                  Sign with Google
                </Button>
                <br />
                have an account?
                <Link
                  onClick={() => history.push('/register')}
                  className="pink"
                >
                  Sign in
                </Link>
                {error !== null && (
                  <div className="py-4 bg-red-600 w-full text-white text-center mb-3">
                    {error}
                  </div>
                )}
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default withRouter(Register);
