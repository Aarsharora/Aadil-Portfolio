import React from 'react';
import ThreeScene from '../components/ThreeScene';
import ProjectSlider from '../components/ProjectSlider';
import Testimonials from '../components/Testimonials';
import { motion } from 'framer-motion';
import profileImg from '../assets/profile.jpg';
import resume from '../assets/resume.pdf';

const SectionWrapper = ({ children, id, title, subtitle }) => (
    <div id={id} className="section-padding">
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '2px' }}>{subtitle}</p>
            <h2 style={{ fontSize: '3rem', fontWeight: 'bold', margin: '0.5rem 0 3rem 0', color: 'var(--text-primary)' }}>{title}.</h2>
            {children}
        </motion.div>
    </div>
);

const Home = () => {
    return (
        <div style={{ width: '100%' }}>
            {/* Hero Section */}
            <section style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to bottom, #000000, #100d25)' }}>
                    <ThreeScene />
                </div>

                <div
                    className="section-padding"
                    style={{
                        position: 'relative',
                        zIndex: 1,
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        pointerEvents: 'none'
                    }}
                >
                    <div className="hero-content-wrapper" style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '2rem',
                        flexWrap: 'wrap-reverse',
                        width: '100%',
                        maxWidth: '1280px',
                        pointerEvents: 'auto',
                        textAlign: 'left'
                    }}>
                        {/* Text Content */}
                        <motion.div
                            className="hero-text"
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            style={{ flex: '1 1 500px' }}
                        >
                            <span style={{
                                padding: '0.5rem 1rem',
                                background: 'rgba(145, 94, 255, 0.1)',
                                border: '1px solid rgba(145, 94, 255, 0.3)',
                                borderRadius: '20px',
                                color: '#915EFF',
                                fontSize: '0.9rem',
                                fontWeight: '600',
                                marginBottom: '1rem',
                                display: 'inline-block'
                            }}>
                                Welcome to my portfolio
                            </span>
                            <h1 style={{ fontSize: 'clamp(3rem, 7vw, 6rem)', fontWeight: '800', lineHeight: 1.1, color: 'white', marginBottom: '1rem' }}>
                                I'm <span className="gradient-text">Aadil</span>
                            </h1>
                            <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', color: '#e0e0e0', fontWeight: '500', marginBottom: '1.5rem' }}>
                                Creative Creative Developer
                            </h2>
                            <p style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: '#aaa6c3', maxWidth: '500px', lineHeight: '1.6', marginBottom: '2.5rem' }}>
                                Crafting immersive digital experiences with 3D visuals, clean code, and modern design principles.
                            </p>

                            <div className="action-buttons" style={{ display: 'flex', gap: '1rem' }}>
                                <a
                                    href={resume}
                                    download="Aadil_Resume.pdf"
                                    style={{
                                        padding: '1rem 2.5rem',
                                        fontSize: '1rem',
                                        background: 'linear-gradient(90deg, #915EFF 0%, #BF61FF 100%)',
                                        color: 'white',
                                        border: 'none',
                                        borderRadius: '8px',
                                        cursor: 'pointer',
                                        fontWeight: 'bold',
                                        boxShadow: '0 4px 15px rgba(145, 94, 255, 0.4)',
                                        transition: 'all 0.3s',
                                        textDecoration: 'none',
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}
                                    onMouseOver={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(145, 94, 255, 0.6)'; }}
                                    onMouseOut={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 15px rgba(145, 94, 255, 0.4)'; }}
                                >
                                    Download CV
                                </a>
                                <button
                                    style={{
                                        padding: '1rem 2.5rem',
                                        fontSize: '1rem',
                                        background: 'transparent',
                                        color: 'white',
                                        border: '1px solid rgba(255, 255, 255, 0.3)',
                                        borderRadius: '8px',
                                        cursor: 'pointer',
                                        fontWeight: 'bold',
                                        transition: 'all 0.3s'
                                    }}
                                    onMouseOver={e => { e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'; e.currentTarget.style.borderColor = 'white'; }}
                                    onMouseOut={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)'; }}
                                    onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                                >
                                    Contact Me
                                </button>
                            </div>
                        </motion.div>

                        {/* Profile Image with New Design */}
                        <motion.div
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            style={{
                                flex: '0 0 auto',
                                display: 'flex',
                                justifyContent: 'center'
                            }}
                        >
                            <div className="glass" style={{
                                padding: '15px',
                                borderRadius: '30px',
                                background: 'rgba(255, 255, 255, 0.03)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                backdropFilter: 'blur(20px)',
                            }}>
                                <div className="profile-card" style={{
                                    width: '320px',
                                    height: '420px',
                                    borderRadius: '20px',
                                    overflow: 'hidden',
                                    position: 'relative'
                                }}>
                                    {/* Overlay Gradient */}
                                    <div style={{
                                        position: 'absolute',
                                        inset: 0,
                                        background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 50%)',
                                        zIndex: 2
                                    }}></div>

                                    <img
                                        src={profileImg}
                                        alt="Aadil"
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            transition: 'transform 0.5s',
                                        }}
                                        onMouseOver={e => e.currentTarget.style.transform = 'scale(1.1)'}
                                        onMouseOut={e => e.currentTarget.style.transform = 'scale(1.0)'}
                                    />

                                    <div style={{ position: 'absolute', bottom: '20px', left: '20px', zIndex: 3 }}>
                                        <p style={{ color: 'white', fontSize: '0.9rem', fontWeight: 'bold' }}>Aadil</p>
                                        <p style={{ color: '#aaa6c3', fontSize: '0.8rem' }}>Developer</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Selected Projects Section */}
            <SectionWrapper id="work" title="Selected Works" subtitle="My Portfolio">
                <ProjectSlider />
                <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                    <a href="/projects" style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: 'bold' }}>View All Projects &rarr;</a>
                </div>
            </SectionWrapper>

            {/* Testimonials Section */}
            <SectionWrapper id="testimonials" title="Testimonials" subtitle="What others say">
                <Testimonials />
            </SectionWrapper>

        </div>
    );
};

export default Home;
