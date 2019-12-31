import React, { Component } from 'react';
import frontimg from './frontimg.jpg';
import $ from 'jquery'; 


export class Content extends Component {
    clicked = () => {
        console.log("clicked");
        $(document).ready(function(){
            $("#icon").click(function(){
              $("#panel").slideToggle("slow");
            });
          });
        console.log("loaded");
    }

    render() {
        return (
            <div id = "banner">
                
                <div className = "container">
                    
                    <div className = "imgCont">
                        <img src={frontimg}  alt="Test" width = "100%" height ="100%" />
                    </div>

                    <div>
                        <i onClick = {this.clicked} className="fas fa-circle-notch fa-5x"id = "icon"></i>
                        <div id = "panel">
                            Hello world
                        </div>    
                    </div>
                    
                    <div className="centered">
                        <h1>Duc Nguyen</h1>
                        <div>
                            2nd year student at Ryerson University
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        )
    }
}

export default Content
