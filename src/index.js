import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Contact from './pages/contact/Contact';
import Portfolio from './pages/portfolio/Portfolio';
import ResponsiveAppBar from './pages/navbar/Navbar';
import About from './pages/about/About';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ResponsiveAppBar />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="contact" element={<Contact />} />
      <Route path="portfolio" element={<Portfolio />} />
      <Route path="about" element={<About/>} />
    </Routes>
  </BrowserRouter>
);
