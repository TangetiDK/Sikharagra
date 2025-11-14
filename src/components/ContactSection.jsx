import React, { useState } from 'react';
import '../App.css';

function ContactSection() {
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', project: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', phone: '', email: '', project: '' });
  };

  return (
    <section className="contact-section">
      <div className="container">
        <div className="contact-content">
          <div className="contact-header">
            <p className="contact-subtitle">CONTACT US</p>
            <h2 className="contact-title">Ready to Find Your Dream Home?</h2>
            <p className="contact-description">Connect with our property experts today and explore HMDA & RERA-approved projects designed for a modern lifestyle.</p>
            <div className="contact-buttons">
              <a href="https://wa.me/919951448827" className="btn-whatsapp">
                <i className="fab fa-whatsapp"></i> Chat on WhatsApp
              </a>
              <button type="button" className="btn-outline">Schedule Site Visit</button>
            </div>
          </div>
          <div className="enquiry-form">
            <h3 className="enquiry-title">Quick Enquiry</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <select
                  name="project"
                  value={formData.project}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>Select project interested in</option>
                  <option value="luxury-villas">Luxury Villas</option>
                  <option value="apartments">Apartments</option>
                  <option value="gated-community">Gated Community</option>
                  <option value="commercial">Commercial Spaces</option>
                  <option value="plot">Plots</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
