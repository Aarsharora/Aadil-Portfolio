import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import './Navbar.css';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Projects", path: "/projects" },
    { title: "Contact", path: "/contact" },
  ];

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <Link
        to="/"
        className="logo"
        onClick={() => {
          setActive("");
          window.scrollTo(0, 0);
        }}
      >
        Aadil<span>.</span>
      </Link>

      <ul className="nav-links">
        {navLinks.map((link) => (
          <li key={link.title}>
            <Link
              to={link.path}
              className={`nav-link ${location.pathname === link.path ? "active" : ""}`}
            >
              {link.title}
            </Link>
          </li>
        ))}
        <li><ThemeToggle /></li>
      </ul>

      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <div className="mobile-only-toggle" style={{ display: 'none' }}>
          {/* Logic handled via CSS media query usually, but for quick insertion: show/hide logic */}
          {/* Actually, let's just put one ThemeToggle in the main nav for desktop, and one inside mobile menu? 
               Or just next to hamburger menu. Ideally next to hamburger for mobile.
            */}
        </div>
        <div className="menu-icon" onClick={() => setToggle(!toggle)}>
          {toggle ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>

      {toggle && (
        <div className="mobile-menu glass">
          {navLinks.map((link) => (
            <Link
              key={link.title}
              to={link.path}
              className={`nav-link`}
              onClick={() => {
                setToggle(false);
              }}
            >
              {link.title}
            </Link>
          ))}
          <div style={{ marginTop: '1rem', paddingLeft: '0' }}><ThemeToggle /></div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
