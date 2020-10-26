import React from 'react';
import './Footer.css';

const Footer = (props) => (
<div className="footer-wrapper">
    <div className="footer">
    <span>Questions? Call 000-800-040-1843</span>
    <div className="footer__details">
    <a href="#" className="footer__links">FAQ</a>
    <a href="#" className="footer__links">Help Centre</a>
    <a href="#" className="footer__links">Account</a>
    <a href="#" className="footer__links">Media Centre</a>
    <a href="#" className="footer__links">Investor Relations</a>
    <a href="#" className="footer__links">Jobs</a>
    <a href="#" className="footer__links">Ways to Watch</a>
    <a href="#" className="footer__links">Terms of Use</a>
    <a href="#" className="footer__links">Privacy</a>
    <a href="#" className="footer__links">Cookie Preferences</a>
    <a href="#" className="footer__links">Corporate Information</a>
    <a href="#" className="footer__links">Contact Us</a>
    <a href="#" className="footer__links">Speed Test</a>
    <a href="#" className="footer__links">Legal Notices</a>
    <a href="#" className="footer__links">Netflix Originals</a>
    </div>
    <select className="selector">
        <option>English</option>
        <option>हिंदी</option>
    </select>
    <p className="copyright">Netflix India</p>
    </div>
</div>
)

export default Footer;