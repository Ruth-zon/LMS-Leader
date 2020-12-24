// import '../courseConfig/node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import '../../ViewComponents/homepage/App.css';
import { Card, CardDeck, Col, Container, Dropdown, Form, Row } from 'react-bootstrap';
import { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from '../../Store/actions';
import { handleDelete, handleImage, handleImageById } from '../handleImage';
import { FaTrash } from 'react-icons/fa';

function mapStateToProps(state) {
  return {
    school: state.schoolReducer.school,
  };
}
const mapDispatchToProps = (dispatch) => ({
  setCategories: (name) => dispatch(actions.setCategories(name)),
  setCategoriesImage: (name) => dispatch(actions.setCategoriesImage(name)),
  deleteFromSection: (name) => dispatch(actions.deleteFromSection(name)),
  setSectionConfig: (name) => dispatch(actions.setSectionConfig(name)),
  setChoiceFavorite: (name)=> dispatch(actions.setChoiceFavorite(name)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(function Categories(props) {
  return (
    <>
      <div
        style={{ backgroundColor: props.school.colors.categories }}

        onClick={(e) => {
          if (e.target === e.currentTarget)
            props.setSectionConfig({ name: 'categories' });
        }}
        className="hover-config"
      >
        <div className="title">
          <Form inline>
            <button id="see-all" style={{ backgroundColor: props.school.colors.button ,borderColor: props.school.colors.fontButton}}
              onClick={(e) => {
                props.setSectionConfig({ name: 'school_buttons' });
              }}
            >
              <p style={{color: props.school.colors.fontButton }}
              // onClick={(e) => {
              //   props.setSectionConfig({ name: 'school_font_buttons' });
              // }}
              >See all Categories</p></button>
          </Form>
          <h3>
          <textarea
            value={props.school.choiceFavourite.header}
            onChange={(e) => props.setChoiceFavorite([e.target.value, 'header'])}
            style={{ color: props.school.colors.choiceFavourite, width:'70%' }}
          />
            {/* <textarea
              value={props.school.ChoiceFavourite.header}
              onChange={(e) => props.setChoiceFavorite(e.target.value)}
            /> */}
          </h3>
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
      <Col xs="12" sm="6" md="4" lg="3" xl="2" key={x}>
        <Card
          key={x}
          onClick={() => props.data.setSectionConfig({ name: 'category', id: x })}
          className="category-card hover-trash hover-config-child"
          style={{ backgroundColor: props.data.school.categories[i].backcolor }}
        >
          {/* <input
          id={'category-backcolor-' + i}
          type="color"
          className="border-white"
          value={props.data.school.categories[i].backcolor}
          onChange={(e) =>
            props.data.setCategories([
              e.target.value,
              e.target.id.split('-')[1],
              parseInt(e.target.id.split('-')[2]),
            ])
          }
        /> */}
          <div className="file-upload">
            <Card.Img
              variant="top"
              src={props.data.school.categories[i].icon}
            />
            <input
              id={'category-icon-' + i}
              type="file"
              accept=".svg"
              onChange={(e) =>
                handleImageById(
                  e,
                  props.data.setCategoriesImage,
                  parseInt(e.target.id.split('-')[2])
                )
              }
            />
          </div>

          <Card.Body>
            <Card.Title>
              {/* {props.data.school.categories[i].name} */}
              <textarea
                className="width-webkit"
                id={'category-name-' + i}
                value={props.data.school.categories[i].name}
                onChange={(e) =>
                  props.data.setCategories([
                    e.target.value,
                    e.target.id.split('-')[1],
                    parseInt(e.target.id.split('-')[2]),
                  ])
                }
              />

              {/* <FaTrash
              className="trash"
              id={"categories-trash-"+i}
              onClick={(e) =>
                handleDelete(props.data.deleteFromSection, [
                  // parseInt(e.target.id.split('-')[2]), //ind
                  x,
                  "categories", //categories
                ])
              }
            /> */}
            </Card.Title>
          </Card.Body>
        </Card>
      </Col>
    );
  }
  return rows;
}

// function CategoryCard(props) {
//   return (

//   );
// }

// export default Categories;
