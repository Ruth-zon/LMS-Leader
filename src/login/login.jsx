import './login.css';
import React, {useContext, useEffect, useState} from 'react';
import {
  Button,
  Col,
  Container,
  Row,
  Form,
  Image,
  InputGroup,
} from 'react-bootstrap';
// import firebase from '@firebase/app';
// import 'firebase/auth';
import {
  auth,
  signInWithGoogle,
  nav,
  checkPremission,
  signOut,
} from './firebase';
import {UserContext} from './userProvider';
import $ from 'jquery';
import {Link, withRouter} from 'react-router-dom';
import history from '../history';

// const history = createHashHistory();
// const browserHistory = createBrowserHistory();
// const user={};

export default withRouter(function Login(props) {
  const user = useContext(UserContext);
  // const {history} = props;
  // const state = {
  //   type: 'password',
  // };
  const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  );
  // const [passwordShown, setPasswordShown] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [type, setType] = useState('password');

  const signInWithEmailAndPasswordHandler = (event, email, password) => {
    event.preventDefault();

    if (!validEmailRegex.test(email)) {
      setEmailError('Email is not valid');
      return;
    }
    if (password.length < 8) {
      setPasswordError('Password must be at least 8 characters');
      return;
    }
    if (password != '' && email != '') {
      auth
        .signInWithEmailAndPassword(email, password)
        .then((res) => nav(res.user.displayName))
        .catch((error) => {
          setError('Error signing in with password and email!');
          console.error('Error signing in with password and email', error);
        })
        .catch((err) => {
          if ((err.code = 'auth/user-not-found')) console.log('');
        });
    }
  };

  const onChangeHandler = (event) => {
    const {name, value} = event.currentTarget;

    if (name === 'userEmail') {
      setEmail(value);
    } else if (name === 'userPassword') {
      setPassword(value);
    }
  };

  const handleClick = () =>
    setType(() => ({
      type: type === 'text' ? 'password' : 'text',
    }));
  useEffect(() => {
    // signOut();
    // document.cookie = 'jwt' + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;domain=.leader.codes';

    auth.onAuthStateChanged(function (user) {
      let exsistsJwt = document.cookie
        .split(';')
        .filter((s) => s.includes('jwt'));
      // if (exsistsJwt.length < 1) {
      //   auth
      //     .signOut()
      //     .then(function () {
      //       console.log('logged out');
      //       document.cookie =
      //         'jwt' +
      //         '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;domain=.leader.codes';
      //     })
      //     .catch(function (error) {});
      // } else
      if (user) {
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
      {/* <FirebaseAuthProvider firebase={firebase} {...config}> */}
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
              <h2>Hello ! Welcome back.</h2>
              <h5>
                Log in with your data that you entered during Your registration.
              </h5>
              <Form>
                <Form.Group controlId="formBasicEmail">
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
                  <Link to="">Forgot password?</Link>
                  <InputGroup>
                    <InputGroup.Prepend>
                      {/* <Image src="./img_from_xd/Eyes.svg"></Image> */}
                      <InputGroup.Text onClick={handleClick}>
                        <Image src="./img_from_xd/Eyes.svg"></Image>
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                      type={type}
                      placeholder="Enter password"
                      name="userPassword"
                      value={password}
                      onChange={(event) => onChangeHandler(event)}
                    />
                  </InputGroup>
                  <Form.Text className="error">{passwordError}</Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Remember me" />
                </Form.Group>
                <Button
                  variant="danger"
                  type="submit"
                  //  onClick={this.nav}
                  onClick={(event) => {
                    signInWithEmailAndPasswordHandler(event, email, password);
                  }}
                >
                  Start now!
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
                don't have an account?
                <Link
                  onClick={() => history.push('/register')}
                  className="pink"
                >
                  Sign up
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
      {/* </FirebaseAuthProvider> */}
    </>
  );
});
// export default Login;
