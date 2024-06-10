import React from 'react';
import Navbar from "../components/Navbar";
import Hero from '../components/Hero';
import heroImage from "../assets/3.jpg"; // Assign the image to a variable
import Footer from '../components/Footer';
import Trip from '../components/Trip';

function Service() {
  return (
    <>
    <Navbar/>
    <Hero
      cName="hero-mid"
      heroImg={heroImage} // Use the variable here
      title="Service"
      btnClass="hide"
    />
    <Trip/>
    <Footer/>
    </>
  )
}

export default Service