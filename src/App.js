import logo from './logo.svg';
import './App.css';
import Landing from './Pages/Landing';
import { Routes, Route } from "react-router-dom";
import React from 'react';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Landing />} />
      </Routes>
    </div>
  );
}

export default App;
