import { useState } from 'react';
import '../assets/login.css';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (!username || !password) {
      alert('Please enter both username and password.');
      return;
    }
    if (password.length < 8) {
      alert('Password must be at least 8 characters long.');
      return;
    }
    // Dummy check for admin credentials (replace with actual logic)
    if (username !== 'admin' || password !== 'adminpassword') {
      alert('Invalid admin credentials.');
      return;
    }
    alert('Admin login successful!');
    
    alert('Redirecting to Your Admin Dashboard..');
    window.location.href = '/AdminDashBoard';
    // Redirect to the admin dashboard or perform other admin-specific actions
    // window.location.href = '/AdminDashboard';
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin} className="login-form">
        <h2>Admin Login</h2>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input 
            type="text" 
            id="username" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            id="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;
