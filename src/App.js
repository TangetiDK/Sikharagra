/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import WhyChooseUs from './components/WhyChooseUs';
import AboutSection from './components/AboutSection';
import Portfolio from './components/Portfolio';
import Properties from './components/Properties';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Gallery from './components/Gallery';
import ContactSection from './components/ContactSection';
import MapSection from './components/MapSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [activeProjectFilter, setActiveProjectFilter] = useState('Previous');
  const [headerShadow, setHeaderShadow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setHeaderShadow(window.scrollY > 100);
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div>
      <TopBar />
      <Header shadow={headerShadow} />
      <HeroSection />
      <WhyChooseUs />
      <AboutSection />
      <Portfolio />
      {/* <Properties /> */}
      <Projects activeFilter={activeProjectFilter} onFilterChange={setActiveProjectFilter} />
      <Testimonials />
      {/* <Blog /> */}
      <Gallery />
      <ContactSection />
      <MapSection />
      <Footer />
    </div>
  );
}

export default App;
