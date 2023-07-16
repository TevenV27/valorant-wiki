import React, { useEffect, useState } from 'react';
import Search from './Search'
import '../stylesheets/Card.css'
const Tarjet = ({ agent }) => {
    return (

        <div className="card">

            <img src={agent.displayIcon} alt={agent.displayName} />
            <h2>{agent.displayName}</h2>
            <p>{agent.description}</p>

        </div>

    );
}

export default function Card({ rol }) {
    const [agents, setAgents] = useState([]);

    useEffect(() => {
        fetch('https://valorant-api.com/v1/agents', {
            headers: {
                'Accept-Language': 'es-ES'
            }
        })
            .then(res => res.json())
            .then(data => setAgents(data.data))
            .catch(err => console.log(err));
    }, []);

    return (

        <>
            
            <div className="container-card">
                {agents.map(agent => {
                    if (rol === "") {
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
                })}
            </div>
        </>
    );
}
