import React from 'react';
import './footer.css';
import navLogo from '../../assets/logo-white-thick.png'


const Footer = () => {
    return (
        <footer id='footer'>

            <div className='photography'>
                <h4 className='footer-photography text-white pb-2'>Want to see my photography and design? Click the logo.</h4>
                <a href="https://doubledowncreations.com/" className="my-logo">
                <img src={navLogo} width='250px' alt="image of my logo" />
                </a>
            </div>

            <div className='copyright text-white'>
                <small>&copy; Double Down Creations 2023</small>
            </div>
        </footer>
    )
}

export default Footer;