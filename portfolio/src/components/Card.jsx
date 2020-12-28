import React from 'react'
import Tilt from 'react-tilt'

export default function Card(props) {
    const tiltStyling = {
        reverse: true,
        max: 40,
        reset: true,
        easing: "cubic-bezier(.03,.98,.52,.99)",
    }
    const openModal = () => {

    }
    if (props.type === "short-display") {
        return (
            <Tilt className="card-short" options={tiltStyling} onClick = {openModal}>
                <div className="card-title">
                    <div className="overlay">
                        <div className="text">{props.title}</div>
                    </div>
                </div>
            </Tilt>
        )
    }
    return (
        <div className="card-title">
            <div className="overlay">
                <div className="text">Hello World</div>
            </div>
        </div>
    )

}
