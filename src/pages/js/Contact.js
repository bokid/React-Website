import React from 'react';
import "../css/contact.css";

const Contact = () => {
    // Function to handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent default form submission behavior

        // Collect form data
        const formData = {
            name: event.target.name.value,
            _replyto: event.target._replyto.value,
            message: event.target.message.value,
            _subject: event.target._subject.value,
        };

        // Send form data to your server-side proxy
        try {
            const response = await fetch('http://localhost:3001/submit-form', { // Use your server URL here
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) throw new Error('Form submission error');
            // Handle success (e.g., showing a success message)
            alert('Form submitted successfully!');
        } catch (error) {
            // Handle error (e.g., showing an error message)
            console.error('Submission error:', error);
            alert('Error submitting form.');
        }
    };

    return (
        <div className="form">
            <form id="fs-frm" name="simple-contact-form" acceptCharset="utf-8" onSubmit={handleSubmit}>
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