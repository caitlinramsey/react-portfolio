import React from 'react';
import { useState } from 'react';
import './navigation.css';
import {BiHomeAlt, BiUser, BiCodeCurly, BiSolidContact} from 'react-icons/bi';
import {FaServicestack} from 'react-icons/fa';
import {GrStackOverflow} from 'react-icons/gr';
import {Link} from 'react-scroll';

function Navigation () {
    const [activeNavigation, setActiveNavigation] = useState('#')
    return (
        <nav>
            <Link to='header' spy={true} smooth={true} duration={500} activeClass='active'><BiHomeAlt/></Link>
            <Link to='about' spy={true} smooth={true} duration={500} activeClass='active'><BiUser/></Link>
            <Link to='experience' spy={true} smooth={true} duration={500} activeClass='active'><BiCodeCurly/></Link>
            <Link to='services' spy={true} smooth={true} duration={500} activeClass='active'><FaServicestack/></Link>
            <Link to='project' spy={true} smooth={true} duration={500} activeClass='active'><GrStackOverflow/></Link>
            <Link to='contact' spy={true} smooth={true} duration={500} activeClass='active'><BiSolidContact/></Link>
        </nav>
    )
}

export default Navigation;