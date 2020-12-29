import React from 'react'
import Background from '../assets/pictures/plane-wing.jpg'
import Card from './Card'
import skillList from '../assets/data/skills.json'
export default function Modal(props) {
    const style = {
        backgroundImage: `url(${Background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    }
    const data = skillList[skillList.findIndex(x => parseInt(x.id) === parseInt(props.id))];
    if (data && data.is_company === true) {
        return (
            <div className="modal" style={props.style}>
                <div className="modal-content " style={style} >
                    <div className="content-side scrollbar" id = "custom-scroll-bar">
                        <span className="close" onClick={props.closeModal}>&times;</span>
                        <div className="upper-subtitle underline">
                            {data ? data.name : ""}
                        </div>
                        <div className="content-block">
                            {data ? data.content : ""}
                        </div>
                        <div className="coding-list">
                            {data? data.languages:""}
                        </div>
                        {data && data.side_projects.length > 0? 
                        <div className = "company-project">
                            {data.side_projects.map(x => <Card data = {x}/>)}
                        </div>:""
                        }
                    </div>
                    <div className="embeded-side">

                    </div>
                </div>
            </div>
        )
    }
    return (<div></div>)

}
