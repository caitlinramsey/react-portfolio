import React from 'react';
import './footer.css';
// import { AiFillFacebook, AiOutlineInstagram, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
// import { Logo } from '../../assets/my-logo.png';

function Footer () {
    return (
        <footer id='footer'>
            {/* <a href='#' className='footer_logo'><img src={Logo} alt='image of my logo'/></a> */}

            <ul className='pageLinks'>
                <li><a href='#'>Home</a></li>
                <li><a href='#about'>About Me</a></li>
                <li><a href='#experience'>Experience</a></li>
                <li><a href='#portfolio'>Portfolio</a></li>
                <li><a href='#contact'>Contact</a></li>
            </ul>

            <div className='socialLinks'>
                <a href='https://github.com/caitlinramsey' target='blank'><GitHub/></a>
                <a href='https://www.linkedin.com/in/caitlin-ramsey/' target='blank'><Linkedin/></a>
                <a href='https://www.facebook.com/caitlinramseydesignphotography' target='blank'><Facebook/></a>
                <a href='https://www.instagram.com/caitlinramseydesignphotography/' target='blank'><Instagram/></a>
            </div>

            <div className='copyright'>
                <small>&copy; Caitlin Ramsey Design & Photography 2023</small>
            </div>
        </footer>
    )
}

export default Footer;