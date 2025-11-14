/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../App.css';
import Sikharagra_logo from '../assets/Sikharagra_logo.png';

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-section footer-contact">
            <div className="footer-logo">
              <img src={Sikharagra_logo} alt="Sikharagra Logo" style={{ maxWidth: '200px', height: 'auto' }} />
            </div>
            <ul className="contact-list">
              <li className="contact-item">
                <i className="fas fa-map-marker-alt contact-icon"></i>
                <span>Flat :-501, Cluster_balanagar 14 Sri Krishna Villa, A.S.Raju Nagar, Vivekananda Nagar, Kukatpally, Hyderabad, Telangana 500072</span>
              </li>
              <li className="contact-item">
                <i className="fas fa-phone contact-icon"></i>
                <span>+91 9949806677</span>
              </li>
              <li className="contact-item">
                <i className="fas fa-envelope contact-icon"></i>
                <span>Sikharagradevelopers@gmail.com</span>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#Listings">Listings</a></li>
              <li><a href="#Services">Services</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#Become_a_Agent">Become a Agent</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Discovery</h3>
            <ul>
              <li><a href="#">Hyderabad</a></li>
              <li><a href="#">Chennai</a></li>
              <li><a href="#">Banglore</a></li>
              <li><a href="#">Nellore</a></li>
              <li><a href="#">India</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <div className="newsletter">
              <h3>Subscribe to our newsletter</h3>
              <form className="newsletter-form">
                <input type="email" placeholder="Email Address" required />
                <button type="submit" className="newsletter-btn">
                  <i className="fas fa-arrow-right"></i>
                </button>
              </form>
            </div>
            <h3>Follow us on</h3>
            <div className="social-icons">
              <a href="https://www.facebook.com/profile.php?id=61565652440210"><i className="fab fa-facebook-f"></i></a>
              <a href="https://www.instagram.com/sikharagra/"><i className="fab fa-instagram"></i></a>
              <a href="https://www.linkedin.com/in/sikharagra-developers-a12a97315/"><i className="fab fa-linkedin-in"></i></a>
              <a href="https://www.youtube.com/@SIKHARAGRADEVELOPERS"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <span className="copyright">&copy; 2025 Sikharagra Group. All rights reserved.</span>
            <div className="footer-links">
              <a href="#" className="footer-link">Terms & Conditions</a>
              <a href="#" className="footer-link">Privacy Policy</a>
              <a href="#" className="footer-link">Disclaimer</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
