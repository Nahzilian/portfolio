import React from 'react'
import Tilty from 'react-tilty';

export default function Card(props) {
    if (props.type === "short-display") {
        return (
            <Tilty reset reverse glare 
            className="card-title" 
            easing = {"cubic-bezier(.03,.98,.52,.99)"}
            maxGlare = {0.5}
            scale={1.05}
            style={{ transformStyle: 'preserve-3d', borderRadius:10 }}
            >
                <div style={{ transform: 'translateZ(30px)' }}>
                    <div className="text underline">{props.title}</div>
                </div>
            </Tilty>
        )
    }
    // return (
    //     <div className="card-title">
    //         <div className="overlay">
    //             <div className="text">Hello World</div>
    //         </div>
    //     </div>
    // )

}
