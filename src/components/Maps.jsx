import React, { useEffect, useState } from 'react';
import { ClipLoader } from 'react-spinners';
import '../stylesheets/Maps.css';

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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://valorant-api.com/v1/maps', {
      headers: {
        'Accept-Language': 'es-ES'
      }
    })
      .then(res => res.json())
      .then(data => {
        // Simular un retraso de 2 segundos antes de cambiar el estado loading a false
        setTimeout(() => {
          setMaps(data.data);
          setLoading(false);
        }, 700);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="container-map">
      {loading ? (
        <div className="loader-container">
          <ClipLoader color={'rgb(242,28,13)'} loading={loading} size={70} />
        </div>
      ) : (
        maps.map(map => (
          <React.Fragment key={map.uuid}>
            {map.uuid && <Tarjet map={map} />}
          </React.Fragment>
        ))
      )}
    </div>
  );
}
