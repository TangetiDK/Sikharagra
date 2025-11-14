/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../App.css';
import blog1 from '../assets/blog1.png';
import blog2 from '../assets/blog2.png';
import blog3 from '../assets/blog3.png';
import blog from '../assets/blog-cicles.svg'

function Blog() {
  const blogs = [
    {
      img: blog1, title: "Top 10 Home-Buying Mistakes To Avoid",
      excerpt: "Learn how to make smart property decisions and avoid costly pitfalls before purchasing your next home."
    },
    {
      img: blog2, title: "How to Stage Your Home for a Quick Sale",
      excerpt: "Discover easy ways to improve your property’s appeal and attract potential buyers faster."
    },
    {
      img: blog3, title: "5 Proven Tips for First-Time Home Buyers",
      excerpt: "Get essential advice for planning, budgeting, and investing in your first dream home confidently."
    }
  ];

  return (
    <section className="blog" id="blog">
      <div className="container">
        <div className="section-header">
          <p className="blog-head-chip">WHAT'S TRENDING</p>
          <h2 className="section-title" style={{ color: "white" }}> Latest Real Estate Insights & Updates</h2>
          <p className="section-description" style={{ color: "white" }}> Stay informed with expert property tips, market updates, and home-buying guides from Sikharagra Group’s real-estate professionals.</p>
          <div className="blog-circles-container">
            <img src={blog} alt="Blog Circle" />
            <img src={blog} alt="Blog Circle" />
            <img src={blog} alt="Blog Circle" />
            <img src={blog} alt="Blog Circle" />
          </div>
        </div>

        <div className="blog-grid">
          {blogs.map(({ img, title, excerpt }, i) => (
            <div key={i} className={`blog-card blog-card-${i + 1}`}>
              <img src={img} alt={`Blog ${i + 1}`} className="blog-img" />
              <div className="blog-content">
                <h3 className="blog-title">{title}</h3>
                <p className="blog-excerpt">{excerpt}</p>
                <a href="#" className="read-more"><i className="fas fa-arrow-right"></i></a>
              </div>
            </div>
          ))}
        </div>

        <div className="pagination-dots">
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>
    </section>
  );
}

export default Blog;
