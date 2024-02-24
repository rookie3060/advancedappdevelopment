import { useState } from 'react';
import '../assets/register.css';  

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation to ensure passwords match
    if (password.length < 8) {
        alert('Password must be at least 8 characters long.');
        return;
      }
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
   
      alert('Registration successfully!!');
      alert('Redirecting to Login Page..');
      window.location.href = '/Login';

    // Simulate form submission
    console.log('Registration form submitted:');
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);

    // Clear form fields after submission
    setUsername('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <h2>Register</h2>
        <div>
          <label htmlFor="username">Username:</label>
          <input 
            type="text" 
            id="username" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
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
          <label htmlFor="password">Password:</label>
          <input 
            type="password" 
            id="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input 
            type="password" 
            id="confirmPassword" 
            value={confirmPassword} 
            onChange={(e) => setConfirmPassword(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;