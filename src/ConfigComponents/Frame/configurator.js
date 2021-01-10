import React from 'react';
import './frame.css'

function Configurator(props) {
    return (
        <div id="wrap-configurator" className="pt-4 px-2">
            <div
                id="head-configurator"
                className="row d-flex justify-content-between m-0 mb-3 mt-1"
            >
                <span className="material-icons">settings</span>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21.5 21.5">
                    <defs></defs>
                    <path
                        className="a"
                        d="M8,18.75A10.75,10.75,0,1,0,18.75,8,10.75,10.75,0,0,0,8,18.75Zm10.75,7.976V10.774a7.976,7.976,0,1,1,0,15.952Z"
                        transform="translate(-8 -8)"
                    ></path>
                </svg>
            </div>
            {props.children}
        </div>
    )
}

export default Configurator;
