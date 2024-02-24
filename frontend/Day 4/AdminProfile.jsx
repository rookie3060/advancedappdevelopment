import { useState } from 'react';
import { Link } from 'react-router-dom';  
import '../assets/adminprofile.css'; // Import CSS for styling

const AdminProfile = () => {
  const [username, setUsername] = useState('admin');
  const [email, setEmail] = useState('admin@example.com');
  const [password, setPassword] = useState('adminpassword');
  const handleLogout = () => {

    alert('Logged out successfully!');
    // Redirect to homepage
    window.location.href = '/'; // Redirect to homepage
  };
  const handleSave = (e) => {
    e.preventDefault();

    // Simulate saving profile changes
    console.log('Saving profile changes...');
    console.log('New Username:', username);
    console.log('New Email:', email);
    console.log('New Password:', password);
    alert('Profile changes saved successfully!');
  };

  return (
    <div className='profile'>
      {/* Top navigation bar */}
      <div className="top-navbar">
        <div className="logo">Admin Dashboard</div>
        <ul className="nav-links">
        <li><Link to="/AdminProfile">Profile</Link></li>
          <li><Link to="/AdminUsers">Users</Link></li>
          {/* <li><Link to="/AdminEvents">Events</Link></li>
          <li><Link to="/AdminSettings">Settings</Link></li> */}
          <li><button onClick={handleLogout}>Logout</button></li>
        </ul>
      </div>

      {/* Side navigation bar */}
      <div className="side-navbar">
        <ul>
        <li><Link to="/AdminDashboard">Dashboard</Link></li>
          <li><Link to="/AdminAnalytics">Analytics</Link></li>
          <li><Link to="/AdminReports">Reports</Link></li>
        </ul>
      </div>

      {/* Main content area */}
      <div className="main-content">
        <div className="profile-container">
          <form onSubmit={handleSave}>
          <h2>Admin Profile</h2>
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
            <button type="submit">Save Changes</button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        &copy; 2024  Agro Welfare Bank Admin 
      </div>
    </div>
  );
};

export default AdminProfile;
