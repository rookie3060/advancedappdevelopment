// CropLoanPage.jsx

import  { useState } from 'react';
import '../assets/CropLoanPage.css'; // Import CSS file for styling

const CropLoanPage = () => {
    const [cropType, setCropType] = useState('');
    const [loanAmount, setLoanAmount] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Perform form validation
        if (!cropType.trim()) {
            alert('Please enter the crop type');
            return;
        }

        if (!loanAmount.trim() || loanAmount <= 0) {
            alert('Please enter a valid loan amount');
            return;
        }

        
        console.log('Crop Type:', cropType);
        console.log('Loan Amount:', loanAmount);
    };

    return (
        <> <header className="top-navbar"> <h1 className="logo">Crop Loan Application</h1>  </header>
        <div className="crop-loan-page">
            
              
                <nav className="nav-links">
                    {/* <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul> */}
                </nav>
          
            <main className="main-content">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="cropType">Crop Type:</label>
                        <input 
                            type="text" 
                            id="cropType" 
                            name="cropType" 
                            value={cropType}
                            onChange={(e) => setCropType(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="loanAmount">Loan Amount:</label>
                        <input 
                            type="number" 
                            id="loanAmount" 
                            name="loanAmount" 
                            value={loanAmount}
                            onChange={(e) => setLoanAmount(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </main>
            {/* <footer className="footer">
                <p>&copy; 2024 Crop Loan Co. All rights reserved.</p>
            </footer> */}
        </div></>
    );
}

export default CropLoanPage;
