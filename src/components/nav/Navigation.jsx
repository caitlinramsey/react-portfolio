import "./navigation.css";
import { Link, useLocation } from "react-router-dom";

function Navigation() {
  const current = useLocation();

  const currentPage = current.pathname === '/' ? 'Home' : current.pathname.slice(1);
  console.log(currentPage);

  console.log(currentPage === "Home");

  return (
    <div id="navigation">
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link
            to="/"
            onClick={() => handlePageChange("Home")}
            className={currentPage === "Home" ? "active" : "nav-link"}
          >
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/About"
            onClick={() => handlePageChange("About")}
            className={currentPage === "About" ? "active" : "nav-link"}
          >
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/Experience"
            onClick={() => handlePageChange("Experience")}
            className={currentPage === "Experience" ? "active" : "nav-link"}
          >
            Experience
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/Project"
            onClick={() => handlePageChange("Project")}
            className={currentPage === "Project" ? "active" : "nav-link"}
          >
            Portfolio
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/Services"
            onClick={() => handlePageChange("Services")}
            className={currentPage === "Services" ? "active" : "nav-link"}
          >
            Services
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/Contact"
            onClick={() => handlePageChange("Contact")}
            className={currentPage === "Contact" ? "active" : "nav-link"}
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
