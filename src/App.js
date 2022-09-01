import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Atadenoise from './components/Atadenoise';
import Dctdnoiz from './components/Dctdnoiz';
import Fftdnoiz from './components/Fftdnoiz';
import Nlmeans from './components/Nlmeans';
import Owdenoise from './components/Owdenoise';
import Vaguedenoiser from './components/Vaguedenoiser';
import Rslider from './components/RangeSlider';


//Creamos componente funcional para mostrar interface

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Rslider />}/>
        <Route path="/atadenoise" element={<Atadenoise />}/>
        <Route path="/dctdnoiz" element={<Dctdnoiz />}/>
        <Route path="/fftdnoiz" element={<Fftdnoiz />}/>
        <Route path="/nlmeans" element={<Nlmeans />}/>
        <Route path="/owdenoise" element={<Owdenoise />}/>
        <Route path="/vaguedenoiser" element={<Vaguedenoiser />}/>
      </Routes>
    </BrowserRouter>
  )
}

