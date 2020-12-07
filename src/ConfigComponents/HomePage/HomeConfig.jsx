import React, {Component, useState} from 'react';
import {Button, Row} from 'react-bootstrap';
import {connect} from 'react-redux';
import {useParams, useRouteMatch, withRouter} from 'react-router-dom';
import {actions} from '../../Store/actions';
import '../configurator.css';
import {FaAngleDown, FaAngleRight, FaPlus} from 'react-icons/all';
import $ from 'jquery';
import {
  ConfigCategories,
  ConfigCategory,
  ConfigHeader,
  ConfigGetChoice,
  ConfigLearning,
  ConfigWorldSelection,
  ConfigTopEducators,
  ConfigCTA,
  ConfigLearningX,
  ConfigTestimoinal,
  ConfigTestimoinalX,
} from './HomeConfigSections';
// const browserHistory = createBrowserHistory();

function mapStateToProps(state) {
  return {
    school: state.schoolReducer.school,
    styles: state.stylesReducer.styles,
  };
}

const mapDispatchToProps = (dispatch) => ({
  showSchoolByPart: (data) => dispatch(actions.showSchoolByPart(data)),
  setColorSchoolByPart: (data) => dispatch(actions.setColorSchoolByPart(data)),
  addSchoolToServer: (data) => dispatch(actions.addSchoolToServer(data)),
  addNewForSection: (data) => dispatch(actions.addNewForSection(data)),
  addNewForLearning: (data) => dispatch(actions.addNewForLearning(data)),
  initialEmptyCourse: () => dispatch(actions.initialEmptyCourse()),
  setSchoolProp: (data) => dispatch(actions.setSchoolProp(data)),
  setSchoolImage: (data) => dispatch(actions.setSchoolImage(data)),
  setCategories: (data) => dispatch(actions.setCategories(data)),
  setCategoriesImage: (data) => dispatch(actions.setCategoriesImage(data)),
  setColorSchoolByPart: (data) => dispatch(actions.setColorSchoolByPart(data)),
  setLearning: (name) => dispatch(actions.setLearning(name)),
  setLearningImage: (name) => dispatch(actions.setLearningImage(name)),
  setLearningHeader: (name) => dispatch(actions.setLearningHeader(name)),
  setCta: (name) => dispatch(actions.setCta(name)),
  deleteFromSection: (name) => dispatch(actions.deleteFromSection(name)),
  deleteFromLearning: (name) => dispatch(actions.deleteFromLearning(name)),
  setTestimoinalImage: (name) => dispatch(actions.setTestimoinalImage(name)),
  setTestimoinal: (name) => dispatch(actions.setTestimoinal(name)),
  setSectionConfig: (name) => dispatch(actions.setSectionConfig(name)),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(function HomeConfig(props) {
    let match = useRouteMatch();
    let {name} = useParams();
    let {history} = props;
    const addCourse = () => {
      props.initialEmptyCourse();
      history.push('/' + name + '/addCourse');
      // window.location.reload();
    };
    const [choose, setChoose] = useState(0);
    const handleChoose = (click) => {
      if (choose === click) setChoose(0);
      else setChoose(click);
    };
    const handleSave = () => {
      props.addSchoolToServer(props.school);
      // browserHistory.replace('/' + match.params.name);
      // window.location.reload();
      // $.ajax()
    };
    const switchConfigComponent = (name, id) => {
      switch (name) {
        case 'header':
          return (
            <ConfigHeader
              image={props.setSchoolImage}
              school={props.school}
              function={props.setSchoolProp}
              color={props.setColorSchoolByPart}
            />
          );
        case 'category':
          return (
            <ConfigCategory
              id={id}
              image={props.setCategoriesImage}
              school={props.school}
              function={props.setCategories}
              add={props.addNewForSection}
              data={props}
            />
          );
        case 'categories':
          return (
            <ConfigCategories
              school={props.school}
              color={props.setColorSchoolByPart}
              show={props.showSchoolByPart}
              data={props}
            />
          );
        case 'getChoice':
          return (
            <ConfigGetChoice
              school={props.school}
              color={props.setColorSchoolByPart}
              show={props.showSchoolByPart}
            />
          );
        case 'learning':
          return (
            <ConfigLearning
              image={props.setLearningImage}
              function={props.setLearningHeader}
              school={props.school}
              color={props.setColorSchoolByPart}
              show={props.showSchoolByPart}
            />
          );
        case 'learning-x':
          return (
            <ConfigLearningX
              data={props}
              id={id}
              school={props.school}
              function={props.setLearning} //lkjh
            />
          );
        case 'worldSelection':
          return (
            <ConfigWorldSelection
              school={props.school}
              color={props.setColorSchoolByPart}
              show={props.showSchoolByPart}
            />
          );
        case 'cta':
          return (
            <ConfigCTA
              school={props.school}
              color={props.setColorSchoolByPart}
              show={props.showSchoolByPart}
              data={props}
            />
          );
        case 'testimoinal':
          return <ConfigTestimoinal id={id} data={props} />;
        case 'testimoinal-x':
          return <ConfigTestimoinalX id={id} data={props} />;

        default:
          return 'foo';
      }
    };
    return (
      <>
        <div className="config">
          <button onClick={() => addCourse()}>
            Add Course <FaPlus />
          </button>
          <br />
          {/* <h5>{props.styles.section_config.name}</h5> */}
          <br />
          {switchConfigComponent(
            props.styles.section_config.name,
            props.styles.section_config.id
          )}

          <div id="bottom_configurtor">
            <Button variant="primary" onClick={handleSave}>
              Save school
            </Button>
          </div>
        </div>
      </>
    );
  })
);
