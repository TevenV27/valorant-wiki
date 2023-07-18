import React, { useEffect, useState } from 'react';
import Search from './SearchAgent';
import { ClipLoader } from 'react-spinners';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal'
import '../stylesheets/Card.css';
import 'animate.css';

const Tarjet = ({ agent }) => {

  const [open, setOpen] = React.useState(false);
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
          <p>{agent.description}</p>
        </div>
      </div>
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
              <span><h3>Name:</h3> {agent.displayName}</span>
              {agent.role && <span><h3>Role:</h3>{agent.role.displayName}</span>}
              {agent.role && <span><h3>Description role:</h3>{agent.role.description}</span>}
              {<span><h3>Abilities:</h3></span>}
              <div className='ability-container'>
                {agent.abilities.map((ability) => {
                  return (
                    <React.Fragment key={ability.uuid}>
                      <div className='ability-box'>
                        <img className='ability-image' src={ability.displayIcon} alt={ability.displayName} />
                        {ability.displayName}
                      </div>

                    </React.Fragment>
                  );
                })}
              </div>

              <strong></strong>
            </div>
          </div>


        </Box>
      </Modal>
    </>
  );
};

const Card = ({ rol }) => {
  const [agents, setAgents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://valorant-api.com/v1/agents', {
          headers: {
            'Accept-Language': 'es-ES'
          }
        });

        if (!response.ok) {
          throw new Error('Failed to fetch agents data');
        }

        const data = await response.json();
        setTimeout(() => {
          setAgents(data.data);
          setLoading(false);
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
      <div className="container-card animate__animated animate__backInUp">
        {
          agents.map((agent) => {
            if (agent && agent.role && rol === "") {
              return (
                <React.Fragment key={agent.uuid}>
                  {agent.uuid && <Tarjet agent={agent} />}
                </React.Fragment>
              );
            } else {
              if (agent && agent.role && agent.role.displayName === rol) {
                return (
                  <React.Fragment key={agent.uuid}>
                    {agent.uuid && <Tarjet agent={agent} />}
                  </React.Fragment>
                );
              }
            }
            return null;
          })
        }
      </div>
    </>
  );
};

export default Card;
