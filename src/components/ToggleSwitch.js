import React, { useState, useEffect } from 'react';

export const ToggleSwitch = () => {
    const [theme, setTheme] = useState('default-theme');

    const toggleTheme = () => {
        if (theme === 'default-theme') {
            setTheme('alt-theme');
        } else {
            setTheme('default-theme');
        }
    };

    useEffect(() => {
        document.documentElement.className = theme;
    }, [theme]);

    return (
        <label className="switch">
            <input type="checkbox" onChange={toggleTheme} />
            <span className="slider"></span>
        </label>
    );
};

export default ToggleSwitch;