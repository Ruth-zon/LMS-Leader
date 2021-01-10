import React from 'react';
import { connect } from 'react-redux';
import './frame.css'

function mapStateToProps(state) {
    return {
        styles: state.stylesReducer.styles,
    };
}

function Stage(props) {
    return (
        <div id="stage" className={props.styles.configurator ? "col-md-10 d-flex" : "col-md-12 d-flex"}>
            <div id="landingPage_edit" className="m-auto">
                {props.children}
            </div>
        </div>
    )
}
export default connect(mapStateToProps, null)(Stage)
