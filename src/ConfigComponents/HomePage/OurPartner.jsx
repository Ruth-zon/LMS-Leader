import {FaArrowRight, FaArrowLeft, FaTrash} from 'react-icons/all';
// import '../courseConfig/node_modules/bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from 'react';
import {Container, Row, Col, Form, Image} from 'react-bootstrap';
import '../../ViewComponents/homepage/App.css';
import {actions} from '../../Store/actions';
import {connect} from 'react-redux';
import {handleImageById,handleDelete} from '../handleImage';
import Carousel from 'react-elastic-carousel';
import './carousel.css';


function mapStateToProps(state) {
  return {
    school: state.schoolReducer.school,
  };
}

const mapDispatchToProps = (dispatch) => ({
  setPartners: (sub) => dispatch(actions.setPartners(sub)),
  deleteFromSection: (name) => dispatch(actions.deleteFromSection(name)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  class OurPartner extends Component {
    constructor() {
      super();
      this.breakPoints = [
        {width: 1, itemsToShow: 2},
        {width: 550, itemsToShow: 4},
        {width: 1000, itemsToShow: 6},
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
            className="partner"
            style={{backgroundColor: props.school.colors.partners}}
          >
            <div className="title">
              <Form inline>
                <button onClick={() => this.carousel.slidePrev()}>
                  <FaArrowLeft />
                </button>
                <button onClick={() => this.carousel.slideNext()}>
                  <FaArrowRight />
                </button>
              </Form>
              <h3>Trusted by our awesome partners</h3>
            </div>
            {/* <Container>
          <Row>
            {props.school.partners.map((item, key) => {
              return (
                <Col xs={4} md={2} key={key}>
                  <div class="file-upload">
                    <Image src={item} thumbnail />
                    <input
                      id={'partners-' + key}
                      type="file"
                      accept=".png, .jpg, .jpeg"
                      onChange={(e) =>
                        handleImageById(
                          e,
                          props.setPartners,
                          parseInt(e.target.id.split('-')[1])
                        )
                      }
                    />
                  </div>
                </Col>
              );
            })}
            //  <RowPartners data={props.data} /> 
          </Row>
        </Container>
         */}
            <Carousel
              className="content"
              breakPoints={this.breakPoints}
              ref={(ref) => (this.carousel = ref)}
            >
              {props.school.partners.map((item, key) => {
                return (
                  <div key={key} className="hover-trash">
                    <div class="file-upload2">
                      <input
                        id={'partners-' + key}
                        type="file"
                        accept=".png, .jpg, .jpeg"
                        onChange={(e) =>
                          handleImageById(
                            e,
                            props.setPartners,
                            parseInt(e.target.id.split('-')[1])
                          )
                        }
                      />
                      <Image src={item} thumbnail />

                      <FaTrash
                        className="trash"
                        onClick={(e) =>
                          // handleDelete(props.deleteFromSection, [
                          //   parseInt(e.target.id.split('-')[1]), //ind
                          //   e.target.id.split('-')[0], //partner
                          // ])
                          handleDelete(props.deleteFromSection, [
                            key,
                            'partners',
                          ])
                        }
                      />
                    </div>
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

// function RowPartners(props) {
//   var rows = [];
//   for (var i = 0; i < props.data.length; i++) {
//     rows.push();
//   }
//   return rows;
// }
// export default OurPartner;
