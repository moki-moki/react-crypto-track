import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { BiNote } from "react-icons/bi";

const Navbar = () => {
  return (
    <nav>
      <ul className="ul">
        <li className="li">
          <Link className="link" to="/">
            Home <AiOutlineHome className="icon" />
          </Link>
        </li>
        <li className="li">
          <Link className="link" to="/Notes">
            Notes <BiNote className="icon" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
