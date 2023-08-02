import { Link } from "react-router-dom";
import "./Navstyle.css";

const Navbar = () => {
  return (
    <div className="navgeneral">
      <h4>Logo</h4>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>

      </ul>
    </div>
  );
};

export default Navbar;
