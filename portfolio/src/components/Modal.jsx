import React from 'react'

export default function Modal(props) {
    
    return (
        <div className="modal" style = {props.style} >
            <div className="modal-content">
                <span className="close" onClick = {props.closeModal}>&times;</span>
                <p>Some text in the Modal..</p>
            </div>
        </div>
    )
}
