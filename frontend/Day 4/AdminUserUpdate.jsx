import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../assets/adminuserupdate.css';

const AdminUserUpdate = () => {
  const { userId } = useParams(); // Get user ID from URL params
  const [userDetails, setUserDetails] = useState({
    id: userId,
    username: '',
    email: '',
    role: '',
    status: ''
  });

  useEffect(() => {
    // Simulate fetching user details based on user ID (e.g., from API)
    // Replace this with your actual data fetching logic
    // For now, initialize user details with dummy data
    const fetchUserDetails = () => {
      // Fetch user details using userId
      // For now, using dummy data
      const dummyUserData = {
        id: userId,
        username: 'user1',
        email: 'user1@example.com',
        role: 'admin',
        status: 'active'
      };

      setUserDetails(dummyUserData);
    };
    

    fetchUserDetails();
  }, [userId]);
  const handleLogout = () => {
    // Implement logout logic here
    alert('Logged out successfully!');
    // Redirect to homepage
    window.location.href = '/'; // Redirect to homepage
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
            <input type="text" value={userDetails.username} readOnly />
          </div>
          <div>
            <label>Email:</label>
            <input type="email" value={userDetails.email} readOnly />
          </div>
          <div>
            <label>Role:</label>
            <input type="text" value={userDetails.role} readOnly />
          </div>
          <div>
            <label>Status:</label>
            <input type="text" value={userDetails.status} readOnly />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        &copy; 2024  Agro Welfare Bank Admin 
      </div>
    </div>
  );
};

export default AdminUserUpdate;
