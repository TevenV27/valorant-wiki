import React, { useEffect, useState } from 'react';
import { ClipLoader } from 'react-spinners';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal'
import '../stylesheets/Maps.css';
import 'animate.css';

const Tarjet = ({ map }) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div onClick={handleOpen} className="card-map">
        <img className='img-map' src={map.splash} alt={map.splash} />
        <h2>{map.displayName}</h2>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box className='box' sx={{ width: 400 }}>
          <h2 id="parent-modal-title">Text in a modal</h2>
          <p id="parent-modal-description">
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </p>
          
        </Box>
      </Modal>
    </>
  );
};

export default function Maps({ type }) {
  const [maps, setMaps] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://valorant-api.com/v1/maps', {
          headers: {
            'Accept-Language': 'es-ES'
          }
        });
        const data = await response.json();
        setTimeout(() => {
          setMaps(data.data);
          setLoading(false);
        }, 0);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="container-map animate__animated animate__backInUp">
        {
          maps.map((map) => {
            if (type === '') {
              return (
                <React.Fragment key={map.uuid}>
                  {map.uuid && <Tarjet map={map} />}
                </React.Fragment>
              );
            }
            if (type === 'Competitive' && map.coordinates && map.coordinates !== null) {
              return (
                <React.Fragment key={map.uuid}>
                  {map.uuid && <Tarjet map={map} />}
                </React.Fragment>
              );
            }
            if (type === 'Deathmatch' && (!map.coordinates || map.coordinates === null)) {
              return (
                <React.Fragment key={map.uuid}>
                  {map.uuid && <Tarjet map={map} />}
                </React.Fragment>
              );
            }
            return null;
          })
        }
      </div>
    </>
  );
}
