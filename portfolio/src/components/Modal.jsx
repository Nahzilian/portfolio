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
                    <div className="content-side scrollbar" id="custom-scroll-bar">
                        <span className="close" onClick={props.closeModal}>&times;</span>
                        <div className="upper-subtitle underline">
                            {data ? data.name : ""}
                        </div>
                        <div className="content-block">
                            {data ? data.content : ""}
                        </div>
                        {data ?
                            <div className="coding-list">
                                {data.languages.length > 0?data.languages.map(x => <div>{x}</div>):null}
                            </div> : null}
                    </div>
                    <div className="embeded-side">
                        {data && data.side_projects.length > 0 ?
                            <div className="company-project">
                                {data.side_projects.map(x => <Card data={x} />)}
                            </div> : ""
                        }
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className="modal" style={props.style}>
            <div className="modal-content " style={style} >
                <div className="content-side scrollbar" id="custom-scroll-bar">
                    <span className="close" onClick={props.closeModal}>&times;</span>
                    <div className="upper-subtitle underline">
                        {data ? data.name : ""}
                    </div>
                    <div className="content-block">
                        {data ? data.content : null}
                    </div>
                    {data ?
                        <div className="coding-list">
                            {data.languages ? data.languages : null}
                        </div> : null}
                    <div className="experience-blk">
                        {data ? data.experience.map(x => <div>{x}</div>) : null}
                    </div>
                    <div className="embeded-side">
                        {data ? <iframe src={data.urls[0]} width="100%" height="100%"></iframe> : null}
                    </div>
                </div>

            </div>
        </div>
    )

}
