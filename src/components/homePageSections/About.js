import React, { Component } from 'react';
import '../../css/About.css'
import ProfilePhoto from '../../assets/prof-pic.png'

class AboutSection extends Component {
    render() {
        return (
            <div id={"About"} className={"section"}>
                <div className="About-photo-container">
                    <img src={ProfilePhoto} className="About-photo" alt={"Riki Fameli profile"}/>
                    <div className="About-text">
                        <h1>Hi, I'm Riki</h1>
                        <p>
                        I’m a junior studying Computer Science at Brown University. 
                        Most of my experience lies in web development and user service, and I'm interested in the ways that computing
                        can be used to tackle the problems of our generation, especially regarding mental health.
                        Outside of class and work, I perform with the aerial arts team and am also interested in calisthenics and dance!
                        </p>
                        
                    </div>
                </div>
            </div>
        )

    }
}
export default AboutSection;