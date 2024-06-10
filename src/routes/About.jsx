import React from 'react';
import Navbar from "../components/Navbar";
import Hero from '../components/Hero';
import heroImage from "../assets/night.jpg"; // Assign the image to a variable
import Footer from '../components/Footer';
import AboutUs from '../components/AboutUs';

function About() {
  return (
    <>
    <Navbar/>
    <Hero
      cName="hero-mid"
      heroImg={heroImage} // Use the variable here
      title="About"
      btnClass="hide"
    />
    <AboutUs/>
    <Footer/>
    </>
  );
}

export default About;