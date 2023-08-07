import React from 'react';
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

function Navigation(props) {
    const tabs = ['About', 'Experience', 'Portfolio', 'Services', 'Contact'];
    return (
        <div className="tabs">
      <ul className="nav nav-tabs">
        {tabs.map((tab) => (
          <li
            className={
              props.currentPage === tab ? "nav-item is-active" : "nav-item"
            }
            key={tab}
          >
            <a
              href={"#" + tab.toLowerCase()}
              // Whenever a tab is clicked on,
              // the current page is set through the handlePageChange props.
              onClick={() => props.handlePageChange(tab)}
              className={
                props.currentPage === tab ? "nav-link active" : "nav-link"
              }
            >
              {tab}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navigation;