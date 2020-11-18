import React, {Component} from 'react';
import {Col, Row, Container, Image} from 'react-bootstrap';
import {connect} from 'react-redux';
import {actions} from '../../Store/actions';
import {handleImage} from '../handleImage'
import '../../ViewComponents/coursepage/course.css';

const mapDispatchToProps = (dispatch) => ({
  setBeliveImage: (data) => dispatch(actions.setBeliveImage(data)),
  setBeliveAuther: (data) => dispatch(actions.setBeliveAuther(data)),
  setBeliveText: (data) => dispatch(actions.setBeliveText(data)),
});

function mapStateToProps(state) {
  return {
    course: state.courseReducer.course,
  };
}

class Belive extends Component {
  
  render() {
    let {course, setBeliveAuther, setBeliveImage, setBeliveText} = this.props;
    return (
      <>
        <div className="belive beliveconf"  style={{backgroundColor: course.colors.belive}}>
          <Container>
            <Row>
              <Col md="6">
                <p>
                  <i>
                    <textarea
                      value={course.belive.text}
                      onChange={(e) => setBeliveText(e.target.value)}
                    />
                  </i>
                  <br />
                  <br />
                  <input
                    value={course.belive.auther}
                    onChange={(e) => setBeliveAuther(e.target.value)}
                  />
                </p>
              </Col>
              <Col md="6">
                <div class="file-upload">
                  <Image src={course.belive.image}></Image>
                  <input
                    type="file"
                    accept=".jpg, .png, .jpeg"
                    onChange={(e) => this.props.setBeliveImage(handleImage(e))}
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Belive);
// export default Belive;
