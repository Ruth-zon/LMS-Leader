import React from 'react';
import {connect} from 'react-redux';
import './frame.css';
import Configurator from './configurator';
import TopFrame from './top_frame';
import Stage from './stage';
import CourseConfig from '../coursepage/CourseConfig';
import CoursePage from '../coursepage/coursePage';

function mapStateToProps(state) {
  return {
    styles: state.stylesReducer.styles,
  };
}
function CoursePageFrame(props) {
  return (
    <div id="frame">
      <TopFrame />
      {props.styles.configurator && (
        <Configurator>
          <CourseConfig />
        </Configurator>
      )}
      <Stage>
        <CoursePage />
      </Stage>
    </div>
  );
}
export default connect(mapStateToProps, null)(CoursePageFrame);
