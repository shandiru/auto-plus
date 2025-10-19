
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";

import Home from "./page/Home";

import Header from "./components/Header";

function App() {
  return (
    <Router>
      
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
  
      </Routes>
      <Footer />
     
    </Router>
  );
}

export default App;
