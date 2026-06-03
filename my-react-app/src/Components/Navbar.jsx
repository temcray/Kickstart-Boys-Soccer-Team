import { FaMoon, FaSun } from "react-icons/fa";

function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="navbar">
      <h1><strong>Kickstart Boys Soccer</strong></h1>

      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#programs">Programs</a>
        <a href="#contact">Contact</a>

         <button
          className="toggle-btn"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;