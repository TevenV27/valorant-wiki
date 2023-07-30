import React, { useState } from 'react';
import '../stylesheets/Navbar.css';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar({ colors }) {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="nav-box" style={{ background: colors.navbar, color: colors.text }}>
      <img
        className="logo-img"
        src="https://upload.wikimedia.org/wikipedia/commons/f/fc/Valorant_logo_-_pink_color_version_%28cropped%29.png"
        alt=""
      />
      <h1 className="title">VALORANT WIKI</h1>
      <nav className='menu'>

        {/* Icono menu para el modo mobile */}
        <p className='menu-slide' onClick={handleMenuClick}>󰍜</p>

        {/* Menu de navegacion */}
        <ul className={`navbar-list ${isMenuOpen ? 'show animate__animated animate__fadeInRight' : 'animate__animated animate__fadeInLeft'}`}
          style={{ background: colors.navbar }}
        >
        <li>
          <Link
            className={`link ${location.pathname === '/' ? 'active' : ''}`}
            to="/"
            style={{ color: colors.text }}
            onClick={() => setIsMenuOpen(false)}

          >
            AGENTES
          </Link>
        </li>
        <li>
          <Link
            className={`link ${location.pathname === '/Mapas' ? 'active' : ''}`}
            to="/Mapas"
            style={{ color: colors.text }}
            onClick={() => setIsMenuOpen(false)}
          >
            MAPAS
          </Link>
        </li>
        <li>
          <Link
            className={`link ${location.pathname === '/Armas' ? 'active' : ''}`}
            to="/Armas"
            style={{ color: colors.text }}
            onClick={() => setIsMenuOpen(false)}
          >
            ARMAS
          </Link>
        </li>
        <li>
          <Link
            className={`link ${location.pathname === '/Estadisticas' ? 'active' : ''}`}
            to="/Estadisticas"
            style={{ color: colors.text }}
            onClick={() => setIsMenuOpen(false)}
          >
            ESTADISTICAS
          </Link>
        </li>
      </ul>
    </nav>
    </div >
  );
}
