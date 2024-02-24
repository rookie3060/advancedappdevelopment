import { useState } from 'react';
import '../assets/adminuserview.css';
import { Link } from 'react-router-dom';  


const AdminUserView = () => {
  const [userDetails, setUserDetails] = useState({
    id: 1,
    username: 'user1',
    email: 'user1@example.com',
    role: 'admin',
    status: 'active'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails(prevDetails => ({
      ...prevDetails,
      [name]: value
    }));
  };
  const handleLogout = () => {
    // Implement logout logic here
    alert('Logged out successfully!');
    // Redirect to homepage
    window.location.href = '/'; // Redirect to homepage
  };

  const handleUpdate = () => {
    // Simulate updating user details
    console.log('Updating user details:', userDetails);
    alert('User details updated successfully!');
  };

  return (
    <div>
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
        <h2>User Details</h2>
        <div className="user-details">
          <div>
            <label>Username:</label>
            <input type="text" name="username" value={userDetails.username} onChange={handleChange} />
          </div>
          <div>
            <label>Email:</label>
            <input type="email" name="email" value={userDetails.email} onChange={handleChange} />
          </div>
          <div>
            <label>Role:</label>
            <input type="text" name="role" value={userDetails.role} onChange={handleChange} />
          </div>
          <div>
            <label>Status:</label>
            <input type="text" name="status" value={userDetails.status} onChange={handleChange} />
          </div>
          <button onClick={handleUpdate}>Update Details</button>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        &copy; 2024 Agro Welfare Bank Admin 
      </div>
    </div>
  );
};

export default AdminUserView;
