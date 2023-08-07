// import React from 'react';
// import { useState } from 'react';
import './navigation.css';
// import {BiHomeAlt, BiUser, BiCodeCurly, BiSolidContact} from 'react-icons/bi';
// import {FaServicestack} from 'react-icons/fa';
// import {GrStackOverflow} from 'react-icons/gr';
// import {Link} from 'react-scroll';

// function Navigation () {
//     const [activeNavigation, setActiveNavigation] = useState('#')
//     return (
//         <nav>
//             <Link to='header' spy={true} smooth={true} duration={500} activeClass='active'><BiHomeAlt/></Link>
//             <Link to='about' spy={true} smooth={true} duration={500} activeClass='active'><BiUser/></Link>
//             <Link to='experience' spy={true} smooth={true} duration={500} activeClass='active'><BiCodeCurly/></Link>
//             <Link to='project' spy={true} smooth={true} duration={500} activeClass='active'><GrStackOverflow/></Link>
//             <Link to='services' spy={true} smooth={true} duration={500} activeClass='active'><FaServicestack/></Link>
//             <Link to='contact' spy={true} smooth={true} duration={500} activeClass='active'><BiSolidContact/></Link>
//         </nav>
//     )
// }

import { Link, useLocation } from 'react-router-dom';

function Navigation() {
  const currentPage = useLocation().pathname;

  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link
          to="/"
          
          className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/About"
          
          className={currentPage === '/About' ? 'nav-link active' : 'nav-link'}
        >
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Experience"
         
          className={currentPage === '/Blog' ? 'nav-link active' : 'nav-link'}
        >
          Experience
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Project"
     
          className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Services"
     
          className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
        >
          Services
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Contact"
     
          className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </Link>
      </li>
    </ul>
  );
}

export default Navigation;