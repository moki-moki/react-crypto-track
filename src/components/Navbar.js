import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul className="ul">
        <li className="li">
          <Link to="/">Home</Link>
        </li>
        <li className="li">
          <Link to="/Notes">Notes</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
