
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";

import Home from "./page/Home";

import Header from "../src/components/Header";
import TermsConditions from "./components/Term.jsx";
import PrivacyPolicy from "./components/PrivacyPolicy.jsx";
import GDPRConsent from "./components/GDPRBanner.jsx";
function App() {
  return (
    <Router>
      
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
     <GDPRConsent />
    </Router>
  );
}

export default App;


