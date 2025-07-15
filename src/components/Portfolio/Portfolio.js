import React, { Component } from 'react';
import Header from './Header';
import AboutUs from './AboutUs';
import Services from './Services';
import Projects from './Projects';
import Footer from './Footer';

export default class Portfolio extends Component {
  render() {
    return (
      <div className="bg-black/20">
        

        {/* Sections with Unique IDs */}
        <section id="header">
          <Header />
        </section>
        <section id="about-us">
          <AboutUs />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="footer">
          <Footer />
        </section>
      </div>
    );
  }
}
