import React from 'react';
import '../stylesheets/Navbar.css';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar({ colors }) {
  const location = useLocation();

  return (
    <div className="nav-box" style={{ background: colors.navbar, color: colors.text }}>
      <img
        className="logo-img"
        src="https://upload.wikimedia.org/wikipedia/commons/f/fc/Valorant_logo_-_pink_color_version_%28cropped%29.png"
        alt=""
      />
      <h1 className="title">VALORANT WIKI</h1>
      <nav className='menu'>
        <p className='menu-slide'>󰍜</p>
        <ul className="navbar-list">

          <li>
            <Link
              className={`link ${location.pathname === '/' ? 'active' : ''}`}
              to="/"
              style={{ color: colors.text }}
            >
              AGENTES
            </Link>
          </li>
          <li>
            <Link
              className={`link ${location.pathname === '/Mapas' ? 'active' : ''}`}
              to="/Mapas"
              style={{ color: colors.text }}
            >
              MAPAS
            </Link>
          </li>
          <li>
            <Link
              className={`link ${location.pathname === '/Armas' ? 'active' : ''}`}
              to="/Armas"
              style={{ color: colors.text }}
            >
              ARMAS
            </Link>
          </li>
          <li>
            <Link
              className={`link ${location.pathname === '/Estadisticas' ? 'active' : ''}`}
              to="/Estadisticas"
              style={{ color: colors.text }}
            >
              ESTADISTICAS
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
