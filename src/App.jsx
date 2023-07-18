import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import SearchAgent from './components/SearchAgent';
import SearchMap from './components/SearchMap';
import Weapons from './components/Weapons';
import Stats from './components/Stats';
import 'animate.css';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<SearchAgent />} />
          <Route path="/Mapas" element={<SearchMap />} />
          <Route path="/Armas" element={<Weapons />} />
          <Route path="/Estadisticas" element={<Stats />} />
        </Routes>


    </BrowserRouter>
  );
}

export default App;
