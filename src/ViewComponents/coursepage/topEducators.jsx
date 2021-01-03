import {FaArrowLeft, FaArrowRight} from 'react-icons/all';
// import '../courseConfig/node_modules/bootstrap/dist/css/bootstrap.min.css';
// import {CourseCard, FirstRowCourse, SecondRowCourse} from './homepage/Courses';
import React, {Component} from 'react';
import {Button, Card, CardDeck, Image} from 'react-bootstrap';
import '../homepage/App.css';
import './course.css';
import {connect} from 'react-redux';
import Carousel from 'react-elastic-carousel';
import '../../ConfigComponents/HomePage/carousel.css';

// impore './'

function mapStateToProps(state) {
  return {
    course: state.courseReducer.course,
  };
}

const mapDispatchToProps = (dispatch) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  class TopEducators extends Component {
    constructor() {
      super();
      this.breakPoints = [
        {width: 1, itemsToShow: 1},
        {width: 350, itemsToShow: 2},
        {width: 700, itemsToShow: 3},
      ];
    }
    render() {
      const prev = (
        // <button onClick={dispatchDiscreteEvent} className="carousel-left">
        <button className="carousel-left">
          <FaArrowLeft />
        </button>
      );
      const next = (
        <button className="carousel-right">
          <FaArrowRight />
        </button>
      );
      return (
        <section
          id="top"
          style={{
            backgroundColor: this.props.course.colors.top_educators,
            color: this.props.course.colors.fontButton,
          }}
        >
          <div className=" row justify-content-around">
            <h3 className="">Top Education offers and deals are listed here</h3>
            <button
              style={{
                backgroundColor: this.props.course.colors.button,
                borderColor: this.props.course.colors.fontButton,
              }}
              className="btn-view"
            >
              View all
            </button>
          </div>
          <Carousel
            breakPoints={this.breakPoints}
            itemPadding={[0, 20]}
            className="content"
            ref={(ref) => (this.carousel = ref)}
            renderPagination={({pages, activePage, onClick}) => {
              return (
                <span direction="row" className="paging-scroll">
                  {pages.map((page) => {
                    const isActivePage = activePage === page;
                    return (
                      <span
                        className="paging-button"
                        key={page}
                        onClick={() => onClick(page)}
                        active={isActivePage}
                      />
                    );
                  })}
                </span>
              );
            }}
          >
            {this.props.course.top_educators.map((item, key) => {
              return (
                <>
                  <Card
                    key={key}
                    className="top-card hover-config"
                    onClick={() =>
                      this.props.setSectionConfig({
                        name: 'course_top_educators_x',
                        id: key,
                      })
                    }
                  >
                    <Card.Body>
                      <Image src={item.image}></Image>
                      <Card.Text>{item.header}</Card.Text>
                      <Card.Title>
                        {/* <img src={item.content} alt="Student"></img> */}
                        {item.content}
                      </Card.Title>
                      <div
                        style={{backgroundColor: item.color}}
                        className="discount"
                      >
                        Total Discount <br />
                        <h6>{item.discount}%</h6>
                      </div>
                    </Card.Body>
                  </Card>
                </>
              );
            })}
          </Carousel>
          <div className="content mt--42">
            <Button
              variant="light"
              onClick={() => {
                this.carousel.slidePrev();
              }}
              className="carousel-left"
            >
              <FaArrowLeft />
            </Button>
            <Button
              variant="light"
              onClick={() => {
                if (
                  this.props.course.top_educators.length -
                    this.carousel.state.firstItem -
                    this.carousel.state.pages.length >
                  0
                )
                  this.carousel.slideNext();
              }}
              className="carousel-right"
            >
              <FaArrowRight />
            </Button>
          </div>
        </section>
      );
    }
  }
);
// export default TopEducators;
