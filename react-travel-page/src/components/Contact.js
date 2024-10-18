import React from "react";
import '../css/Contact.css';

const Contact = () => {
    return (
        <section className="contact">
            <div className="contact-container">
                <div className="text-center">
                    <h2 className="heading-contact">Contact Us</h2>
                    <p className="contact-sub">Feel free to contact us with any problems or feedbacks</p>
                </div>
                <div className="form-container">
                    <form className="form">
                        <input className="name"
                            type="text"
                            placeholder="Enter your Name" 
                        />
                        <input className="email"
                            type="text"
                            placeholder="Enter your Email"
                        />
                        <textarea className="message"
                            type="message"
                            placeholder="Enter your Message"
                            rows="10"
                        />
                        <button className="contact-button">Send us a Message</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact