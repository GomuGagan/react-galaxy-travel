import React from 'react'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'
import Navbar from '../components/Navbar'
import TrainingComp from '../components/TrainingComp'

const Training = () => {
  return (
    <div>
        <Navbar />
        <HeroImage heading="Training" text="pre-flight and In-flight Training." />
        <TrainingComp />
        <Footer />
    </div>
  )
}

export default Training