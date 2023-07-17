import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import SearchAgent from './components/SearchAgent';
import SearchMap from './components/SearchMap';
import Maps from './components/Maps';
import Weapons from './components/Weapons';
import Stats from './components/Stats';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<SearchAgent />} />
          <Route path="/maps" element={<SearchMap />} />
          <Route path="/weapons" element={<Weapons />} />
          <Route path="/stats" element={<Stats />} />
        </Routes>


    </BrowserRouter>
  );
}

export default App;
