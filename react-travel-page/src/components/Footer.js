import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import '../css/Footer.css';

const Footer = () => {
    return (
        <section className="footer-section">
            <div className="footer-grid">
                <div className="footer-text-center">              
                    <h2 className="footer-heading">Company</h2>
                    <ul className="footer-list">
                        <li>About</li>
                        <li>Blog</li>
                        <li>Jobs</li>
                    </ul>
                </div>
                <div className="footer-text-center">
                    <h2 className="footer-heading">Support</h2>
                    <ul className="footer-list">
                        <li>Pricing</li>
                        <li>Guides</li>
                        <li>Call Center</li>
                        <li>Learn about our site</li>
                    </ul>  
                </div>
                <div className="footer-text-center">
                    <h2 className="footer-heading">Legal</h2>
                    <ul className="footer-list">
                        <li>Claims</li>
                        <li>Privacy</li>
                        <li>Terms & Conditions</li>
                        <li>Rights</li>
                        <li>Disclaimer</li>
                    </ul>
                </div>
                <div className="newsletter">
                    <h2 className="newsletter-heading">Subscribe to our Newsletter</h2>
                    <p className="newsletter-subheading">The latest news, articles, and promotions, sent to your inbox weekly</p>
                    <form className="newsletter-form">
                        <input className="newsletter-input"
                            type="email"
                            placeholder="Enter Email"
                        />
                        <button className="newsletter-button">Subscribe Now</button>
                    </form>
                </div>
            </div>

            <div className="footer-bottom">
                <p className="footer-company">2024 Koala Travels, LLC, All rights Reserved</p>
                <div className="footer-icons">
                    <FaFacebook />
                    <FaInstagram />
                    <FaTwitter />
                    <FaYoutube />
                </div>
            </div>
        </section>
    )
}

export default Footer