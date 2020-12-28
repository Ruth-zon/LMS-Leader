// import '../courseConfig/node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import WorldSelectionCourse from './GetCoice.jsx';
import GetChoice from './GetCoice.jsx'
import Navigation from '../../navbar.jsx';
import Header from './Header.jsx';
import Categories from './Categories';
import LearningPlatform from './LearningPlatform';
import CTACopy from './CTA';
import Testimoinal from './Testimoinal';
import OurPartner from './OurPartner';
import Footer from '../Footer';

import {
  Categories as ctgs,
  Courses as crs,
  // Students as tst,
  Partners as prt,
  Learnings as lrn,
} from '../../Store/data.js';


function HomePage() {
  return (
    <>
      <Navigation />
      <Header />
      <Categories />
      <GetChoice />
      <LearningPlatform />
      <WorldSelectionCourse />
      <CTACopy />
      <Testimoinal />
      {/* <Testimoinal data={tst} /> */}
      <OurPartner  />
      <Footer />
    </>
  );
}

export default HomePage;
