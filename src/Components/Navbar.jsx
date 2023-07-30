import "../assets/Navbar.css";
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <>
      <nav>
        <h2>APP</h2>
        <ul>
          <li>
          <Link to={"/"}>Universidades</Link>
          </li>
          <li>
          <Link to={"/contador"}>Contador</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
