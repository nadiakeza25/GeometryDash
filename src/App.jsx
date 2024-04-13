import { useState } from 'react';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import './App.css';
import GeometryDashFaces from './pages/GeometryDashFaces';
import GeometryDashFacesGallery from './pages/GeometryDashFacesGallery';
import ReactDOM from "react-dom/client";
import NavBar from './Components/NavBar';

const App = () => {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/GeometryDashFaces" element={<GeometryDashFaces />} />
          <Route path='/GeometryDashFacesGallery' element={<GeometryDashFacesGallery />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
