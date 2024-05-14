import React from 'react';
import "../css/contact.css";

const Contact = () => {
    return (
        <div className="form">
            <form id="fs-frm" name="simple-contact-form" acceptCharset="utf-8" action="https://formspree.io/f/xdoqbjqj" method="post">
            <fieldset id="fs-frm-inputs">
                <label htmlFor="full-name">Full Name</label>
                <input type="text" name="name" id="full-name" placeholder="First and Last" required />

                <label htmlFor="email-address">Email Address</label>
                <input type="email" name="_replyto" id="email-address" placeholder="email@domain.com" required />

                <label htmlFor="message">Message</label>
                <textarea rows="5" name="message" id="message" placeholder="Please provide some details about your inquiry" required />

                <input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission" />
            </fieldset>
            <div className='button-container'>
            <input type="submit" value="Send" />
            </div>
        </form>
        </div>
    );
};

export default Contact;