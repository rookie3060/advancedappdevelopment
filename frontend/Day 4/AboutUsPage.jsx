

import '../assets/AboutUsPage.css'; // 
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const AboutUsPage = () => {
    return (
              <> <header className="top-navbar"><h1 className="logo">Agro Welfare Bank</h1>
                
            </header>
        <div className="about-us-page">
            
            <main className="main-content">
                <section className="about-section">
                    <h2>About Us</h2>
                    <p>We are committed to providing farmers with access to affordable and flexible agricultural loans. Our mission is to support the growth of the agricultural sector by offering financial assistance to farmers for purchasing land, equipment, seeds, and other resources necessary for farming.</p>
                    <p>With our easy application process and competitive interest rates, we strive to empower farmers to enhance productivity, improve their livelihoods, and contribute to the overall development of rural communities.</p>
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
   
                </section>
            
            </main>
            {/* <footer className="footer">
                <p>&copy; 2024 Agricultural Loan Co. All rights reserved.</p>
            </footer> */}
        </div></> 
    );
}

export default AboutUsPage;
