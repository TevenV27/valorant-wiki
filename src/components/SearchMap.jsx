import React, { useState } from 'react';
import '../stylesheets/Maps.css'
import Maps from './Maps';


export default function Search() {
    const [map, setMap] = useState("");
    return (
        <>
            <div className='search-box '>

                <div className='types-box animate__animated  animate__backInLeft'>
                    <button className='b-types' onClick={() => { setMap("Competitive") }}>
                        <p>COMPETITIVO</p>
                    </button>
                    <button className='b-types' onClick={() => { setMap("Deathmatch") }}>
                        <p>DEATHMATCH DEFINITIVO</p>
                    </button>
                    <button className='b-types' onClick={() => { setMap("") }}>
                        <p>TODOS</p>
                    </button>
                </div>

                <form className='animate__animated  animate__backInRight' action="">
                    <input className='search-agent' type="text" placeholder="Search..." />
                </form>
            </div>
            <Maps type = {map} />
        </>
    )
}