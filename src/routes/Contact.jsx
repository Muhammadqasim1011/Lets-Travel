import React from 'react';
import Navbar from "../components/Navbar";
import Hero from '../components/Hero';
import heroImage from "../assets/img.jpg"; // Assign the image to a variable
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';

function Contact() {
  return (
    <>
    <Navbar/>
    <Hero
      cName="hero-mid"
      heroImg={heroImage} // Use the variable here
      title="Contact"
      btnClass="hide"
    />
    <ContactForm/>
    <Footer/>
    </>
  )
}

export default Contact