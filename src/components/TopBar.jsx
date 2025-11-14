import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import '../App.css';

function TopBar() {
  return (
    <div className="top-bar">
      <div className="top-bar-content">
        <div className="top-bar-info">
          <span className="location"><FaMapMarkerAlt /> Hyderabad</span>
          <div className="contact-info">
            <span><FaPhone /> +91 9949806677</span>
            <span><FaEnvelope /> info@sikharagra.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
