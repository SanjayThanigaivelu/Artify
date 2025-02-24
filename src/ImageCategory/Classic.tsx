import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import '../style.css';
import DisplayPhotos from '../API/API.ts'; // Import DisplayPhotos component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram ,faLinkedin,faGithub} from '@fortawesome/free-brands-svg-icons';

function Classic() {
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
    <div className="First">
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
      <h2>Classic</h2>
      <div className="image-grid" id="classic-art-images"></div>
       <DisplayPhotos />
    </div>

    {/* Footer */}
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

export default Classic