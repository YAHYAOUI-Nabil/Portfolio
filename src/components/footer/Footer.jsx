import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
      <a href="#home" className='footer_logo'>Nabil Yahyaoui</a>

      <ul className='permalinks'>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#service">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookF/></a>
        <a href="https://facebook.com" target="_blank" rel="noreferrer"><FiInstagram/></a>
        <a href="https://facebook.com" target="_blank" rel="noreferrer"><IoLogoTwitter/></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; NABIL YAHYAOUI. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer