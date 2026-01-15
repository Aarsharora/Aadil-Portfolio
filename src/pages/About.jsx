import React from 'react';
import { motion } from 'framer-motion';

const skills = [
    { category: "Frontend", items: ["React", "Three.js", "JavaScript", "HTML5", "CSS3", "Tailwind"] },
    { category: "Backend", items: ["Node.js", "Express", "MongoDB", "Python", "SQL"] },
    { category: "Tools", items: ["Git", "Figma", "Docker", "VS Code"] }
];

const experiences = [
    {
        title: "Senior Developer",
        company: "Tech Solutions Ltd.",
        date: "2023 - Present",
        desc: "Leading the frontend team in building responsive web applications using React and TypeScript."
    },
    {
        title: "Web Developer",
        company: "Creative Agency",
        date: "2021 - 2023",
        desc: "Developed and maintained client websites, optimizing for performance and SEO."
    },
    {
        title: "Junior Developer",
        company: "StartUp Hub",
        date: "2020 - 2021",
        desc: "Assisted in the development of a SaaS platform using the MERN stack."
    }
];

const About = () => {
    return (
        <div className="section-padding" style={{ paddingTop: '120px', minHeight: '100vh' }}>
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
            >
                <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '2px' }}>Introduction</p>
                <h2 style={{ fontSize: '3rem', fontWeight: 'bold', margin: '0.5rem 0 2rem 0', color: 'var(--text-primary)' }}>Overview.</h2>

                <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', lineHeight: '1.8', maxWidth: '800px', marginBottom: '4rem' }}>
                    I'm a skilled software developer with experience in TypeScript and JavaScript,
                    and expertise in frameworks like React, Node.js, and Three.js.
                    I'm a quick learner and collaborate closely with clients to create efficient,
                    scalable, and user-friendly solutions that solve real-world problems.
                    Let's work together to bring your ideas to life!
                </p>

                {/* Skills Section */}
                <h3 style={{ fontSize: '2rem', fontWeight: 'bold', margin: '0 0 1.5rem 0', color: 'var(--text-primary)' }}>Tech Stack.</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', marginBottom: '4rem' }}>
                    {skills.map((skillGroup, idx) => (
                        <div key={idx} className="glass" style={{ padding: '1.5rem', borderRadius: '15px', flex: '1 1 250px' }}>
                            <h4 style={{ fontSize: '1.2rem', color: 'var(--primary)', marginBottom: '1rem' }}>{skillGroup.category}</h4>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                                {skillGroup.items.map(item => (
                                    <span key={item} style={{ background: 'var(--bg-secondary)', padding: '0.5rem 1rem', borderRadius: '5px', fontSize: '0.9rem', color: 'var(--text-primary)' }}>{item}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Experience Section */}
                <h3 style={{ fontSize: '2rem', fontWeight: 'bold', margin: '0 0 1.5rem 0', color: 'var(--text-primary)' }}>Experience.</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    {experiences.map((exp, index) => (
                        <div key={index} style={{ display: 'flex', gap: '1rem' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <div style={{ width: '12px', height: '12px', background: 'var(--primary)', borderRadius: '50%' }}></div>
                                <div style={{ width: '2px', flex: 1, background: 'var(--card-border)' }}></div>
                            </div>
                            <div style={{ paddingBottom: '2rem' }}>
                                <h4 style={{ fontSize: '1.4rem', fontWeight: 'bold', color: 'var(--text-primary)' }}>{exp.title}</h4>
                                <p style={{ fontSize: '0.9rem', color: 'var(--secondary)', marginBottom: '0.5rem' }}>{exp.company} | {exp.date}</p>
                                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.5' }}>{exp.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </motion.div>
        </div>
    );
};

export default About;
