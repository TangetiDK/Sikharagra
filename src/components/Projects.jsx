/* eslint-disable no-unused-vars */
import React from 'react';
import '../App.css';
import RainbowCounty from '../assets/Rainbow_county.png';
import LumorValley from '../assets/Lumor_Valley.png';
import WoxenValley from '../assets/Woxen_Valley.png';
import HeritagePlots from '../assets/Heritage_Plots.png';
import NatureCity from '../assets/NatureCounty.jpeg'; 
import SEZCounty from '../assets/sez.jpg';
import PSRLayout from '../assets/PSR .jpg';
import RPLCounty from '../assets/RPLImage.jpg';


function Projects({ activeFilter, onFilterChange }) {
  const projects = [
    // Previous projects
    { img: RainbowCounty, status: 'Sold Out', title: 'Rainbow County', category: 'Previous' },
    { img: LumorValley, status: 'Sold Out', title: 'Lumor Valley', category: 'Previous' },
    { img: WoxenValley, status: 'Sold Out', title: 'Woxen Valley', category: 'Previous' },
    
    // Ongoing projects
    { img: NatureCity, status: 'Ongoing', title: 'Nature City', category: 'Ongoing' },
    { img: SEZCounty, status: 'Ongoing', title: 'SEZ County', category: 'Ongoing' },
    { img: PSRLayout, status: 'Ongoing', title: 'PSR Layout', category: 'Ongoing' },
    { img: RPLCounty, status: 'Ongoing', title: 'RPL County', category: 'Ongoing' },

    // Upcoming projects
    { img: RPLCounty, status: 'Upcoming', title: 'RPL', category: 'Upcoming' },
  ];

  // Filter the projects based on activeFilter category
  const filteredProjects = projects.filter(p => p.category === activeFilter);

  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="section-header">
          <p className="section-subtitle">OUR PROJECTS</p>
          <h2 className="section-title">Our Projects</h2>
          <p className="section-description">
            Browse through our landmark projects that combine trust, innovation, and transparency. From premium villa plots to smart townships, Sikharagra Group continues to set new benchmarks in real estate excellence.
          </p>
        </div>

        <div className="filter-buttons">
          {['Previous', 'Ongoing', 'Upcoming'].map(filter => (
            <button
              key={filter}
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={filter === 'Ongoing' ? () => onFilterChange(filter) : undefined}
              disabled={filter !== 'Ongoing'}
              style={filter !== 'Ongoing' ? { cursor: 'not-allowed' } : {}}
            >
              {filter}
            </button>
          ))}
        </div>


        <div className="projects-grid">
          {filteredProjects.length > 0 ? (
            filteredProjects.map(({ img, status, title }) => (
              <div key={title} className="project-card">
                <img src={img} alt={`Project ${title}`} />
                <div className="status-chip">{status}</div>
                <div className="project-card-content">
                  <h3>{title}</h3>
                </div>
              </div>
            ))
          ) : (
            <p>No projects found for this category.</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default Projects;
