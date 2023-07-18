import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import '../stylesheets/Card.css';

const Tarjet = ({ agent }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div onClick={handleOpen} className="card">
        <img src={agent.displayIcon} alt={agent.displayName} />
        <div className='info-agent'>
          <h2 className='name-agent'>{agent.displayName}</h2>
          {agent.role && <img className='rol-agent' src={agent.role.displayIcon} alt="Rol" />}
        </div>
        <div className='description-box'>
          <p>Descripcion:</p>
          <p>{agent.description}</p>
        </div>
      </div>
      <React.Fragment key={agent.uuid}>
        <Modal className='modal'
          open={open}
          onClose={handleClose}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
        >
          <Box className='modalbox-agent  animate__animated animate__fadeInDownBig'>
            <div className='agent-info '>
              <img className='fullimg-agent' src={agent.fullPortrait} alt={agent.displayName} />
              <div>
                <span><h3>Nombre:</h3> {agent.displayName}</span>
                {agent.role && <span><h3>Rol:</h3>{agent.role.displayName}</span>}
                {agent.role && <span><h3>Descripcion del rol:</h3>{agent.role.description}</span>}
                {<span><h3>Habilidades:</h3></span>}
                <div className='ability-container'>
                  {agent.abilities.map((ability) => (
                    <div className='ability-box' key={ability.uuid}>
                      <img className='ability-image' src={ability.displayIcon} alt={ability.displayName} />
                      {ability.displayName}
                    </div>
                  ))}
                </div>
                <strong></strong>
              </div>
            </div>
          </Box>
        </Modal>
      </React.Fragment>
    </>
  );
};

const Card = ({ rol }) => {
  const [agents, setAgents] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://valorant-api.com/v1/agents?language=es-MX', {
          headers: {
            'Accept-Language': 'es-ES'
          }
        });

        if (!response.ok) {
          throw new Error('Failed to fetch agents data');
        }

        const data = await response.json();
        setAgents(data.data);
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
      <div className="container-card animate__animated animate__backInUp">
        {agents.map((agent) => {
          if (agent && agent.role && (rol === "" || agent.role.displayName === rol)) {
            return (
              <Tarjet key={agent.uuid} agent={agent} />
            );
          }
          return null;
        })}
      </div>
    </>
  );
};

export default Card;
