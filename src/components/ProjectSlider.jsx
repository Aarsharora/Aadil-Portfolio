import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const projects = [
    {
        id: 1,
        title: "E-Commerce Reform",
        description: "A complete overhaul of an e-commerce platform focusing on user experience, speed optimization, and modern design principles.",
        tags: ["React", "Node.js", "MongoDB"],
        image: "https://via.placeholder.com/400x250/151030/915EFF?text=E-Commerce"
    },
    {
        id: 2,
        title: "AI Dashboard",
        description: "Interactive dashboard for visualizing AI model performance metrics with real-time data updates and chart controls.",
        tags: ["Python", "D3.js", "FastAPI"],
        image: "https://via.placeholder.com/400x250/151030/00CEA8?text=AI+Dashboard"
    },
    {
        id: 3,
        title: "Social Connect",
        description: "A social media application built for communities to share updates, events, and connect with like-minded individuals.",
        tags: ["Vue.js", "Firebase", "Sass"],
        image: "https://via.placeholder.com/400x250/151030/BF61FF?text=Social+App"
    },
    {
        id: 4,
        title: "Finance Tracker",
        description: "Personal finance management tool helping users track expenses, set budgets, and visualize spending habits.",
        tags: ["Next.js", "PostgreSQL", "Prisma"],
        image: "https://via.placeholder.com/400x250/151030/FF5733?text=Finance+Tracker"
    }
];

const ProjectSlider = () => {
    const sliderRef = useRef(null);

    const scroll = (direction) => {
        if (sliderRef.current) {
            const { current } = sliderRef;
            const scrollAmount = 350; // card width + gap
            if (direction === 'left') {
                current.scrollLeft -= scrollAmount;
            } else {
                current.scrollLeft += scrollAmount;
            }
        }
    }

    return (
        <div style={{ position: 'relative', width: '100%' }}>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '1rem', gap: '1rem' }}>
                <button onClick={() => scroll('left')} style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', color: 'var(--text-primary)', padding: '0.5rem', borderRadius: '50%', cursor: 'pointer' }}><ArrowLeft /></button>
                <button onClick={() => scroll('right')} style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', color: 'var(--text-primary)', padding: '0.5rem', borderRadius: '50%', cursor: 'pointer' }}><ArrowRight /></button>
            </div>

            <div
                ref={sliderRef}
                style={{
                    display: 'flex',
                    gap: '2rem',
                    overflowX: 'auto',
                    scrollBehavior: 'smooth',
                    paddingBottom: '1rem',
                    scrollbarWidth: 'none', /* Firefox */
                    msOverflowStyle: 'none',  /* IE 10+ */
                }}
                className="hide-scrollbar"
            >
                <style>{`
            .hide-scrollbar::-webkit-scrollbar { display: none; }
        `}</style>

                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        className="glass"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        style={{
                            minWidth: '320px',
                            maxWidth: '320px',
                            borderRadius: '20px',
                            overflow: 'hidden',
                            display: 'flex',
                            flexDirection: 'column'
                        }}
                    >
                        <div style={{ height: '180px', width: '100%', overflow: 'hidden' }}>
                            <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s' }} onMouseOver={e => e.currentTarget.style.transform = 'scale(1.1)'} onMouseOut={e => e.currentTarget.style.transform = 'scale(1.0)'} />
                        </div>
                        <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>{project.title}</h3>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: '1.5' }}>
                                {project.description}
                            </p>
                            <div style={{ marginTop: 'auto', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                {project.tags.map((tag) => (
                                    <span key={tag} style={{ fontSize: '0.8rem', color: 'var(--primary)', padding: '0 0.2rem' }}>#{tag}</span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default ProjectSlider;
