import React from 'react';
import Navbar from "../components/Navbar";
import Hero from '../components/Hero';
import heroImage from "../assets/2.jpg"; // Assign the image to a variable
import Destination from '../components/Destination';
import Trip from '../components/Trip';
import Footer from '../components/Footer';
import TourList from '../components/TourList';

function Home() {
  return (
    <>
    <Navbar/>
    <Hero
      cName="hero"
      heroImg={heroImage} // Use the variable here
      title="Your Journey Your Story"
      text="Choose Your Favorite Destination."
      buttonText="Travel Plan"
      url="/"
      btnClass="show"
    />
    <Destination/>
    <Trip/>
    <TourList/>
    <Footer/>
    </>
  );
}

export default Home;