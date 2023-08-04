import React from 'react';
import './footer.css';
import { AiFillFacebook, AiOutlineInstagram, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { Logo } from '../../assets/my-logo.png';

function Footer () {
    return (
        <footer id='footer'>
            <a href='#' className='footer_logo'><img src={Logo} alt='image of my logo'/></a>

            <ul className='pageLinks'>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>About Me</a></li>
                <li><a href='#'>Experience</a></li>
                <li><a href='#'>Portfolio</a></li>
                <li><a href='#'>Contact</a></li>
            </ul>

            <div className='socialLinks'>
                <a href='https://github.com/caitlinramsey' target='blank'><AiFillGithub/></a>
                <a href='https://www.linkedin.com/in/caitlin-ramsey/' target='blank'><AiFillLinkedin/></a>
                <a href='https://www.facebook.com/caitlinramseydesignphotography' target='blank'><AiFillFacebook/></a>
                <a href='https://www.instagram.com/caitlinramseydesignphotography/' target='blank'><AiOutlineInstagram/></a>
            </div>

            <div className='copyright'>
                <small>&copy; Caitlin Ramsey Design & Photography 2023</small>
            </div>
        </footer>
    )
}

export default Footer;