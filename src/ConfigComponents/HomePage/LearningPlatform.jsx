// import '../courseConfig/node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';
import {FaTrash} from 'react-icons/fa';
import {connect} from 'react-redux';
import {actions} from '../../Store/actions';
import '../../ViewComponents/homepage/App.css';
import {handleDelete, handleImage} from '../handleImage';

function mapStateToProps(state) {
  return {
    school: state.schoolReducer.school,
  };
}
const mapDispatchToProps = (dispatch) => ({
  setLearning: (name) => dispatch(actions.setLearning(name)),
  setLearningImage: (name) => dispatch(actions.setLearningImage(name)),
  setLearningHeader: (name) => dispatch(actions.setLearningHeader(name)),
  deleteFromLearning: (name) => dispatch(actions.deleteFromLearning(name)),
  setSectionConfig: (name) => dispatch(actions.setSectionConfig(name)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(function LearningPlatform(props) {
  return (
    <section
      onClick={(e) => {
        if (e.target === e.currentTarget)
          props.setSectionConfig({name: 'learning'});
      }}
      className="hover-config learning-platform"
      style={{backgroundColor: props.school.colors.learning}}
    >
      <div className="title">
        <h3>
          <input
            className="width-webkit"
            id={'learning-header'}
            value={props.school.learning.header}
            onChange={(e) => {
              props.setLearningHeader(e.target.value);
            }}
          />
        </h3>
      </div>
      <Container>
        <Row>
          <Col xs="6">
            <div className="file-upload hover-img">
              <Image src={props.school.learning.image}></Image>
              <input
                type="file"
                accept=".jpg, .png, .jpeg"
                onChange={(e) => handleImage(e, props.setLearningImage)}
              />
            </div>
            {/* <Image src={props.school.learning.image}></Image> */}
          </Col>
          <Col xs="6" className="lerning">
 
            <RowLearning data={props} />
          </Col>
        </Row>
      </Container>
    </section>
  );
});

function handleHeader(e) {
  console.log(e.target.velue);
}
function RowLearning(props) {
  var rows = [];
  for (var i = 0; i < props.data.school.learning.info.length; i++) {
    let x=i;
    rows.push(
      <div
      key={x}
        id={'learning-' + i}
        onClick={() => props.data.setSectionConfig({name: 'learning-x', id: x})}
        className=" hover-config"
      >
        {/* <FaTrash
          onClick={(e) =>
            handleDelete(props.data.deleteFromLearning, [
              parseInt(e.target.id.split('-')[2]),
              'learning',
            ])
          }
        /> */}
        <span>
          <input
            className="width-webkit"
            id={'learning-id-' + i}
            value={props.data.school.learning.info[i].id}
            onChange={(e) => {
              props.data.setLearning([
                e.target.value,
                e.target.id.split('-')[1],
                parseInt(e.target.id.split('-')[2]),
              ]);
            }}
          />
          {/* {props.data.school.learning.info[i].id} */}
        </span>
        <div className="header-learning">
          <input
            className="width-webkit"
            id={'learning-header-' + i}
            value={props.data.school.learning.info[i].header}
            onChange={(e) => {
              props.data.setLearning([
                e.target.value,
                e.target.id.split('-')[1],
                parseInt(e.target.id.split('-')[2]),
              ]);
            }}
          />
        </div>

        <div className="text-learning">
          <textarea
            className="height-100"
            id={'learning-text-' + i}
            value={props.data.school.learning.info[i].text}
            onChange={(e) => {
              props.data.setLearning([
                e.target.value,
                e.target.id.split('-')[1],
                parseInt(e.target.id.split('-')[2]),
              ]);
            }}
          />
          {/* {props.data.school.learning.info[i].text} */}
        </div>
      </div>
    );
  }
  return rows;
}
// export default LearningPlatform;
