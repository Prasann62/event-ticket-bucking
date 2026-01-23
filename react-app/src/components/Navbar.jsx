import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuActive, setMenuActive] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setMenuActive(!menuActive);
    const closeMenu = () => setMenuActive(false);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
            <a href="#" className="navbar-brand">EVENTIFY</a>
            <ul className={`nav-links ${menuActive ? 'active' : ''}`}>
                <li><a href="#events" onClick={closeMenu}>Events</a></li>
                <li><a href="#about" onClick={closeMenu}>About</a></li>
                <li><a href="#testimonials" onClick={closeMenu}>Artists</a></li>
                <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
            </ul>
            <button
                className={`menu-toggle ${menuActive ? 'active' : ''}`}
                onClick={toggleMenu}
                aria-label="Toggle Navigation Menu"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>
        </nav>
    );
};

export default Navbar;
