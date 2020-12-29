import { FaArrowRight, FaArrowLeft, FaTrash } from 'react-icons/all';
import React, { Component } from 'react';
import { Container, Row, Col, Form, Image } from 'react-bootstrap';
import '../../ViewComponents/homepage/App.css';
import { actions } from '../../Store/actions';
import { connect } from 'react-redux';
import Carousel from 'react-elastic-carousel';


function mapStateToProps(state) {
  return {
    school: state.schoolReducer.school,
  };
}

export default connect(
  mapStateToProps

)(
  class OurPartner extends Component {
    constructor() {
      super();
      this.breakPoints = [
        { width: 1, itemsToShow: 2 },
        { width: 550, itemsToShow: 4 },
        { width: 1000, itemsToShow: 6 },
      ];
    }
    goto(num) {
      this.carousel.goTo(num);
    }
    render() {
      let props = this.props;
      return (
        <>
          <section
            style={{ backgroundColor: props.school.colors.partners }}
          >
            <div className="title">
              <Form inline>
                <button >
                  <FaArrowLeft />
                </button>
                <button >
                  <FaArrowRight />
                </button>
              </Form>
              <h3>Trusted by our awesome partners</h3>
            </div>
    
            <Carousel
              className="content"
              breakPoints={this.breakPoints}
              ref={(ref) => (this.carousel = ref)}
            >
              {props.school.partners.map((item, key) => {
                return (
                  <div className="image-our-partner" key={key}>
                    <Image src={item} thumbnail />
                  </div>
                );
              })}
            </Carousel>
          </section>
        </>
      );
    }
  }
);


