import './Nav.css';
import { useRef, useState } from "react";
import { Link } from 'react-router-dom';

/* Nav component renders the navigation bar of the application,
including the logo, navigation links, and a hamburger menu for mobile responsiveness. */
const Nav = () => {
    const navRef = useRef(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    /* handleClick function is used to smoothly scroll to different sections of the page when navigation links are clicked. */
    const handleClick = (anchor) => (e) => {
        e.preventDefault();
        const id = `${anchor}`;
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    /* The component returns a navigation bar with a logo, a hamburger menu for mobile view, and navigation links. */
    return (
        <nav className="nav" ref={navRef}>
            <img className="logo" src="./assets/Logo.jpg" alt="Little Lemon Logo"/>

            {/* Menu icon HTML lines 34-38 from https://www.w3schools.com/howto/howto_css_menu_icon.asp */}
            <div className={`hamburger-container ${isMenuOpen ? 'change' : ''}`}  onClick={toggleMenu}>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </div>

            <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
                <li><a href="/">Home</a></li>
                <li><a href="#about" onClick={handleClick('about')}>About</a></li>
                <li><a href="#menu">Menu</a></li>
                <li><Link to="/booking">Reservations</Link></li>
                <li><a href="#order">Order Online</a></li>
                <li><a href="#login">Login</a></li>
            </ul>
        </nav>
    )
}
export default Nav;