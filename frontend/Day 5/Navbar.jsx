
import '../assets/navbar.css'; // Import CSS file for styling
import aalogo from '../assets/lgo 2.jpg';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={aalogo} alt="Agricultural Loan Logo" />
        <h1>Agricultural Welfare Bank</h1>
      </div>
      <ul className="navbar-links">
        {/* <li><Link to="/Dashboard">Dashboard</Link></li> */}
        <li>< Link to='/LandLoanPage'>Land loan</Link></li>
        {/* <li><a href="#Vloan">Vehicle Loan</a></li> */}
        <li><Link to='/CropLoanPage'>Crop Loan</Link></li>
        {/* <li><a href="#liloan">Livestock Loan</a></li> */}
        {/* <li><a href="#sloan">Solar pumps Loan</a></li> */}
        <li><Link to="/Login">Login</Link></li>
        <li>< Link to='/About us'>About us</Link></li>
        <li><Link to="/Register">Register</Link></li>
        <li><Link to="/AdminLogin">Admin</Link></li>

        
      </ul>
    </nav>
  );
};

export default Navbar;
