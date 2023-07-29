import React, { useState } from 'react';
import '../stylesheets/Switch.css';

const Switch = ({ toggleMode }) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleToggle = () => {
        setIsChecked(!isChecked);
        toggleMode(); // Llamar a la función toggleMode para cambiar el tema
    };

    return (
        <label className="switch">
            <input
                type="checkbox"
                checked={isChecked}
                onChange={handleToggle}
            />
            <span className="slider round"></span>
        </label>
    );
};

export default Switch;