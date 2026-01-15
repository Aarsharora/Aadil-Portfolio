import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            style={{
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                color: theme === 'dark' ? 'white' : '#151030', // Ensure visibility in both modes
                display: 'flex',
                alignItems: 'center',
                padding: '0.5rem',
                marginTop: '-5px' // Adjust alignment if needed in navbar
            }}
            aria-label="Toggle Theme"
        >
            {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
        </button>
    );
};

export default ThemeToggle;
