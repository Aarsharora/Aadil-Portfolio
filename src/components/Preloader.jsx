import React, { useEffect, useState } from 'react';
import './Loader.css';

const Preloader = ({ onComplete }) => {
    const [dots, setDots] = useState('');

    useEffect(() => {
        // Determine when animation finishes (2s matches CSS)
        const timer = setTimeout(() => {
            onComplete();
        }, 2500); // slightly longer than CSS animation

        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <div className="loader-container">
            <h1 className="loader-text">AADIL<span style={{ color: '#915EFF' }}>.</span></h1>
            <div className="progress-bar-container">
                <div className="progress-bar"></div>
            </div>
        </div>
    );
};

export default Preloader;
