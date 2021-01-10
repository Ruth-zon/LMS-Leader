import React, {Component} from 'react';
import {connect} from 'react-redux';
import {actions} from '../../../Store/actions';
import '../../../ViewComponents/coursepage/course.css';

function mapStateToProps(state) {
  return {
    course: state.courseReducer.course,
  };
}

const mapDispatchToProps = (dispatch) => ({
  setSectionConfig: (name) => dispatch(actions.setSectionConfig(name)),
  setDescription: (data) => dispatch(actions.setDescription(data)),
  });

class Overview extends Component {
  render() {
    let data = this.props.course.description;
    return (
      <>
        <div onClick={()=> this.props.setSectionConfig({name: 'course_overview'})} className="overview hover-config">
          {data.map((value, key) => {
            return (
              <>
                <h5>
                  <input
                    onChange={(e) =>
                      this.props.setDescription({
                        id: key,
                        value: e.target.value,
                        key: 'header',
                      })
                    }
                    value={value.header}
                  ></input>
                </h5>
                <h6>
                  <textarea
                    onChange={(e) =>
                      this.props.setDescription({
                        id: key,
                        value: e.target.value,
                        key: 'text',
                      })
                    }
                    value={value.text}
                  ></textarea>
                </h6>
              </>
            );
          })}
        </div>
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Overview);
