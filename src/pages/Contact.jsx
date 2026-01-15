import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <div className="section-padding flex-center" style={{ paddingTop: '120px', minHeight: '100vh', flexDirection: 'column' }}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="glass"
                style={{ padding: '3rem', borderRadius: '20px', width: '100%', maxWidth: '700px' }}
            >
                <p style={{ fontSize: '1rem', color: '#aaa6c3', textTransform: 'uppercase', letterSpacing: '2px' }}>Get in touch</p>
                <h2 style={{ fontSize: '3rem', fontWeight: 'bold', margin: '0.5rem 0 2rem 0' }}>Contact.</h2>

                <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <label style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <span style={{ color: 'white', fontWeight: '500' }}>Your Name</span>
                        <input type="text" placeholder="What's your name?" style={{ background: '#151030', border: 'none', padding: '1rem', borderRadius: '10px', color: 'white', outline: 'none' }} />
                    </label>
                    <label style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <span style={{ color: 'white', fontWeight: '500' }}>Your Email</span>
                        <input type="email" placeholder="What's your email?" style={{ background: '#151030', border: 'none', padding: '1rem', borderRadius: '10px', color: 'white', outline: 'none' }} />
                    </label>
                    <label style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <span style={{ color: 'white', fontWeight: '500' }}>Your Message</span>
                        <textarea rows="7" placeholder="What do you want to say?" style={{ background: '#151030', border: 'none', padding: '1rem', borderRadius: '10px', color: 'white', outline: 'none' }} />
                    </label>

                    <button type="submit" style={{ background: '#915EFF', padding: '1rem 2rem', border: 'none', borderRadius: '10px', color: 'white', fontWeight: 'bold', cursor: 'pointer', alignSelf: 'flex-start', boxShadow: '0 0 10px rgba(145, 94, 255, 0.5)' }}>
                        Send
                    </button>
                </form>
            </motion.div>
        </div>
    );
};

export default Contact;
