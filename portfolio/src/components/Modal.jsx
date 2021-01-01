import React from 'react'
import Background from '../assets/pictures/plane-wing.jpg'
import Card from './Card'
import skillList from '../assets/data/skills.json'
export default function Modal(props) {
    const style = {
        backgroundImage: `url(${props.bg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    }
    const data = skillList[skillList.findIndex(x => parseInt(x.id) === parseInt(props.id))];
    if (data && data.is_company === true) {
        return (
            <div className="modal" style={props.style}>
                {data ?
                    <div className="modal-content " style={style} >
                        <div className="content-side" >
                            <span className="close" onClick={props.closeModal}>&times;</span>
                            <div className="upper-subtitle underline">
                                {data.name ? data.name : ""}
                            </div>
                            <div className="content-block">
                                {data.content ? data.content : ""}
                            </div>
                            <div className="coding-list">
                                {data.languages.length > 0 ? data.languages.map(x => <div>{x}</div>) : null}
                            </div>
                        </div>
                        <div className="embeded-side scrollbar"  id="custom-scroll-bar">
                            {data.side_projects.length > 0 ?
                                <div className="company-project">
                                    {data.side_projects.map(x => <Card data={x} />)}
                                </div> : null
                            }
                        </div>
                    </div> : null}
            </div>
        )
    }
    return (
        <div className="modal" style={props.style}>
            <div className="modal-content " style={style} >
                <div className="content-side" >
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
                </div>
                <div className="embeded-side">
                    {data && data.urls.length > 0 ? <iframe src={data.urls[0]} width="100%" height="100%"></iframe> : null}
                </div>
            </div>
        </div>
    )

}
