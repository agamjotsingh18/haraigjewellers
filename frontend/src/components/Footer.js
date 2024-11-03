import React from 'react';
import './Footer.css';
import { FaEnvelope, FaWhatsapp, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>Gold API</h3>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#know">Know Us</a></li>
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="#faqs">FAQs</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Policies</h3>
          <ul>
            <li><a href="#returns">30-Day Returns</a></li>
            <li><a href="#exchange">Lifetime Exchange</a></li>
            <li><a href="#buy-pack">Buy Pack</a></li>
            <li><a href="#terms">Terms & Conditions</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Services</h3>
          <ul>
            <li><a href="#repairs">Repairs</a></li>
            <li><a href="#personalization">Personalisation</a></li>
            <li><a href="#gifting">Art of Gifting</a></li>
            <li><a href="#lending">Lending</a></li>
            <li><a href="#sip">Gold SIP and Reward</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Features</h3>
          <ul>
            <li><a href="#subscription">Gold Subscription</a></li>
            <li><a href="#investment">Gold Investment</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Contact</h3>
          <ul>
            <li><FaEnvelope /> <a href="mailto:hello@harmaig.com">hello@harmaig.com</a></li>
            <li><FaWhatsapp /> <a href="tel:+917021920836">+91 7021920836</a></li>
            <li><FaInstagram /> <a href="https://instagram.com/harmaig_jewellers" target="_blank" rel="noopener noreferrer">@harmaig_jewellers</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Harmaig Jewellers. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
