// // LandLoanPage.js
import '../assets/LandLoanPage.css'; // Import CSS file for styling

// const LandLoanPage = () => {
//     return (
//         <div className="land-loan-page">
//             <header>
//                 <h1>Land Loan Application</h1>
//             </header>
//             <main>
//                 <form>
//                     <label htmlFor="loanAmount">Loan Amount:</label>
//                     <input type="number" id="loanAmount" name="loanAmount" />

//                     <label htmlFor="propertyAddress">Property Address:</label>
//                     <input type="text" id="propertyAddress" name="propertyAddress" />

//                     {/* Add more form fields as needed */}
                    
//                     <button type="submit">Submit</button>
//                 </form>
//             </main>
//             <footer>
//                 <p>&copy; 2024 Land Loan Co. All rights reserved.</p>
//             </footer>
//         </div>
//     );
// }

// export default LandLoanPage;


import { useState } from 'react';
// import './styles.css'; 

const LandLoanPage = () => {
    const [loanAmount, setLoanAmount] = useState('');
    const [propertyAddress, setPropertyAddress] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Perform validation
        if (loanAmount === '') {
            alert('Please enter loan amount');
            return;
        }

        if (propertyAddress === '') {
            alert('Please enter property address');
            return;
        }

        // Proceed with form submission
        console.log('Form submitted successfully');
        window.location.href='/';
    };

    return (
        <div>
            <header className="top-navbar">
                <h1 className="logo">Land Loan Application</h1>
                {/* <nav className="nav-links">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav> */}
                
            </header>
            <main className="main-content">
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="loanAmount">Loan Amount:</label>
                        <input 
                            type="number" 
                            id="loanAmount" 
                            name="loanAmount" 
                            value={loanAmount}
                            onChange={(e) => setLoanAmount(e.target.value)}
                        />
                    </div>

                    <div>
                        <label htmlFor="propertyAddress">Property Address:</label>
                        <input 
                            type="text" 
                            id="propertyAddress" 
                            name="propertyAddress" 
                            value={propertyAddress}
                            onChange={(e) => setPropertyAddress(e.target.value)}
                        />
                    </div>
                    
                    {/* Add more form fields as needed */}
                    
                    {/* <button type="submit">Submit</button> */}
                    <button type="button" onClick={handleSubmit}>Submit</button>
                </form>
            </main>
            {/* <footer className="footer">
                <p>&copy; 2024 Land Loan Co. All rights reserved.</p>
            </footer> */}
        </div>
    );
}

export default LandLoanPage;
