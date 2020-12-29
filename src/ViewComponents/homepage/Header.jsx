import { FaSearch } from 'react-icons/all';
// import '../courseConfig/node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Container, Row, Col, InputGroup, FormControl } from 'react-bootstrap';
import '../../ViewComponents/homepage/App.css';
import { actions } from '../../Store/actions';
import { connect } from 'react-redux';
// import '../configurator.css';
// import { handleImage } from '../handleImage';

function mapStateToProps(state) {
  return {
    school: state.schoolReducer.school,
  };
}
export default connect(
  mapStateToProps
)(function Header(props) {
  return (
    <>
      <header>
        <Container>
          <Row>
            <Col className="middle" md="6">
              <h1 className="learn">
                <p>{props.school.title}</p>
              </h1>
              <h6 className="choose">
                <p>{props.school.subtitle}</p>
              </h6>
              {props.school.show.searchbar && (
                <InputGroup className="mb-2 search-bar">
                  <FormControl
                    placeholder="Search your favourite course"
                    aria-label="Search your favourite course"
                    aria-describedby="basic-addon2"
                  />
                  <InputGroup.Append>
                    <InputGroup.Text
                      id="basic-addon2"
                    style={{ backgroundColor: props.school.colors.searchbar }}
                    >
                      <FaSearch color="white" />
                    </InputGroup.Text>
                  </InputGroup.Append>
                </InputGroup>
              )}
            </Col>
            <Col md="6">
              <div >
                <img
                  src={props.school.image}
                  alt="header"
                ></img>
              </div>
            </Col>
          </Row>
        </Container>
      </header>
    </>
  );
});

// export default Header;
