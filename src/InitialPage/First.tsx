import  { useEffect } from  'react';
import {Link} from 'react-router-dom';
import logo from '../assets/logo.png';
import DisplayPhotos from '../API/API.ts'; // Import DisplayPhotos component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram ,faLinkedin,faGithub} from '@fortawesome/free-brands-svg-icons';
import '../style.css' 

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
                        <Link to="/modern-art" className="button-type">Modern Art</Link>
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
        <Link to="/mordern-art" className="button-type">Modern Art</Link>
        <Link to="/classic" className="button-type">Classic</Link>
        <Link to="/sculptures" className="button-type">Sculptures</Link>
        <Link to="/cubisum" className="button-type">Cubism</Link>
        <Link to="/abstract" className="button-type">Abstract Art</Link>
    </div>

    <div className="main">
        <Link to="/modern-art"><h2 >Modern Art</h2></Link>
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

    <div className='Footer1'>
  
 <div className='logo1'>
 <Link to ="/" className="footLink1"><img className="logoimg"  src={logo} alt="AgriVibes Logo" /></Link>
    </div>
<div className='Name'>
  <h3>Artify Est:2025</h3>

  <p className='CopyRight'>Copyright © 2025 - All right reserved</p>
  <span className='social-media'><Link to='https://www.instagram.com/sanjay_thanigaivelu/' className="footLink insta"><FontAwesomeIcon icon={faInstagram} /></Link>  <Link to='https://linkedin.com/in/sanjay-thanigaive07' className="footLink linkdin"><FontAwesomeIcon icon={faLinkedin} />  </Link><Link to='https://github.com/SanjayThanigaivelu' className="footLink git"><FontAwesomeIcon icon={faGithub}/></Link></span>
</div>


    </div>
</div>
  )
}

export default First