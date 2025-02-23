import React , { useEffect } from  'react';
import {Link} from 'react-router-dom';
import logo from './assets/logo.png';
import DisplayPhotos from './API.js'; // Import DisplayPhotos component

import './style.css';

function First() {

    useEffect(() => {
        const hamburger = document.querySelector('.hamburger-icon');

        if (!hamburger) return; // Ensure the element exists

        const toggleMenu = () => {
            const mobileMenu = document.getElementById('mobileMenu');
            if (mobileMenu) {
                mobileMenu.classList.toggle('open');
            }
        };

        hamburger.addEventListener('click', toggleMenu);

        return () => {
            hamburger.removeEventListener('click', toggleMenu);
        };
    }, []);

  return (
    <div className='First'>
    <div className="ribbion">
        <table className="container">
            <tbody>
                <tr className="row1">
                    <td>
                        <Link to="/">
                            <img className="logo" src={logo} alt="logo" />
                            <div className="comp-name">Artify Est.2024</div>
                        </Link>
                    </td>
                    <td className="menu-links">
                        <Link to="/" className="button-type">Home</Link>
                        <Link to="/Mordern-art" className="button-type">Modern Art</Link>
                        <Link to="/classic" className="button-type">Classic</Link>
                        <Link to="/sculptures" className="button-type">Sculptures</Link>
                        <Link to="/cubisum" className="button-type">Cubism</Link>
                        <Link to="/abstract" className="button-type">Abstract Art</Link>
                    </td>
                    <td className="hamburger">
                        <div className="hamburger-icon">&#9776;</div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

    <div className="mobile-menu" id="mobileMenu">
        <Link to="/" className="button-type">Home</Link>
        <Link to="/Mordern-art" className="button-type">Modern Art</Link>
        <Link to="/classic" className="button-type">Classic</Link>
        <Link to="/sculptures" className="button-type">Sculptures</Link>
        <Link to="/cubisum" className="button-type">Cubism</Link>
        <Link to="/abstract" className="button-type">Abstract Art</Link>
    </div>

    <div className="main">
        <Link to="/Mordern-art"><h2 id="Mordern-art">Modern Art</h2></Link>
        <div className="image-grid" id="modern-art-images"></div>

        <Link to="/classic"><h2>Classic Art</h2></Link>
        <div className="image-grid" id="classic-art-images"></div>

        <Link to="/sculptures"><h2>Sculptures</h2></Link>
        <div className="image-grid" id="sculpture-art-images"></div>

        <Link to="/cubisum"><h2>Cubism</h2></Link>
        <div className="image-grid" id="cubism-art-images"></div>

        <Link to="/abstract"><h2>Abstract Art</h2></Link>
        <div className="image-grid" id="abstract-art-images"></div>
    </div>

    {/* Add DisplayPhotos component to fetch and display images */}
    <DisplayPhotos />

    <div className="footer">
        <table className="footer-bottom">
            <tbody>
                <tr>
                    <td>
                        <img className="foot logo" src={logo} alt="logo" />
                        <div className="foot-logo-moto">Artify Est.2024</div>
                    </td>
                    <td><Link to="/" className="foot Home">Home</Link></td>
                    <td><Link to="/modern-art" className="foot Gallery">Gallery</Link></td>
                    <td className="foot Contact">
                        Contact
                        <div>
                            <i className="fa fa-envelope"></i>
                            <a href="mailto:sanjaymuthulakshmi@gmail.com?subject=Art%20Gallery%20Inquiry">
                                sanjaymuthulakshmi@gmail.com
                            </a>
                            <br />
                            <i className="fa fa-phone"></i> 9488941260
                        </div>
                    </td>
                    <td className="foot Followus">
                        Follow Us
                        <div className="icon">
                            <a href="https://www.instagram.com/sanjay_thanigaivelu/"><i className="fab fa-instagram"></i></a>
                            <a href="https://www.linkedin.com/in/sanjay-thanigaive07/"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </td>
                    <td className="foot Copyright">
                        &#169;2024 Artify. All rights reserved.
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
  )
}

export default First