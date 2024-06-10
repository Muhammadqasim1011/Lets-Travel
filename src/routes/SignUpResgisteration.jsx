import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SignUp from '../components/SignUp';
import Hero from '../components/Hero';
import heroImage from '../assets/3.jpg';

const SignUpResgisteration = () => {
  return (
    <div>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={heroImage}
        title="Sign Up"
        btnClass="hide"
      />
      <SignUp />
      <Footer />
    </div>
  );
};

export default SignUpResgisteration;
