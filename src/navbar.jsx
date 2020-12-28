// import './courseConfig/node_modules/bootstrap/dist/css/bootstrap.min.css';
import {FaSearch, FaShoppingCart, FaComment} from 'react-icons/all';
import React, {useContext} from 'react';
import './ViewComponents/homepage/App.css';
import {
  Button,
  Navbar,
  Nav,
  Form,
  NavDropdown,
  Image,
  NavItem,
} from 'react-bootstrap';
import {UserContext} from './login/userProvider';
import {auth, signOut} from './login/firebase';
import history from './history';
// const history = createHashHistory();
// const browserHistory = createBrowserHistory();

function Navigation() {
  const user = useContext(UserContext);
  // const {photoURL, displayName, email} = user;
  // const navigate=() =>{
  //   // browserHistory.replace('/courses/:'+JSON.stringify( data));
  //   browserHistory.replace('/login');
  //   window.location.reload();
  // }
  const nav=()=>{
    history.push({
      pathname: '/login',
      // state: {
      //   from: history.location.pathname,
      // },
    });
    localStorage.setItem("from",history.location.pathname)
  }
  return (
    <>
      <Navbar>
        <Navbar.Brand href="#home">
          <span id="education">
            <FaComment color="white" flip="horizontal" />
          </span>
          Education{' '}
        </Navbar.Brand>
        <Nav className="mr-auto">
          {/* <div className="discover-in-iphone"> */}
          <NavDropdown
            className="discover-in-iphone"
            title="Home"
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown
            className="discover-in-iphone"
            title="Pages"
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item href="#action/3.1"> Action </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown
            className="discover-in-iphone"
            title="Courses"
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item href="#action/3.1"> Action </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown
            className="discover-in-iphone"
            title="Features"
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item href="#action/3.1"> Action </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown
            className="discover-in-iphone"
            title="Blog"
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item href="#action/3.1"> Action </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown
            className="discover-in-iphone"
            title="Shop"
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item href="#action/3.1"> Action </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          </NavDropdown>
          {/* </div> */}
          {/* <Form inline> */}
          <NavItem>
            <FaSearch color="#707070" />
          </NavItem>
          <NavItem>
            <FaShoppingCart color="#707070" />
          </NavItem>
          {user === undefined && (
            <Button
              variant="outline-primary"
              className="register"
              onClick={nav}
            >
              Register
            </Button>
          )}
          {user !== null && user !== undefined && (
            <>
              <div className="user-nav"></div>
              <Image className="user-img" src={user.photoURL} />
              {/* <span>{user.displayName}</span> */}

              <NavDropdown
                title={user.displayName.split(' ')[0]}
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="/editcourse/0">
                  New course
                </NavDropdown.Item>
                <NavDropdown.Item href="">View my courses</NavDropdown.Item>
                <NavDropdown.Item
                  href="login"
                  onClick={() => {
                    signOut();
                  }}
                >
                  Log Out
                </NavDropdown.Item>
              </NavDropdown>
              {/* <Button
                  variant="outline-primary"
                  className="register"
                  onClick={() => {
                    auth.signOut();
                  }}
                >
                  Log out
                </Button> */}
            </>
          )}
          {/* </Form> */}
        </Nav>
      </Navbar>
    </>
  );
}
export default Navigation;
