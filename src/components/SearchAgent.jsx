import React, { useState } from 'react';
import '../stylesheets/Search.css';
import Card from './Card.jsx';

export default function Search({ colors }) {
  const [rol, setRol] = useState('');

  return (
    <div className="container">
      <div className="searchAgent-box">
        <div className="roles-box animate__animated animate__backInLeft">
          <button
            className={`b-roles ${rol === 'Duelista' ? 'active-button' : ''}`}
            style={{ background: colors.button }}
            onClick={() => setRol('Duelista')}
          >
            <img
              className="roles"
              src="https://media.valorant-api.com/agents/roles/dbe8757e-9e92-4ed4-b39f-9dfc589691d4/displayicon.png"
              alt="Duelista"
            />
          </button>
          <button
            className={`b-roles ${rol === 'Iniciador' ? 'active-button' : ''}`}
            style={{ background: colors.button }}
            onClick={() => setRol('Iniciador')}
          >
            <img
              className="roles"
              src="https://media.valorant-api.com/agents/roles/1b47567f-8f7b-444b-aae3-b0c634622d10/displayicon.png"
              alt="Iniciador"
            />
          </button>
          <button
            className={`b-roles ${rol === 'Centinela' ? 'active-button' : ''}`}
            style={{ background: colors.button }}
            onClick={() => setRol('Centinela')}
          >
            <img
              className="roles"
              src="https://media.valorant-api.com/agents/roles/5fc02f99-4091-4486-a531-98459a3e95e9/displayicon.png"
              alt="Centinela"
            />
          </button>
          <button
            className={`b-roles ${rol === 'Controlador' ? 'active-button' : ''}`}
            style={{ background: colors.button }}
            onClick={() => setRol('Controlador')}
          >
            <img
              className="roles"
              src="https://media.valorant-api.com/agents/roles/4ee40330-ecdd-4f2f-98a8-eb1243428373/displayicon.png"
              alt="Controlador"
            />
          </button>
          <button
            className={`b-roles ${rol === '' ? 'active-button' : ''}`}
            style={{ background: colors.button }}
            onClick={() => setRol('')}
          >
            <span>TODOS</span>
          </button>
        </div>

        <form className="animate__animated animate__backInRight" action="">
          <input
            className="search-agent"
            type="text"
            placeholder="Buscar..."
            style={{ background: colors.button, color: colors.textInput }}
          />
        </form>
      </div>
      <Card className="" rol={rol} colors={colors} />
    </div>
  );
}
