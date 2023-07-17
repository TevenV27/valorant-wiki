import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Maps from './components/Maps';
import Weapons from './components/Weapons';
import Stats from './components/Stats';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/maps" element={<Maps />} />
        <Route path="/weapons" element={<Weapons />} />
        <Route path="/stats" element={<Stats />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
