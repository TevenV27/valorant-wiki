import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import SearchAgent from './components/SearchAgent';
import SearchMap from './components/SearchMap';
import Weapons from './components/Weapons';
import Stats from './components/Stats';
import Switch from './components/Switch';
import './stylesheets/App.css';
import { darkTheme, lightTheme } from '../colors';

import 'animate.css';

function App() {
  const [theme, setTheme] = useState('dark');

  const toggleMode = () => {
    // Cambiar 'theme' en lugar de 'mode' en la siguiente línea
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const colors = theme === 'dark' ? darkTheme : lightTheme;

  return (
    <BrowserRouter>
      <div style={{
        backgroundColor: colors.background,
        width: '100%',
        height: '100%',
      }}>
        <Navbar toggleMode={toggleMode} colors={colors} />
        <Routes>
          <Route path="/" element={<SearchAgent colors={colors} />} />
          <Route path="/Mapas" element={<SearchMap colors={colors} />} />
          <Route path="/Armas" element={<Weapons colors={colors} />} />
          <Route path="/Estadisticas" element={<Stats colors={colors} />} />
        </Routes>
        <div className="switch-container animate__animated animate__backInUp ">
          <Switch toggleMode={toggleMode} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
