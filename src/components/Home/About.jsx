import React from 'react';
import "./About.scss"
import { useEffect, useRef } from 'react';
import contactme from "../../assets/Avatar.jpg";
import { init } from 'ityped';


function About() {
    const textRef = useRef();

    useEffect (()=>{
       init(textRef.current, {
        
        backDelay: 1500,
        backSpeed: 60,
        strings: ["Java Developer", "Automation Tester", "Full stack developer"],   
       });

    }, []);

    return (
        <div className="about" id="about">
            <div className="left">
                <div className="imgContainer">
                    <img src={contactme} alt="Maha Profile Pic" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi there, I'm</h2>
                    <h1>Mahalakshmi Rajendran</h1>
                    <h3>Open source <span ref={textRef}></span></h3>
                    <p>Technically advanced Java Developer with 7+ years of experience in designing, developing, and delivering user-centric software applications using Java/J2EE technologies. Offering strong expertise in multiple programming languages, including JavaScript, HTML. Seeking to secure a challenging position in the software industry. I am having 5 months experience in Automation testing using Selenium with xunit framework.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;