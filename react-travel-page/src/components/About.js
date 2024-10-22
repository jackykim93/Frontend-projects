import React from "react";
import '../css/About.css';

const About = () => {
    return (
        <section className="section">
            <div className="content-container">
                <div className="text-content">
                    <h2 className="heading">Koala Travels</h2>
                    <h3 className="sub-heading">Anywhere, Anytime, Anyway</h3>
                    <p className="introduction">
                        Use Koala Travels to make your travel planning easier & hassle free
                    </p>
                    <div className="mission-content">
                        <p className="ourMission">Our Misson for Koala Travels</p>
                        <ul className="missionList">
                            <li>Provide adequete information for your travels</li>
                            <li>Make planning easy and enjoyable</li>
                            <li>Do all the planning on one site</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;