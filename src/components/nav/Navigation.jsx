import "./navigation.css";
import { Link, useLocation } from "react-router-dom";

function Navigation() {
  const currentPage = useLocation().pathname;

  return (
    <div id="navigation">

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
            className={
              currentPage === "/About" ? "nav-link active" : "nav-link"
            }
          >
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/Experience"
            className={currentPage === "/Experience" ? "nav-link active" : "nav-link"}
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
              currentPage === "/Services" ? "nav-link active" : "nav-link"
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
    </div>
  );
}

export default Navigation;
