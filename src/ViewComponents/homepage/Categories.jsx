// import '../courseConfig/node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import '../../ViewComponents/homepage/App.css';
import { Card, CardDeck, Col, Container, Dropdown, Form, Row } from 'react-bootstrap';
import { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from '../../Store/actions';
// import {handleDelete, handleImage, handleImageById} from '../handleImage';
import { FaTrash } from 'react-icons/fa';

function mapStateToProps(state) {
  return {
    school: state.schoolReducer.school,
  };
}

export default connect(
  mapStateToProps
)(function Categories(props) {
  return (
    <>
      <div
        style={{ backgroundColor: props.school.colors.categories }}
      // className="hover-config"
      >
        <div className="title">
          <Form inline>
            <button id="see-all">See all Categories</button>
          </Form>
          <h3>Choice favourite course from top category</h3>
        </div>
        <CardDeck className="none"></CardDeck>
        {/* Because the first card deck always align to right. */}
        {/* <CardDeck> */}
        <Container className="content">
          <Row>
            <RowCategories data={props} />
            {/* </CardDeck> */}
          </Row>
        </Container>
      </div>
    </>
  );
});
function RowCategories(props) {
  var rows = [];
  for (var i = 0; i < props.data.school.categories.length; i++) {
    let x = i;
    rows.push(
      <Col xs="12" sm="6" md="4" lg="3" xl="2"  key={x}>
        <Card
          className="category-card hover-trash"
          style={{ backgroundColor: props.data.school.categories[i].backcolor }}
        >
          <div >
            <Card.Img
              variant="top"
              src={props.data.school.categories[i].icon}
            />
          </div>

          <Card.Body>
            <Card.Title>
              <p>{props.data.school.categories[i].name}</p>

            </Card.Title>
          </Card.Body>
        </Card>
      </Col>
    );
  }
  return rows;
}


// export default Categories;
