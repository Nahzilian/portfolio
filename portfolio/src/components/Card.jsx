import React from 'react'
import Tilty from 'react-tilty';

export default function Card(props) {

    const shortStyle = {
        backgroundImage: `url(${props.bg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    }
    if (props.type === "short-display") {
        return (
            <Tilty 
            className="card-title" 
            easing = {"cubic-bezier(.03,.98,.52,.99)"}
            reset reverse glare 
            maxGlare = {0.5}
            scale={1.05}
            gyroscope = {false}
            style={{ transformStyle: 'preserve-3d', transform: 'perspective(1000px)', display: 'flex'}}
            >
                <div style={{ transform: 'translateZ(30px)' }}>
                    <div className="text underline">{props.title}</div>
                </div>
            </Tilty>
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
