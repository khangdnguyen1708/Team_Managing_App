import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <ul className="navbar-nav me-auto mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" to="/Team_Managing_App">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/GroupedTeamMembers">
            Teams
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
