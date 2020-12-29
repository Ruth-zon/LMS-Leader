import { FaArrowRight, FaArrowLeft, FaTrash } from 'react-icons/all';
import React, { Component } from 'react';
import { Card, CardDeck, Form } from 'react-bootstrap';
import Carousel from 'react-elastic-carousel';
// import './carousel.css';
import 'react-multi-carousel/lib/styles.css';
import '../../ViewComponents/homepage/App.css';
import { connect } from 'react-redux';
import { actions } from '../../Store/actions';

function mapStateToProps(state) {
  return {
    school: state.schoolReducer.school,
  };
}



class Testimoinal extends Component {
  constructor() {
    super();
    this.breakPoints = [
      { width: 1, itemsToShow: 2 },
      { width: 400, itemsToShow: 3 },
      // {width: 850, itemsToShow: 3},
      { width: 1750, itemsToShow: 4 },
    ];
  }
  render() {
    const prev = (
      <button onClick={() => this.carousel.slidePrev()}>
        <FaArrowLeft />
      </button>
    );
    const next = (
      <button onClick={() => this.carousel.slideNext()}>
        <FaArrowRight />
      </button>
    );
    return (
      <>
        <section
          style={{ backgroundColor: this.props.school.colors.testimoinal }}
        >
          <div className="title">
            <h3>What our students have to say </h3>
            <Form inline>
              {prev}
              {next}
            </Form>
          </div>
          <Carousel
            breakPoints={this.breakPoints}
            itemPadding={[10, 10]}
            ref={(ref) => (this.carousel = ref)}
            className="content"
          >
            {this.props.school.testimoinals.map((item, key) => {
              return (
                <Card
                key={key}
                  className="test-card hover-trash "
                >
                  <Card.Body>
                    <Card.Title>
                      <span >
                        <img src={item.image} alt="Student"></img>
                      </span>
                      <p>{item.name}</p>
                    </Card.Title>
                    <Card.Text>
                    {item.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              );
            })}

          </Carousel>
        </section>
      </>
    );
  }
}

export default connect(mapStateToProps)(Testimoinal);
