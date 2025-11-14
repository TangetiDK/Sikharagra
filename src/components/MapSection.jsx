import React from 'react';
import '../App.css';

function MapSection() {
  return (
    <section className="map-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Find Us</h2>
          <p className="section-description">Visit us at our office location</p>
        </div>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d259.74916786750794!2d78.4199747637146!3d17.412134379449565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9763209528df%3A0xdd834c283c2fb160!2s7Hz%20studio!5e0!3m2!1sen!2sin!4v1762017349947!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Sikharagra Location Map"
          />
        </div>
      </div>
    </section>
  );
}

export default MapSection;
