// import '../courseConfig/node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import '../../ViewComponents/homepage/App.css';
import GetChoice from './GetCoice.jsx';
import WorldSelectionCourse from './WorldSelectionCourse';
import Navigation from '../../navbar.jsx';
import Header from './Header';
import Categories from './Categories';
import LearningPlatform from './LearningPlatform';
import CTA from './CTA';
import Testimoinal from './Testimoinal';
import OurPartner from './OurPartner';
import Footer from './Footer';
import {
  Categories as ctgs,
  Courses as crs,
  // Students as tst,
  Partners as prt,
  Learnings as lrn,
} from '../../Store/data.js';
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch) => ({});

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
      <div className="homeconf">
        {/* <Navigation /> */}
        <Header />
        {props.school.show.categories && <Categories />}
        {props.school.show.getChoice && <GetChoice />}
        {props.school.show.learning && <LearningPlatform />}
        {props.school.show.worldSelection && <WorldSelectionCourse />}
        {props.school.show.CTA && <CTA />}
        {props.school.show.testimoinal && <Testimoinal />}
        {/* <Testimoinal data={tst} /> */}
        {props.school.show.partners && <OurPartner />}
        {props.school.show.footer && <Footer />}
      </div>
    </>
  );
});

// export default HomePage;
