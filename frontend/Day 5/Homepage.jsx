import Navbar from './Navbar';
// /import Bottom from './Bottom';
//import Dashboard from './Dashboard';
//import Slider from './Slider';
// import { FaFacebook } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa6";
// import { FaXTwitter } from "react-icons/fa6";
// import { FaLinkedin } from "react-icons/fa";
import '../assets/homepage.css';
// import LandLoanPage from './LandloanPage';
const HomePage = () => {
  return (
    <div className="home-page">
      <Navbar/>
      {/* <Slider /> */}
      {/* <LandLoanPage/> */}
      <h1>Welcome to AWB Bank!</h1>
      <h2>Land Loan Program</h2>


      <p>
At Agro Welfare Bank, we understand the importance of acquiring land for agricultural purposes. Thats why we offer flexible land loan programs tailored to meet the needs of farmers and agricultural enthusiasts. Whether you are looking to expand your farming operations, invest in agricultural land, or purchase land for personal use, we are here to help.

<h3>Loan Features:</h3>
Competitive interest rates.
Flexible repayment terms.
Quick and hassle-free application process.
Dedicated support from our experienced loan officers.
<h4>Eligibility Criteria:</h4>
To qualify for our land loan program, applicants must meet the following criteria:<br></br>


Must be a farmer or involved in agricultural activities.
Must have a viable plan for land utilization.
Provide necessary documentation related to the land purchase.
<h4>How to Apply:</h4>
Applying for a land loan with Agro Welfare Bank is simple. Follow these steps:

Fill out the application: Complete our online application form or visit our nearest branch to fill out the application in person.
Submit Required Documents: Submit the necessary documentation, including proof of income, land details, and identification.
Loan Processing: Our team will review your application and process your loan request promptly.
Loan Approval: Once approved, you will receive the loan agreement detailing the terms and conditions.
Funds Disbursement: Upon signing the agreement, the loan amount will be disbursed to your designated account.
<h3>Contact Us:</h3>
For more information about our land loan program or to begin your application process, please contact our loan department at:

Phone: 1-800-123-4567
Email: loans@agrowelfarebank.com
We look forward to helping you achieve your land ownership goals!

<h2>Crop Loan Program</h2>
Agro Welfare Bank is dedicated to supporting farmers in their agricultural endeavors. Our Crop Loan program offers financial assistance to farmers for various crop-related expenses, ensuring they have the resources they need to maximize their yields and sustain their livelihoods.







        


 </p>
 {/* <footer className="footter">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>About Us</h2>
          <p>Agro Welfare Bank helps the farmers to get their agricultural loans with minimalistic interest.Our goal is to make sure the farmers can afford loans.
        

          </p>
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
     <footer className="footer">
                <p>&copy; Agro Welfare Bank Co. All rights reserved.</p>
            </footer> 
    </div>
  );
};

export default HomePage;