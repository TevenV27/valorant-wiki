import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal'
import '../stylesheets/Weapons.css';

const Tarjet = ({ weapon }) => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div onClick={handleOpen} className="card-weapon">
        <img className='img-weapon' src={weapon.displayIcon} alt={weapon.displayName} />
        <strong className='name-weapon'>{weapon.displayName}</strong>
      </div>
      <Modal className='modal ' open={open} onClose={handleClose}>
        <Box className='modalbox-skins  animate__animated animate__fadeInDownBig'>
          <h3 className='skin-title' >Skins disponibles para {weapon.displayName}</h3>
          <div className='skin-container'>
            {weapon.skins && weapon.skins.map((skin) => {
              if (skin.displayIcon !== null && skin.contentTierUuid !== null) {
                return (
                  <React.Fragment key={skin.uuid}>
                    <div className='skin-box'>
                      <img className='img-skin' src={skin.displayIcon} alt="" />
                      <div className='box-skin-name'>
                        <span>{skin.displayName}</span>
                      </div>
                    </div>
                  </React.Fragment>
                );
              }
              return null; // Omitir renderizado si displayIcon es null
            })}
          </div>
        </Box>
      </Modal>
    </>
  );
};

const Weapons = ({ rol }) => {
  const [weapons, setWeapons] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://valorant-api.com/v1/weapons?language=es-MX', {
          headers: {
            'Accept-Language': 'es-ES'
          }
        });

        if (!response.ok) {
          throw new Error('Failed to fetch agents data');
        }

        const data = await response.json();
        setTimeout(() => {
          setWeapons(data.data);
        }, 0);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <br /><br /><br />
      <div className='container-weapon animate__animated animate__backInUp'>
        {weapons.map((weapon) => (
          <React.Fragment key={weapon.uuid}>
            {weapon.uuid && <Tarjet weapon={weapon} />}
          </React.Fragment>
        ))}
      </div>
      <br />
    </>
  );
};

export default Weapons;
