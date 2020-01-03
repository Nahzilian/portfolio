import React, { Component } from 'react'

export class Projects extends Component {
    render() {

        class dataProject{
            constructor(name, content){
                this.name = name;
                this.content = content;
            }
        }
        var name = ["vBiz","Term Project","Vibe"];

        const content = ['one', 'two', 'three'];

        return (
            <div className = "bigboi">
                
                <div className = "container">
                <h1 style ={{color:"blue"}}>My Projects</h1>
                <br/>
                    <div className = "row" style = {{color:"black"}}>
                        {name.map((value, index) => {
                            return (
                                <div className = "col-sm">
                                    <div className="card" style={{width: "18rem"}}>
                                        <div className="card-body">
                                            <h5 className="card-title" key={index}>{value}</h5>
                                            <p className="card-text"></p>
                                        </div>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item"><strong>Framework used</strong></li>
                                            <li className="list-group-item">Django</li>
                                            <li className="list-group-item">Reactjs</li>
                                        </ul>
                                        <div className="card-body">
                                            <a href="#" className="card-link">Visit website</a>
                                            <a href="#" className="card-link">View on Github</a>
                                        </div>
                                        </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects
