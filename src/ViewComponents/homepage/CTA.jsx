import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from '../../Store/actions';
import '../../ViewComponents/homepage/App.css';

function mapStateToProps(state) {
  return {
    school: state.schoolReducer.school,
    user:state.userReducer.user
  };
}

class CTA extends Component {

  render() {
    return (
      <div>
        {this.props.user.uid? <section
          className="cta white"
          style={{ backgroundColor: this.props.school.colors.CTA }}
        >
          <h1 >
            {this.props.school.CTA.title}
          </h1>
          <h4>
            <em>
              <p>    {this.props.school.CTA.text}</p>
   
            </em>
          </h4>
          <button>Get Started</button>
        </section>:null}
      </div>
    );
  }
}
// export default CTA;
export default connect(mapStateToProps)(CTA);
