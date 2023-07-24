import React, { useState } from 'react';
import '../stylesheets/Maps.css';
import Maps from './Maps';

export default function Search({ colors }) {
  const [map, setMap] = useState('');

  return (
    <>
      <div className="search-box">
        <div className="types-box animate__animated animate__backInLeft">
          <button
            className={`b-types ${map === 'Competitive' ? 'active-map' : ''}`}
            style={{ background: colors.button, position: 'relative', overflow: 'hidden' }}
            onClick={() => setMap('Competitive')}
          >
            <span>COMPETITIVO</span>
          </button>
          <button
            className={`b-types ${map === 'Deathmatch' ? 'active-map' : ''}`}
            style={{ background: colors.button, position: 'relative', overflow: 'hidden' }}
            onClick={() => setMap('Deathmatch')}
          >
            <span>DEATHMATCH DEFINITIVO</span>
          </button>
          <button
            className={`b-types ${map === '' ? 'active-map' : ''}`}
            style={{ background: colors.button, position: 'relative', overflow: 'hidden' }}
            onClick={() => setMap('')}
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
      <Maps type={map} colors={colors} />
    </>
  );
}
