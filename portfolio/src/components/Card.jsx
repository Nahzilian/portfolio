import React from 'react'
import Tilt from 'react-tilt'

export default function Card(props) {
    const tiltStyling = {
        reverse: true,
        max: 40,
        reset: true,
        easing: "cubic-bezier(.03,.98,.52,.99)",
    }
    if (props.type === "short-display") {
        return (
            <Tilt className="card-short" options={tiltStyling}>
                <div className="card-title">
                    {props.title}
                </div>
            </Tilt>
        )
    }
    return (
        <div className="card-title">
            {props.title}
        </div>
    )

}
