import React from 'react';
import { connect } from 'react-redux';
import './frame.css'
import history from '../../history';
import { actions } from '../../Store/actions';
import { useParams } from 'react-router-dom';
import { FaSignOutAlt } from 'react-icons/fa';
import { signOut } from '../../login/firebase';


function mapStateToProps(state) {
    return {
        styles: state.stylesReducer.styles,
        user: state.userReducer.user,
    };
}

const mapDispatchToProps = (dispatch) => ({
    setConfigurator: () => dispatch(actions.setConfigurator()),
    setThumbtack: () => dispatch(actions.setThumbtack()),
});

function Top_frame(props) {
    let { name } = useParams();
    return (
        <div id="top_frame" className="row d-flex justify-content-between align-items-right mx-0">
            <a id="leader_logo" className="d-flex" >
                <img src={'./img_from_xd/leader-logo.png'} id="img_logo" className="m-auto"></img>
            </a>
            <div id="top_frame_icons" className="mr-3">
                <img src={props.user.photoURL} onClick={() => {history.push('/' + name + '/profile')}
                } className="logo-img" />
                <FaSignOutAlt id="out" onClick={signOut}/>
                <img src={'./img_from_xd/thumbtack-solid.svg'} id="thumbtack" className={props.styles.thumbtack ? "rotateThumbtack" : ""} onClick={() => props.setThumbtack()} />
                <img src={'./img_from_xd/menu.png'} id="menu" className="" onClick={() => props.setConfigurator()} />
            </div>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Top_frame);

