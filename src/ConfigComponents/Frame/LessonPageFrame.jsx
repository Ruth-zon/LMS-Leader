import React from 'react';
import {connect} from 'react-redux';
import './frame.css';
import Configurator from './configurator';
import TopFrame from './top_frame';
import Stage from './stage';
import LessonPage from '../lessonPage/LessonPage';
import LessonConfig from '../lessonPage/LessonConfig';

function mapStateToProps(state) {
  return {
    styles: state.stylesReducer.styles,
  };
}
function LessonPageFrame(props) {
  return (
    <div id="frame">
      <TopFrame />
      {props.styles.configurator && (
        <Configurator>
          <LessonConfig />
        </Configurator>
      )}
      <Stage>
        <LessonPage />
      </Stage>
    </div>
  );
}
export default connect(mapStateToProps, null)(LessonPageFrame);
