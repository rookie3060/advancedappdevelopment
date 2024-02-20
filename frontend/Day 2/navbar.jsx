
import '../assets/navbar.css'; // Import CSS file for styling
import aalogo from '../assets/lgo 2.jpg';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={aalogo} alt="Agricultural Loan Logo" />
        <h1>Agricultural Loan</h1>
      </div>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
