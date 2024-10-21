import React from "react";
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { GiKoala } from "react-icons/gi";
import '../css/Navbar.css';

const Navbar = () => {
    return(
        <nav className="navbar">
            <div className="navbar-heading">
                <div className="navbar-logo">
                    <GiKoala />
                </div>
                <h1>Koala Travels</h1>
            </div>
            <ul className="nav-items">
                <li><RouterLink to="/">Home</RouterLink></li>
                <li><RouterLink to="/about">About</RouterLink></li>
                <li><ScrollLink to="highcharts-container" smooth={true} duration={500}>Worldmap</ScrollLink></li>
                <li><ScrollLink to="swiper-section" smooth={true} duration={500}>Recommendations</ScrollLink></li>
                <li><ScrollLink to="contact" smooth={true} duration={500}>Contact</ScrollLink></li>
            </ul>
            <div className="navbar-buttons">
                <button className="signin">Sign In</button>
                <button className="signup">Sign Up</button>
            </div>
        </nav>
    )
}

export default Navbar;