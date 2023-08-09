import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import '../stylesheets/Weapons.css';

const Tarjet = ({ weapon, colors }) => {
  const [open, setOpen] = React.useState(false);
  const [openVideo, setOpenVideo] = React.useState(false);
  const [videoUrl, setVideoUrl] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  const [isHovered2, setIsHovered2] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpenVideo = (url) => {
    setVideoUrl(url);
    setOpenVideo(true);
  };

  const handleCloseVideo = () => {
    setVideoUrl('');
    setOpenVideo(false);
  };

  return (
    <>
      <div onClick={handleOpen} className="card-weapon" style={{ background: isHovered ? colors.hoverCard : colors.card }} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <img className='img-weapon' src={weapon.displayIcon} alt={weapon.displayName} />
        <strong className='name-weapon'>{weapon.displayName}</strong>
      </div>
      <Modal className='modal'
        open={open}
        onClose={handleClose}
      >
        <Box className='modalbox-skins animate__animated animate__fadeInDownBig' style={{ background: colors.background }}>
          <h3 className='skin-title' >Skins disponibles para {weapon.displayName}</h3>
          <div className='skin-container'>
            {weapon.skins && weapon.skins.map((skin) => {
              if (skin.displayIcon !== null && skin.contentTierUuid !== null) {
                const hasStreamedVideo = skin.levels && skin.levels[skin.levels.length - 1]?.streamedVideo;
                return (
                  <React.Fragment key={skin.uuid}>
                    <div className='skin-box' style={{ background: isHovered ? colors.hoverCard : colors.card }} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                      <img className='img-skin' src={skin.displayIcon} alt="" />
                      <div className='box-skin-name'>
                        <span><strong>{skin.displayName}</strong></span>
                        {hasStreamedVideo ? <span className='icon-watch' onClick={() => handleOpenVideo(skin.levels[skin.levels.length - 1].streamedVideo)}></span> : null}
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

      <Modal className='modal-video'
        open={openVideo}
        onClose={handleCloseVideo}
      >  
        <Box className="modalbox-skin-video">
          <video className='video-skin' src={videoUrl} controls></video>
        </Box>
      </Modal>
    </>
  );
};

const Weapons = ({ rol, colors }) => {
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
      <div className='container-weapon animate__animated animate__backInUp'>
        {weapons.map((weapon) => (
          <React.Fragment key={weapon.uuid}>
            {weapon.uuid && <Tarjet weapon={weapon} colors={colors} />}
          </React.Fragment>
        ))}
      </div>
      <br />
    </>
  );
};

export default Weapons;
