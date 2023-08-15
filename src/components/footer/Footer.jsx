import React from 'react';
import './footer.css';
import { AiFillFacebook, AiOutlineInstagram, AiFillGithub, AiFillLinkedin } from "react-icons/ai";


function Footer () {
    return (
        <footer id='footer'>
            {/* <ul className='pageLinks'>
                <li><a href='#'>Home</a></li>
                <li><a href='#about'>About Me</a></li>
                <li><a href='#experience'>Experience</a></li>
                <li><a href='#portfolio'>Portfolio</a></li>
                <li><a href='#contact'>Contact</a></li>
            </ul> */}

            <div className='socialLinks'>
                <a href='https://github.com/caitlinramsey' target='blank'><AiFillGithub/></a>
                <a href='https://www.linkedin.com/in/caitlin-ramsey/' target='blank'><AiFillLinkedin/></a>
                <a href='https://www.facebook.com/doubledowncreationsus' target='blank'><AiFillFacebook/></a>
                <a href='https://www.instagram.com/doubledowncreations/' target='blank'><AiOutlineInstagram/></a>
            </div>

            <div className='copyright'>
                <small>&copy; Double Down Creations 2023</small>
            </div>
        </footer>
    )
}

export default Footer;