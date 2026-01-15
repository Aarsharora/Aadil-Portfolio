import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{
            background: 'var(--black-100)',
            padding: '2rem 2rem',
            textAlign: 'center',
            marginTop: 'auto',
            borderTop: '1px solid var(--card-border)'
        }}>
            <div className="section-padding" style={{ padding: '2rem 0', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
                <h2 className="logo" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--text-primary)' }}>
                    Aadil<span style={{ color: 'var(--primary)' }}>.</span>
                </h2>

                <div style={{ display: 'flex', gap: '2rem' }}>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--secondary)', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--primary)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--secondary)'}>
                        <Github size={24} />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--secondary)', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--primary)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--secondary)'}>
                        <Linkedin size={24} />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--secondary)', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--primary)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--secondary)'}>
                        <Twitter size={24} />
                    </a>
                    <a href="mailto:contact@example.com" style={{ color: 'var(--secondary)', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--primary)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--secondary)'}>
                        <Mail size={24} />
                    </a>
                </div>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                    &copy; {new Date().getFullYear()} Aadil. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
