import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Contact from './pages/Contact';
import Home from "./pages/Home";
import Pricing from './pages/Pricing';
import Training from './pages/Training';

const App = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/training" element={<Training />} />
            <Route path="/contact" element={<Contact />} />

        </Routes>
    </div>
  )
}

export default App