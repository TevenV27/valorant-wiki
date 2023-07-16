import React from 'react'
import '../stylesheets/Navbar.css'
//navbar
export default function navbar() {

  return (
    <div className="nav-box">
      <img className="logo-img" src="../../public\valorant-Logo.png" alt="" />
      <h1 className="title">VALORANT WIKI</h1>
      <div>
        <ul class="navbar-list">
          <li><a href="#">Agents</a></li>
          <li><a href="#">Maps</a></li>
          <li><a href="#">Weapons</a></li>
          <li><a href="#">Stats</a></li>
        </ul>
      </div>
    </div>
  )
}
