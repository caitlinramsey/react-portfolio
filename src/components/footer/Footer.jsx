import React from 'react';
import './footer.css';
import { AiFillFacebook, AiOutlineInstagram, AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
    return (
        <footer className='footer'>

            <div className='social-links'>
                <a href='https://github.com/caitlinramsey' target='blank'><AiFillGithub/></a>
                <a href='https://www.linkedin.com/in/caitlin-ramsey/' target='blank'><AiFillLinkedin/></a>
                <a href='https://www.facebook.com/doubledowncreationsus' target='blank'><AiFillFacebook/></a>
                <a href='https://www.instagram.com/doubledowncreations/' target='blank'><AiOutlineInstagram/></a>
            </div>

            <div className='copyright text-black'>
                <small>&copy; Double Down Creations 2023</small>
            </div>
        </footer>
    )
}

export default Footer;