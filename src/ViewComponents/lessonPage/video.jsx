import React, {Component} from 'react';
import '../../ViewComponents/coursepage/course.css';
import ReactPlayer from 'react-player';
import YouTube from 'react-youtube';
import {connect} from 'react-redux';
// import {Player} from 'video-react';

const gapi = window.gapi;
function mapStateToProps(state) {
  return {
    lesson: state.lessonReducer.lesson,
    user: state.userReducer.user,
    course: state.courseReducer.course,
  };
}

class Video extends Component {
  handleViews() {
    try {
      const finish = this.props.user.schoolsEnrolled
        .find((s) => s.schoolId == this.props.course.school_id)
        .coursesEnrolled.find((c) => c.courseId == this.props.course._id)
        .finishedLessons.find((s) => s._id == this.props.lesson._id);
      if (finish == false)
        this.props.updateViewsForStudent(this.props.lesson._id);
    } catch (e) {}
  }

  render() {
    return (
      <>
        <div className={'content'}>
          {/* <ReactPlayer url="https://www.youtube.com/watch?v=wzR0G67-FBM&feature=emb_logo&ab_channel=במהכהלכה" />
          dd */}
          {/* <button onclick={() => this.authenticate().then(this.loadClient)}>
            authorize and load
          </button>
          <button onclick={this.execute}>execute</button> */}
          {/* <YouTube
            videoId={this.props.lesson.lesson_url}
            opts={opts}
            onReady={this._onReady}
          /> */}
          {/* <Player>
            <source src="https://www.youtube.com/watch?v=aS-4U5GgdjM&feature=emb_logo&ab_channel=AvrahamFried%D7%90%D7%91%D7%A8%D7%94%D7%9D%D7%A4%D7%A8%D7%99%D7%93" />
          </Player> */}
          <ReactPlayer
            volume={1}
            muted={this.props.lesson.settings.muted}
            controls={this.props.lesson.settings.controls}
            loop={this.props.lesson.settings.loop}
            url={this.props.lesson.lesson_url}
            onReady={() => this.handleViews()}
          />
        </div>
        {/* <div className={"video content"+this.props.view? 'margin-view':''}></div> */}
      </>
    );
  }
}
export default connect(mapStateToProps, null)(Video);
// export default Video;
