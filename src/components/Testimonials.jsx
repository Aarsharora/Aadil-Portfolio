import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const testimonials = [
    {
        name: "Sarah Lee",
        role: "Product Manager",
        company: "TechNova",
        text: "Aadil transformed our outdated website into a modern, high-converting platform. The attention to detail and 3D animations are simply stunning!",
        image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
        name: "Michael Chen",
        role: "Founder",
        company: "StartUp Inc",
        text: "Working with Aadil was seamless. He understood our vision perfectly and delivered a product that exceeded our expectations in record time.",
        image: "https://randomuser.me/api/portraits/men/46.jpg"
    },
    {
        name: "Emily Davis",
        role: "Marketing Director",
        company: "CreativeFlow",
        text: "The new portfolio site has significantly boosted our brand image. Aadil's expertise in React and Three.js is top-notch.",
        image: "https://randomuser.me/api/portraits/women/65.jpg"
    },
    {
        name: "David Wilson",
        role: "CTO",
        company: "FutureTech",
        text: "Incredible technical skills and a great eye for design. The parallax effects and smooth transitions made our landing page pop.",
        image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
        name: "Jessica Brown",
        role: "Designer",
        company: "Artistry Studio",
        text: "A developer who truly cares about the aesthetics. Aadil brought my designs to life with pixel-perfect precision.",
        image: "https://randomuser.me/api/portraits/women/24.jpg"
    },
    {
        name: "Robert Taylor",
        role: "CEO",
        company: "InnovateX",
        text: "Professional, timely, and extremely talented. I highly recommend Aadil for any web development project looking for that 'wow' factor.",
        image: "https://randomuser.me/api/portraits/men/85.jpg"
    }
];

const Testimonials = () => {
    const [width, setWidth] = useState(0);
    const carousel = useRef();

    useEffect(() => {
        if (carousel.current) {
            setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
        }
    }, [carousel]);

    return (
        <div style={{ width: '100%', overflow: 'hidden' }}>
            <motion.div
                ref={carousel}
                whileTap={{ cursor: "grabbing" }}
                style={{ cursor: "grab", overflow: "hidden" }}
            >
                <motion.div
                    drag="x"
                    dragConstraints={{ right: 0, left: -width }}
                    style={{ display: 'flex', gap: '2rem' }}
                >
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            className="glass"
                            style={{
                                minWidth: '350px', // Fixed width for slider items
                                padding: '2rem',
                                borderRadius: '20px',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                userSelect: 'none' // Prevent text selection while dragging
                            }}
                        >
                            <div style={{ fontSize: '2rem', color: 'var(--primary)', lineHeight: 1 }}>"</div>
                            <p style={{ margin: '1rem 0', color: 'var(--text-primary)', lineHeight: '1.6', fontSize: '1rem', fontStyle: 'italic' }}>
                                {testimonial.text}
                            </p>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '1rem' }}>
                                <img src={testimonial.image} alt={testimonial.name} style={{ width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover', pointerEvents: 'none' }} />
                                <div>
                                    <h4 style={{ fontSize: '1rem', fontWeight: 'bold', color: 'var(--text-primary)' }}>{testimonial.name}</h4>
                                    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{testimonial.role} at {testimonial.company}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Testimonials;
