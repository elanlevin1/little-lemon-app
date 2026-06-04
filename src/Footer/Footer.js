import './Footer.css';
import { Link } from 'react-router-dom';

/* Footer component renders the footer section of the website,
including the restaurant logo, navigation links, contact information, and social media links. */
const Footer = () =>  {
    /* handleClick function is used to smoothly scroll to different sections of the page when navigation links are clicked. */
    const handleClick = (anchor) => (e) => {
        e.preventDefault();
        const id = `${anchor}`;
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };

    return (
        <footer className="footer">
            <img className="footer-logo" src="./assets/lemon-logo.png" alt="Little Lemon logo"/>
            <div className="list-column">
                <h3>Navigation</h3>
                <ul className="footer-links">
                    <li><a href="/">Home</a></li>
                    <li><a href="#about" onClick={handleClick('about')}>About</a></li>
                    <li><a href="#menu">Menu</a></li>
                    <li><Link to="/booking">Reservations</Link></li>
                    <li><a href="#order">Order Online</a></li>
                    <li><a href="#login">Login</a></li>
                </ul>
            </div>

            <div className="list-column">
                <h3>Contact</h3>
                <ul className="footer-links">
                    <li>123 Main Street, Chicago, IL 60601</li>
                    <li><a href="tel:1234567890">(123) 456-7890</a></li>
                    <li><a href="mailto:info@littlelemon.com">info@littlelemon.com</a></li>
                </ul>
            </div>

            <div className="list-column">
                <h3>Connect with Us</h3>
                <ul className="footer-links">
                    <li><a href="https://www.facebook.com" class="fa fa-facebook"> Facebook</a></li>
                    <li><a href="https://www.instagram.com" class="fa fa-instagram"> Instagram</a></li>
                    <li><a href="https://www.linkedin.com" class="fa fa-linkedin"> LinkedIn</a></li>
                </ul>
            </div>
        </footer>
    )
}
export default Footer;