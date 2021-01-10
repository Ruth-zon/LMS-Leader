import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import './frame.css';
import HomePage from '../HomePage/HomePage';
import Configurator from './configurator';
import TopFrame from './top_frame';
import Stage from './stage';
import HomeConfig from '../HomePage/HomeConfig';
import { actions } from '../../Store/actions';


const mapDispatchToProps = (dispatch) => ({
  getAllForUser:(userName)=>dispatch(actions.getAllForUser(userName)),
});

function mapStateToProps(state) {
  return {
    styles: state.stylesReducer.styles,
  };
}
function HomePageFrame(props) {
  // const pageStyle={
  //     // color:jsonPage.settings.color,
  //     // backgroundColor:jsonPage.settings.bgColor
  // }
  // useEffect(() => {
  //   var url = window.location;
  //   var userName = decodeURI(url.pathname.split('/')[1]);
  //   props.getAllForUser(userName);
  // },[]);
  return (
    <div id="frame">
            <TopFrame />

      {props.styles.configurator && (
            <Configurator>
              <HomeConfig />
            </Configurator>
          )}
          <Stage>
            <HomePage />
          </Stage>
    </div>
  );
}
export default connect(
  mapStateToProps,mapDispatchToProps
)(HomePageFrame);
