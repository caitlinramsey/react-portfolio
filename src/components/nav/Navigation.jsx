import "./navigation.css";

import { Link, useLocation } from "react-router-dom";

function Navigation() {
  const currentPage = useLocation().pathname;

  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link
          to="/"
          className={currentPage === "/" ? "nav-link active" : "nav-link"}
        >
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/About"
          className={currentPage === "/About" ? "nav-link active" : "nav-link"}
        >
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Experience"
          className={currentPage === "/Blog" ? "nav-link active" : "nav-link"}
        >
          Experience
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Project"
          className={
            currentPage === "/Contact" ? "nav-link active" : "nav-link"
          }
        >
          Portfolio
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Services"
          className={
            currentPage === "/Contact" ? "nav-link active" : "nav-link"
          }
        >
          Services
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Contact"
          className={
            currentPage === "/Contact" ? "nav-link active" : "nav-link"
          }
        >
          Contact
        </Link>
      </li>
    </ul>
  );
}

export default Navigation;
