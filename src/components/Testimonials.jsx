import React from 'react';
import '../App.css';

function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="testimonials-section">
          <div className="testimonials-left">
            <p className="section-subtitle" style={{ textAlign: "left", marginLeft: 0 }}>TESTIMONIALS</p>
            <h2 className="section-title" style={{ textAlign: "left", marginLeft: 0 }}>What Our Happy Customers Say!</h2>
            <p className="section-description" style={{ textAlign: "left", marginLeft: 0, maxWidth: "100%" }}>
               Hear from families who trusted Sikharagra Group and found their dream homes with us. Their satisfaction drives our commitment to excellence.
            </p>
            <div className="testimonials-nav">
              <button className="arrow-btn" aria-label="Previous testimonial">
                <i className="fas fa-arrow-left"></i>
              </button>
              <button className="arrow-btn" aria-label="Next testimonial">
                <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
          <div className="testimonials-right">
            <div className="testimonial-card-v2">
              <span className="quote-mark">“”</span>
              <p className="testimonial-text">
                We’re truly grateful to Sikharagra Group for helping us buy our perfect home. The team was professional, transparent, and made the process easy from start to finish. Highly recommend them!
              </p>
              <hr className="testimonial-divider" />
              <div className="testimonial-meta">
                <div className="meta-left">
                  <img className="avatar" src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=80&h=80&fit=crop" alt="Barbara D. Smith" />
                  <span className="meta-name">Barbara D. Smith, Homeowner</span>
                </div>
                <div className="meta-rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
              </div>
            </div>
            <div className="scroll-indicator" aria-hidden="true">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
