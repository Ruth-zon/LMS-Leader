// import '../courseConfig/node_modules/bootstrap/dist/css/bootstrap.min.css';
import React, {useEffect} from 'react';
import './App.css';
import WorldSelectionCourse from './GetCoice.jsx';
import GetChoice from './GetCoice.jsx';
import Navigation from '../../navbar.jsx';
import Header from './Header.jsx';
import Categories from './Categories';
import LearningPlatform from './LearningPlatform';
import CTA from './CTA';
import Testimoinal from './Testimoinal';
import OurPartner from './OurPartner';
import Footer from './Footer';

import {connect} from 'react-redux';
import {actions} from '../../Store/actions';

const mapDispatchToProps = (dispatch) => ({
  getAllForGuess: (userName) => dispatch(actions.getAllForGuess(userName)),
});

function mapStateToProps(state) {
  return {
    styles: state.stylesReducer.styles,
    school: state.schoolReducer.school,
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(function HomePage(props) {
  
  return (
    <>
      <Navigation />
      <Header />
      {props.school.show.categories && <Categories />}
      {props.school.show.getChoice && <GetChoice />}
      {props.school.show.learning && <LearningPlatform />}
      {props.school.show.worldSelection && <WorldSelectionCourse />}
      {props.school.show.CTA && <CTA />}
      {props.school.show.testimoinal && <Testimoinal />}
      {props.school.show.partners && <OurPartner />}
      {props.school.show.footer && <Footer />}
    </>
  );
});

// export default HomePage;
