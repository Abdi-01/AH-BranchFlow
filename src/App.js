import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import React from "react";
import LandingPage from "./Pages/Landing";
import NavbarComponent from "./Components/Navbar";
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;