import React from 'react';
import { Link } from 'react-router-dom';
import "../css/footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>Thank you for visiting my website!</p>
                {/* <p>Feel free to <Link to='/contact'>reach out to me</Link> for any inquiries or collaborations.</p> */}
                <p>&copy; 2024 Benjamin Orr. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;