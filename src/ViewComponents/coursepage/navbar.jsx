// import '../courseConfig/node_modules/bootstrap/dist/css/bootstrap.min.css';
import {FaSearch, FaShoppingCart, FaComment} from 'react-icons/all';
import React from 'react';
import '../homepage/App.css';
import {Button, Navbar, Nav, Form, NavDropdown} from 'react-bootstrap';

import {createHashHistory} from 'history';
import {createBrowserHistory} from 'history';
import history from '../../history';

// const history = createHashHistory();
// const browserHistory = createBrowserHistory();

function Navigation() {
  // const navigate=() =>{
  //   // browserHistory.replace('/courses/:'+JSON.stringify( data));
  //   browserHistory.replace('/login');
  //   window.location.reload();
  // }
  return (
    <>
      <Navbar className="navbar sticky-top nav-fill w-100">
        <Navbar.Brand href="#home">
          <span id="education">
            <FaComment color="white" flip="horizontal" />
          </span>
          Education{' '}
        </Navbar.Brand>
        <Nav className="mr-auto">
          <NavDropdown title="Home" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Pages" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1"> Action </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Courses" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1"> Action </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Features" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1"> Action </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Blog" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1"> Action </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Shop" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1"> Action </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <div>
            <FaSearch color="#707070" />
            <FaShoppingCart />
          </div>
          <Button
            variant="outline-primary"
            className="register"
            onClick={() => {
              history.push({
                pathname: '/login',
                state: {
                  from: history.location.pathname,
                },
              });
            }}
          >
            Register
          </Button>
        </Form>
      </Navbar>
    </>
  );
}
export default Navigation;
