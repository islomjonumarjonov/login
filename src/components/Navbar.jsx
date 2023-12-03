import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../hooks/useGlobalContext";

function Navbar() {
  // const { user } = useGlobalContext();

  return (
    <div className="navbar container">
      <h1>Logo</h1>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="about">About</NavLink>
        <NavLink to="contact">Contact</NavLink>
        <NavLink to="profile">Profile</NavLink>
      </nav>
    </div>
  );
}

export default Navbar;
