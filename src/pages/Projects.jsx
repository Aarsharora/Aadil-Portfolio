import React from 'react';
import { motion } from 'framer-motion';

const projects = [
    {
        name: "Project One",
        description: "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
        tags: ["react", "mongodb", "tailwind"],
    },
    {
        name: "Project Two",
        description: "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
        tags: ["react", "restapi", "scss"],
    },
    {
        name: "Project Three",
        description: "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        tags: ["nextjs", "supabase", "css"],
    },
];

const Projects = () => {
    return (
        <div className="section-padding" style={{ paddingTop: '120px', minHeight: '100vh' }}>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <p style={{ fontSize: '1rem', color: '#aaa6c3', textTransform: 'uppercase', letterSpacing: '2px' }}>My Work</p>
                <h2 style={{ fontSize: '3rem', fontWeight: 'bold', margin: '0.5rem 0 3rem 0' }}>Projects.</h2>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
                    {projects.map((project, index) => (
                        <div key={index} className="glass" style={{ padding: '2rem', borderRadius: '20px', width: '100%', maxWidth: '360px' }}>
                            <div style={{ width: '100%', height: '200px', background: '#232323', borderRadius: '15px', marginBottom: '1rem' }}></div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white' }}>{project.name}</h3>
                            <p style={{ marginTop: '0.8rem', color: '#aaa6c3', fontSize: '0.9rem', lineHeight: '1.5' }}>{project.description}</p>
                            <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem' }}>
                                {project.tags.map(tag => (
                                    <span key={tag} style={{ fontSize: '0.85rem', color: index === 0 ? '#00cea8' : index === 1 ? '#bf61ff' : '#00cea8' }}>#{tag}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default Projects;
