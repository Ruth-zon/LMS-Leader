// import '../courseConfig/node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { FaTrash } from 'react-icons/fa';
import { connect } from 'react-redux';
import { actions } from '../../Store/actions';
import '../../ViewComponents/homepage/App.css';

function mapStateToProps(state) {
  return {
    school: state.schoolReducer.school,
  };
}

export default connect(
  mapStateToProps
)(function LearningPlatform(props) {
  return (
    <section
      style={{ backgroundColor: props.school.colors.learning }}
    >
      <div className="title">
        <h3>
          <p>{props.school.learning.header}</p>
        </h3>
      </div>
      <Container>
        <Row>
          <Col xs="6">
            <Image src={props.school.learning.image}></Image>
          </Col>
          <Col xs="6" className="lerning">
            <RowLearning data={props} />
          </Col>
        </Row>
      </Container>
    </section>
  );
});

function RowLearning(props) {
  var rows = [];
  for (var i = 0; i < props.data.school.learning.info.length; i++) {
    let x = i;
    rows.push(
      <div key={x}>

        <span>
          <p>{props.data.school.learning.info[i].id}</p>
        </span>
        <div className="header-learning">
          <p>{props.data.school.learning.info[i].header}</p>
        </div>

        <div className="text-learning">
          <p> {props.data.school.learning.info[i].text}</p>

        </div>
      </div>
    );
  }
  return rows;
}
// export default LearningPlatform;
