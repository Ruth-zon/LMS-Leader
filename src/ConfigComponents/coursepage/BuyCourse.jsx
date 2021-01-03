import React, {Component} from 'react';
import '../../ViewComponents/coursepage/course.css';
import {Card, Col, Button, Image, ListGroup} from 'react-bootstrap';
import {connect} from 'react-redux';
import {actions} from '../../Store/actions';
import {handleImage} from '../handleImage';

const mapDispatchToProps = (dispatch) => ({
  setSectionConfig: (name) => dispatch(actions.setSectionConfig(name)),
  setImage: (data) => dispatch(actions.setImage(data)),
  setPrice: (data) => dispatch(actions.setPrice(data)),
  setPrevPriceTime: (data) => dispatch(actions.setPrevPriceTime(data)),
  setPrevPrice: (data) => dispatch(actions.setPrevPrice(data)),
  setCourseInfo: (name) => dispatch(actions.setCourseInfo(name)),
  changeFont: (e) => dispatch(actions.setTitleFont(e)),
});

function mapStateToProps(state) {
  return {
    course: state.courseReducer.course,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(function BuyCourse(props) {
  // let course = props.data;
  const {
    course,
    setCourseInfo,
    setSectionConfig,
    setPrevPrice,
    setPrevPriceTime,
    // setLanguage,
    setPrice,
    // setAccess,
    // setCertificate,
    // setUse,
  } = props;
  return (
    <div
      className="buy-course shadow hover-config mt-5"
      onClick={(e) => {
        if (e.target === e.currentTarget)
          setSectionConfig({name: 'buy_course'});
      }}
    >
      <Card
        style={{width: '18rem'}}
        className="hover-config "
        onClick={(e) => {
          if (e.target === e.currentTarget)
            setSectionConfig({name: 'buy_course'});
        }}
      >
        <div className="file-upload hover-img">
          <Card.Img variant="top" src={course.image} />
          <input
            type="file"
            accept=".jpg, .jpeg, .png"
            onChange={(e) => handleImage(e, props.setImage)}
          />
        </div>
        <Card.Body
          onClick={(e) => {
            if (e.target === e.currentTarget)
              setSectionConfig({name: 'buy_course'});
          }}
        >
          {course.show.price && (
            <div
              onClick={(e) => {
                setSectionConfig({name: 'buy_course'});
              }}
            >
              <Card.Title className="price">
                Price:
                <input
                  value={course.price}
                  onChange={(e) => setPrice(e.target.value)}
                />
                {course.show.prev_price && (
                  <span>
                    <input
                      value={course.prev_price}
                      onChange={(e) => setPrevPrice(e.target.value)}
                    />
                  </span>
                )}
              </Card.Title>
              {course.show.prev_price && course.show.prev_price_time && (
                <Card.Text>
                  <Image src="./img_from_xd/orange clock.svg"></Image>
                  <input
                    className="width-80"
                    value={course.prev_price_time}
                    onChange={(e) => setPrevPriceTime(e.target.value)}
                  />
                  {course.prev_price_type}
                  left at this price
                </Card.Text>
              )}
            </div>
          )}
          <Button
            variant="primary"
            block
            style={{
              backgroundColor: props.course.colors.button,
              borderColor: props.course.colors.fontButton,
              color: props.course.colors.fontButton,
            }}
            onClick={(e) => {
              props.setSectionConfig({name: 'course_buttons'});
            }}
          >
            Enroll Now
          </Button>

          <ListGroup className="card-list" variant="flush">
            <ListGroup.Item
              onClick={(e) => {
                setSectionConfig({name: 'buy_course_info'});
              }}
              className="hover-config"
            >
              <h5>This course includes</h5>
              {course.course_info.map((value, key) => {
                return (
                  <p>
                    <Image src={value.icon}></Image>
                    <input
                      value={value.name}
                      onChange={(e) =>
                        setCourseInfo({
                          id: key,
                          key: 'name',
                          value: e.target.value,
                        })
                      }
                    />
                  </p>
                );
              })}
              {/*{course.show.language && (
                <p>
                  <Image src="./img_from_xd/book.svg"></Image>
                  Language -{' '}
                  <input
                    value={course.language}
                    onChange={(e) => setLanguage(e.target.value)}
                  />
                </p>
              )}
              {course.show.use && (
                <p>
                  <Image src="./img_from_xd/screen.svg"></Image>
                  <input
                    value={course.use}
                    onChange={(e) => setUse(e.target.value)}
                  />
                </p>
              )}
              {course.show.access && (
                <p>
                  <Image src="./img_from_xd/timer.svg"></Image>
                  <input
                    value={course.access}
                    onChange={(e) => setAccess(e.target.value)}
                  />
                </p>
              )}
              {course.show.certificate && (
                <p>
                  <Image src="./img_from_xd/other.svg"></Image>
                  <input
                    value={course.certificate}
                    onChange={(e) => setCertificate(e.target.value)}
                  />
                </p>
              )}*/}
            </ListGroup.Item>

            {/* <ListGroup.Item>
              <h6>Training 5 or more people?</h6>Get your team access to 3500+
              top courses anytime.
              <span className=" card-text"> Contact our sale</span>
            </ListGroup.Item> */}
            <ListGroup.Item
              onClick={(e) => {
                setSectionConfig({name: 'buy_course_share'});
              }}
              className="pointer hover-config"
            >
              <h6>Share this course</h6>
              {course.show.share.instegram && (
                <Image src="./img_from_xd/instagram.svg"></Image>
              )}
              {course.show.share.facebook && (
                <Image src="./img_from_xd/facebook (1).svg"></Image>
              )}
              {course.show.share.whatsapp && (
                <Image src="./img_from_xd/whatsapp (1).svg"></Image>
              )}
              {course.show.share.twitter && (
                <Image src="./img_from_xd/twitter (1).svg"></Image>
              )}
              {/* {course.show.share.linkedin&&  <Image src="./img_from_xd/linkedin (1).svg"></Image> } */}
              {course.show.share.youtube && (
                <Image src="./img_from_xd/youtube (1).svg"></Image>
              )}
              {course.show.share.reddit && (
                <Image src="./img_from_xd/reddit.svg"></Image>
              )}
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </div>
  );
});

// export default BuyCourse;
