import React, { useEffect, useState } from 'react';
import '../stylesheets/Maps.css'

const Tarjet = ({ map }) => {
  return (
    <div className="card-map">
      <img className='img-map' src={map.splash} alt={map.splash} />
      <h2>{map.displayName}</h2>
    </div>
  );
};

export default function Maps() {
  const [maps, setMaps] = useState([]);

  useEffect(() => {
    fetch('https://valorant-api.com/v1/maps', {
      headers: {
        'Accept-Language': 'es-ES'
      }
    })
      .then(res => res.json())
      .then(data => setMaps(data.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="container-map">
      {maps.map(map => (
        <React.Fragment key={map.uuid}>
          {map.uuid && <Tarjet map={map} />}
        </React.Fragment>
      ))}
    </div>
  );
}
