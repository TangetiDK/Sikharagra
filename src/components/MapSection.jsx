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
            src="https://www.google.com/maps?q=Flat+-501,+Cluster_balanagar+14+Sri+Krishna+Villa,+A.S.Raju+Nagar,+Vivekananda+Nagar,+Kukatpally,+Hyderabad,+Telangana+500072&output=embed"
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
