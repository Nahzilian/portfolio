import React from 'react'
import Tilty from 'react-tilty';

export default function Card(props) {    
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
        <div className="detailed-cards frosted-glass">
            <div className="detailed=card-title">{props.data?props.data.name:null}</div>
            <div className = 'detailed-card-body'>
                <div className = 'detailed-card-content'>
                    <ul>
                    {props.data && props.data.experience.length > 0 ?props.data.experience.map(x => <li>{x}</li>):null}
                    </ul>
                </div>
                <div className = 'detailed-card-languages'>
                    <ul>
                        {props.data && props.data.languages.length > 0 ?props.data.languages.map(x => <li>{x}</li>):null}
                    </ul>
                </div>
            </div>
        </div>
    )

}
