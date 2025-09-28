import React from 'react';
import ReactDOM from "react-dom";
import "./Modal.css";

const Backdrop = props=>{
    return <div className='backdrop'></div>
}
const ModalOverlay = props=>{
    return <div className='modal'>
        <div className='content'>{props.children}</div>
    </div>
}

function Modal(props) {
    const portalElement = document.getElementById("Overlays");
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop/>,portalElement)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portalElement)}
        </React.Fragment>
    )
}

export default Modal
