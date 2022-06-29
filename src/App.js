import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import React from 'react';
import LandingPage from './Pages/Landing';
import NavbarComponent from './Components/Navbar';
function App() {
  return (
    <div>
    <NavbarComponent />
      <Routes>
        <Route path='/' element={<LandingPage />} />
      </Routes>
    </div>
  );
}

export default App;
