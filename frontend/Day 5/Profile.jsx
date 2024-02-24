import { useState } from 'react';
import { Link } from 'react-router-dom';  
import '../assets/Profile.css'; 
// import { FaFacebook } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa6";
// import { FaXTwitter } from "react-icons/fa6";
// import { FaLinkedin } from "react-icons/fa"; 

const Profile = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isProfileUpdated, setIsProfileUpdated] = useState(false); // Track if profile is updated
  const handleLogout = () => {
    // Implement logout logic here
    alert('Logged out successfully!');
    // Redirect to homepage
    window.location.href = '/'; // Redirect to homepage
  };
  const handleUpdateProfile = (e) => {
    e.preventDefault();
    // Simulate updating profile (replace with actual API call)
    // Here, we'll just set a flag to indicate that the profile is updated
    setIsProfileUpdated(true);
  };

  return (
    <div>
      {/* Top Navbar */}
      <nav className="top-navbar">
        <div className="logo">Agro Welfare Bank</div>
        <ul className="nav-links">
          <li><Link to="/DdashBoard">DashBoard</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/eventform">Loan Form</Link></li>
          <li><Link to="/schedule-appointment">Loan Assistance</Link></li>
          <li><button onClick={handleLogout}>Logout</button></li>
        </ul>
      </nav>

      {/* Side Navbar */}
      <div className="side-navbar">
      <ul>
      <li><Link to="/DdashBoard">DashBoard</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/eventform">Loan Form</Link></li>
          <li><Link to="/schedule-appointment">Loan Assistance</Link></li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <h2>Profile</h2>
        {isProfileUpdated && <p>Profile updated successfully!</p>}
        <form onSubmit={handleUpdateProfile}>
          <div>
            <label htmlFor="fullName">Full Name:</label>
            <input 
              type="text" 
              id="fullName" 
              value={fullName} 
              onChange={(e) => setFullName(e.target.value)} 
              required 
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input 
              type="email" 
              id="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>
          <div>
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input 
              type="tel" 
              id="phoneNumber" 
              value={phoneNumber} 
              onChange={(e) => setPhoneNumber(e.target.value)} 
              required 
            />
          </div>
          <button type="submit">Update Profile</button>
        </form>
      </div>

      {/* Footer */}
      {/* <footer className="footer">
        © 2024 Event Management Portal
      </footer> */}
     {/* <footer className="footter">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>About Us</h2>
          <p>Agro Welfare Bank helps the farmers to get their agricultural loans with minimalistic interest.Our goal is to make sure the farmers can afford loans.</p>
          <div className="contact">
            <span><i className="fas fa-phone"></i>Contact us:934254689</span>
            <span><i className="fas fa-envelope"></i> Email us:agrowelfarebank@gmail.com</span>
          </div>
          <div className="socials">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaXTwitter /></a>
            <a href="#"><FaLinkedin /></a>
          </div>
        </div>
        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
      </div>
      <p className="footer-bottom-text">AWB&copy; 2024</p>
    </footer> */}

    </div>
  );
};

export default Profile;