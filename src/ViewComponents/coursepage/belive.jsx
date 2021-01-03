import React, {Component} from 'react';
import {Col, Row, Container, Image} from 'react-bootstrap';
import './course.css';
import {connect} from 'react-redux';

function mapStateToProps(state) {
  return {
    course: state.courseReducer.course,
  };
}

const mapDispatchToProps = (dispatch) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
class Belive extends Component {
  render() {
    let course=this.props.course;
    return (
      <>
        <div className="belive content">
          <Container>
            <Row>
              <Col md="6" >
                <p>
                  <i className="IBelive">
                  {course.belive.text}
                  </i>
                  <br />
                  <br />
                  <br></br>
                  <p className="p1 ">{course.belive.auther}</p>
                  
                </p>
              </Col>
              <Col md="6">
              <Image src={course.belive.image}></Image>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
})

// export default Belive;
