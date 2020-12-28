import {
  FaGoogle,
  FaTwitter,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
  FaReddit,
} from 'react-icons/all';
// import './courseConfig/node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import '../../ViewComponents/homepage/App.css';
import {connect} from 'react-redux';
import history from '../../history';
import {actions} from '../../Store/actions';
function mapStateToProps(state) {
  return {
    school: state.schoolReducer.school,
  };
}
const mapDispatchToProps = (dispatch) => ({
  setSectionConfig: (name) => dispatch(actions.setSectionConfig(name)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(function Footer(props) {
  const iconShare = (share) => {
    switch (share) {
      case 'instegram':
        return <FaInstagram />;
      case 'facebook':
        return <FaFacebook />;
      case 'whatsapp':
        return <FaWhatsapp />;
      case 'twitter':
        return <FaTwitter />;
      case 'linkedin':
        return <FaLinkedin />;
      case 'youtube':
        return <FaYoutube />;
      case 'reddit':
        return <FaReddit />;
      case 'google':
        return <FaGoogle />;
      default:
        break;
    }
  };
  const listIcons = () => {
    // for
  };
  return (
    <section
      id="footer"
      onClick={(e) => {
        if (e.target === e.currentTarget)
          props.setSectionConfig({name: 'footer'});
      }}
      className="hover-config"
      style={{backgroundColor: props.school.colors.footer}}
    >
      <Container>
        <Row
          text="center"
          className="text-center text-xs-center text-sm-left text-md-right"
        >
          {props.school.footer.map((col, key) => {
            return (
              <Col
              key={key}
                xs="12"
                sm="6"
                md="3"
                onClick={() =>
                  props.setSectionConfig({name: 'footer-col', id: key})
                }
                className="hover-config"
              >
                <h5>{col.name}</h5>
                <ul className="list-unstyled quick-links">
                  {col.array.map((value, i) => {
                    return (
                      <li key={i}>
                        <a 
                        // onClick={() => history.push(col.links[key])}
                        >
                          {value}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </Col>
            );
          })}
          {/* <Col xs="12" sm="3" md="3">
            <h5>Company</h5>
            <ul className="list-unstyled quick-links">
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Careers</a>
              </li>
              <li>
                <a href="">Press</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
              <li>
                <a href="">Affiliates</a>
              </li>
            </ul>
          </Col>
          <Col xs="12" sm="3" md="3">
            <h5>Community</h5>
            <ul className="list-unstyled quick-links">
              <li>
                <a href="">Go Premium</a>
              </li>
              <li>
                <a href="">Team Plans</a>
              </li>
              <li>
                <a href="">Refer a Friend</a>
              </li>
              <li>
                <a href="">Gift Cards</a>
              </li>
              <li>
                <a href="">Scholarships</a>
              </li>
            </ul>
          </Col>
          <Col xs="12" sm="3" md="3">
            <h5>Teaching</h5>
            <ul className="list-unstyled quick-links">
              <li>
                <a href="">Become a</a>
              </li>
              <li>
                <a href="">Teacher</a>
              </li>
              <li>
                <a href="">Teaching</a>
              </li>
              <li>
                <a href="">Academy </a>
              </li>
              <li>
                <a href="" title="Design and developed by">
                  Teacher
                </a>
              </li>
            </ul>
          </Col>
          <Col xs="12" sm="3" md="3">
            <h5>Support</h5>
            <ul className="list-unstyled quick-links">
              <li>
                <a href="">Support</a>
              </li>
              <li>
                <a href="">Contact Us</a>
              </li>
              <li>
                <a href="">System Requirements</a>
              </li>
              <li>
                <a href="">Register Activation </a>
              </li>
              <li>
                <a href="" title="Design and developed by">
                  Key
                </a>
              </li>
            </ul>
          </Col> */}
        </Row>
        <Row
          onClick={(e) => {
            props.setSectionConfig({name: 'footer'});
          }}
          className="hover-config text-center text-xs-center text-sm-left text-md-left"
        >
          <Col xs="12" sm="12" md="12" mt="2">
            <div className="all-right">
              {props.school.footerBottom.text}
              <ul className="list-unstyled list-inline social text-center">
                {Object.entries(props.school.footerBottom.share).map(
                  (share,key) => {
                    return (
                      <>
                        {props.school.footerBottom.show[share[0]] && (
                          <li className="list-inline-item" key={key}>
                            <a 
                            // onClick={() => history.push(share[1])}
                            >
                              {iconShare(share[0])}
                            </a>
                          </li>
                        )}
                      </>
                    );
                  }
                )}
                {/* <li className="list-inline-item">
                  <a href="">
                    <FaFacebook />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="">
                    <FaTwitter />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="">
                    <FaGoogle />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="">
                    <FaLinkedin />
                  </a>
                </li> */}
              </ul>
            </div>
          </Col>
          <hr />
        </Row>
      </Container>
    </section>
  );
});
// export default Footer;
