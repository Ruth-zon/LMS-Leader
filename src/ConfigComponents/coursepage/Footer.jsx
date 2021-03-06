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
function Footer(props) {
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
  return (
    <section
      id="footer"
      onClick={(e) => {
        if (e.target === e.currentTarget)
          props.setSectionConfig({name: 'course_footer'});
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
              <Col key="key" xs="12" sm="6" md="3">
                <h5>{col.name}</h5>
                <ul className="list-unstyled quick-links">
                  {col.array.map((value, key) => {
                    return (
                      <li key={key}>
                        <a>{value}</a>
                      </li>
                    );
                  })}
                </ul>
              </Col>
            );
          })}
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
                  (share, key) => {
                    return (
                      <>
                        {props.school.footerBottom.show[share[0]] && (
                          <li className="list-inline-item" key={key}>
                            <a>{iconShare(share[0])}</a>
                          </li>
                        )}
                      </>
                    );
                  }
                )}
              </ul>
            </div>
          </Col>
          <hr />
        </Row>
      </Container>
    </section>
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(Footer);
