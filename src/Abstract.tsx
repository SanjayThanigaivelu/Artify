import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/logo.png';
import './style.css';

function Abstract() {
  useEffect(() => {
    const hamburger = document.querySelector('.hamburger-icon');
    const toggleMenu = () => {
      const mobileMenu = document.getElementById('mobileMenu');
      if (mobileMenu) {
        mobileMenu.classList.toggle('open');
      }
    };

    if (hamburger) {
      hamburger.addEventListener('click', toggleMenu);
    }

    return () => {
      if (hamburger) {
        hamburger.removeEventListener('click', toggleMenu);
      }
    };
  }, []);

  return (
    <div className="TotalContainer">
      {/* Header Section */}
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
                <Link to="/modern-art" className="button-type">Modern Art</Link>
                <Link to="/classic" className="button-type">Classic</Link>
                <Link to="/sculptures" className="button-type">Sculptures</Link>
                <Link to="/cubism" className="button-type">Cubism</Link>
                <Link to="/abstract" className="button-type">Abstract Art</Link>
              </td>
              <td className="hamburger">
                <div className="hamburger-icon">&#9776;</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Mobile Menu */}
      <div className="mobile-menu" id="mobileMenu">
        <Link to="/" className="button-type">Home</Link>
        <Link to="/modern-art" className="button-type">Modern Art</Link>
        <Link to="/classic" className="button-type">Classic</Link>
        <Link to="/sculptures" className="button-type">Sculptures</Link>
        <Link to="/cubism" className="button-type">Cubism</Link>
        <Link to="/abstract" className="button-type">Abstract Art</Link>
      </div>

      {/* Main Content */}
      <div className="main">
        <h2>Abstract Art</h2>
        <div className="image-grid" id="abstract-art-images"></div>
      </div>

      {/* Footer */}
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
  );
}

export default Abstract;