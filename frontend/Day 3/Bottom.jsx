//import React from 'react';
import '../assets/footter.css';

// const Footter = () => {
//   return (
//     <div className="footer">
//       <p>Contact us: example@example.com</p>
//       <p>Phone: 123-456-7890</p>
//       <p>&copy; 2024 Your Agricultural Website</p>
//     </div>
//   );
// }

// export default Footter;
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";


//import React from 'react';
import '../assets/footer.css'; // Import CSS file for styling

const Bottom = () => {
  return (
    <footer className="footer">
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
    </footer>
  );
};

export default Bottom;



