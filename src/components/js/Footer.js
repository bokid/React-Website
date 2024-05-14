import React from 'react';
import "../css/footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>Thank you for visiting my website!</p>
                <p>Feel free to <a href='/contact'>reach out to me</a> for any inquiries or collaborations.</p>
                <p>&copy; 2024 Benjamin Orr. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;