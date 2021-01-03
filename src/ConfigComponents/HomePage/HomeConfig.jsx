import React, {Component, useState} from 'react';
import {Button, Row} from 'react-bootstrap';
import {connect} from 'react-redux';
import {useParams, useRouteMatch, withRouter} from 'react-router-dom';
import {actions} from '../../Store/actions';
import '../configurator.css';
import {FaAngleDown, FaAngleRight, FaCopy, FaPlus} from 'react-icons/all';
import $ from 'jquery';
import {
  ConfigCategories,
  ConfigCategory,
  ConfigHeader,
  ConfigGetChoice,
  ConfigLearning,
  ConfigWorldSelection,
  ConfigCTA,
  ConfigLearningX,
  ConfigTestimoinal,
  ConfigTestimoinalX,
  ConfigPartner,
  ConfigPartnerX,
  ConfigFooterCol,
  ConfigFooter,
  SchoolButtons,
  SchoolFontButtons,
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
  setPartners: (name) => dispatch(actions.setPartners(name)),
  setFooterText: (name) => dispatch(actions.setFooterText(name)),
  setFooterShare: (name) => dispatch(actions.setFooterShare(name)),
  setFooterColName: (name) => dispatch(actions.setFooterColName(name)),
  setFooter: (name) => dispatch(actions.setFooter(name)),
  addNewForFooter: (name) => dispatch(actions.addNewForFooter(name)),
  deleteFromFooter: (name) => dispatch(actions.deleteFromFooter(name)),
  setGetChoice: (name) => dispatch(actions.setGetChoice(name)),
  setWorldSelection: (name) => dispatch(actions.setWorldSelection(name)),
  setChoiceFavorite: (name) => dispatch(actions.setChoiceFavorite(name)),

  //
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(function HomeConfig(props) {
    const [copy, showCopy] = useState(false);
    let match = useRouteMatch();
    let {name} = useParams();
    let {history} = props;
    const addCourse = () => {
      props.initialEmptyCourse();
      history.push('/' + name + '/addCourse');
      // window.location.reload();
    };
    const handleSave = () => {
      props.addSchoolToServer(props.school);
      // browserHistory.replace('/' + match.params.name);
      // window.location.reload();
      // $.ajax()
    };
    const handleCopy = () => {
      navigator.clipboard.writeText(
        'https://lms.leader.codes/view/' + props.school._id
      );
      showCopy(true);
      setTimeout(function () {
        showCopy(false);
      }, 2000);
      // showCopy(false);
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
              show={props.showSchoolByPart}
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
              function={props.setChoiceFavorite}
            />
          );
        case 'getChoice':
          return (
            <ConfigGetChoice
              school={props.school}
              color={props.setColorSchoolByPart}
              show={props.showSchoolByPart}
              data={props}
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
              data={props}
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
              data={props}
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
        case 'partner':
          return <ConfigPartner id={id} data={props} />;
        case 'partner-x':
          return <ConfigPartnerX id={id} data={props} />;
        case 'footer':
          return <ConfigFooter data={props} />;
        case 'footer-col':
          return <ConfigFooterCol col={id} data={props} />;
        case 'school_buttons':
          return (
            <SchoolButtons
              school={props.school}
              color={props.setColorSchoolByPart}
            />
          );

        default:
          return 'Click any object on the page to change its settings';
      }
    };
    let choose = props.styles.section_config.name;
    return (
      <>
        <div className="config">
          <button
            onClick={() => addCourse()}
            data-toggle="tooltip"
            data-placement="top"
            title="Add coursre"
          >
            Add Course <FaPlus />
          </button>
          <br />
          <button
            onClick={() => {
              choose === 'general'
                ? props.setSectionConfig({name: ''})
                : props.setSectionConfig({name: 'general'});
            }}
          >
            General settings
            {choose === 'general' ? <FaAngleDown /> : <FaAngleRight />}
          </button>
          <div className={choose === 'general' ? 'display' : 'cover'}>
            {!copy && <FaCopy onClick={handleCopy} />}
            {copy && <span id="copy-span">copied!</span>}
            <div>
              Link to school
              <textarea
                disabled
                value={'https://lms.leader.codes/view/' + props.school._id}
              />
            </div>
            <div>
              Background color of all the buttons
              <input
                type="color"
                value={props.school.colors.buttons}
                onChange={(e) =>
                  props.setColorSchoolByPart([e.target.value, 'button'])
                }
              />
            </div>
            <h5>Show sections</h5>
            <div>
              Categories
              <label
                className="switch"
                data-toggle="tooltip"
                data-placement="top"
                title="Hide/show categories"
              >
                <input
                  type="checkbox"
                  onClick={(e) => props.showSchoolByPart('categories')}
                  checked={props.school.show.categories}
                />
                <span className="slider round"></span>
              </label>
            </div>
            <div>
              Get choice - courses
              <label
                className="switch"
                data-toggle="tooltip"
                data-placement="top"
                title="Hide/show this section"
              >
                <input
                  type="checkbox"
                  onClick={(e) => props.showSchoolByPart('getChoice')}
                  checked={props.school.show.getChoice}
                />
                <span className="slider round"></span>
              </label>
            </div>
            <div>
              Learning platform
              <label
                className="switch"
                data-toggle="tooltip"
                data-placement="top"
                title="Hide/show this section"
              >
                <input
                  type="checkbox"
                  onClick={(e) => props.showSchoolByPart('learning')}
                  checked={props.school.show.learning}
                />
                <span className="slider round"></span>
              </label>
            </div>
            <div>
              World selection - courses
              <label
                className="switch"
                data-toggle="tooltip"
                data-placement="top"
                title="Hide/show this section"
              >
                <input
                  type="checkbox"
                  onClick={(e) => props.showSchoolByPart('worldSelection')}
                  checked={props.school.show.worldSelection}
                />
                <span className="slider round"></span>
              </label>
            </div>
            <div>
              A quote
              <label
                className="switch"
                data-toggle="tooltip"
                data-placement="top"
                title="Hide/show this section"
              >
                <input
                  type="checkbox"
                  onClick={(e) => props.showSchoolByPart('CTA')}
                  checked={props.school.show.CTA}
                />
                <span className="slider round"></span>
              </label>
            </div>
            <div>
              Testimoinal
              <label
                className="switch"
                data-toggle="tooltip"
                data-placement="top"
                title="Hide/show this section"
              >
                <input
                  type="checkbox"
                  onClick={(e) => props.showSchoolByPart('testimoinal')}
                  checked={props.school.show.testimoinal}
                />
                <span className="slider round"></span>
              </label>
            </div>
            <div>
              Partners
              <label
                className="switch"
                data-toggle="tooltip"
                data-placement="top"
                title="Hide/show this section"
              >
                <input
                  type="checkbox"
                  onClick={(e) => props.showSchoolByPart('partners')}
                  checked={props.school.show.partners}
                />
                <span className="slider round"></span>
              </label>
            </div>
            <div>
              Footer
              <label className="switch">
                <input
                  type="checkbox"
                  onClick={(e) => props.showSchoolByPart('footer')}
                  checked={props.school.show.footer}
                />
                <span className="slider round"></span>
              </label>
            </div>
          </div>
          {/* <h5>{props.styles.section_config.name}</h5> */}
          <br />
          <div className={choose === 'general' ? 'cover' : 'display'}>
            {switchConfigComponent(
              props.styles.section_config.name,
              props.styles.section_config.id
            )}
          </div>
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
