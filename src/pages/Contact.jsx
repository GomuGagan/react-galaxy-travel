import React from 'react';
import Form from '../components/Form';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImage from '../components/HeroImage';


const Contact = () => {
  return (
    <div>
        <Navbar />
        <HeroImage heading="Contact." text="Contact GLX Travel."/>
        <Form />
        <Footer />
    </div>
  )
}

export default Contact