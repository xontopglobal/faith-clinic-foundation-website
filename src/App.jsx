import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Gallery from "./pages/Gallery";
import GetInvolved from "./pages/GetInvolved";
import Donate from "./pages/Donate";
import Contact from "./pages/Contact";
import Team from "./pages/Team";
import WhatWeDo from "./pages/WhatWeDo";
import OurWork from "./pages/OurWork";
import Story from "./pages/Story";
import Transparency from "./pages/Transparency";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import DataDeletion from "./pages/DataDeletion";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/our-story" element={<Story />} />
          <Route path="/transparency-governance" element={<Transparency />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/what-we-do" element={<WhatWeDo />} />
          <Route path="/our-work" element={<OurWork />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/get-involved" element={<GetInvolved />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/team" element={<Team />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/data-deletion" element={<DataDeletion />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}