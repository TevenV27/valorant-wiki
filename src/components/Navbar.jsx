import React from 'react'
import '../stylesheets/Navbar.css'
import { Link } from 'react-router-dom';
//navbar
export default function navbar() {

  return (
    <div className="nav-box">
      <img className="logo-img" src="src\images\valorant-Logo.png" alt="" />
      <h1 className="title">VALORANT WIKI</h1>
      <nav>
        <ul className="navbar-list">
          <li><Link className='link' to="/">Agents</Link></li>
          <li><Link className='link' to="/maps">Maps</Link></li>
          <li><Link className='link' to="/weapons">Weapons</Link></li>
          <li><Link className='link' to="/stats">Stats</Link></li>
        </ul>
      </nav>
    </div>
  )
}
