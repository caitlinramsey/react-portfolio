import "./navigation.css";
import { Link, useLocation } from "react-router-dom";

function Navigation({ currentPage, handlePageChange }) {
  // const currentPage = useLocation().pathname;

  return (
    <div id="navigation">

      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link
            to="/Home"
            onClick={() => handlePageChange('Home')}
            className={currentPage === "/" ? "nav-link active" : "nav-link"}
          >
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/"
            onClick={() => handlePageChange('About')}
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
            onClick={() => handlePageChange('Experience')}
            className={currentPage === "/Experience" ? "nav-link active" : "nav-link"}
          >
            Experience
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/Project"
            onClick={() => handlePageChange('Project')}
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
            onClick={() => handlePageChange('Services')}
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
            onClick={() => handlePageChange('Contact')}
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
