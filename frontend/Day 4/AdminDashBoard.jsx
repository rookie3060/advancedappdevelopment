import { Link } from 'react-router-dom';
import '../assets/admindashboard.css';
const handleLogout = () => {
    // Implement logout logic here
    alert('Logged out successfully!');
    // Redirect to homepage
    window.location.href = '/'; 
  };

const AdminDashboard = () => {
  return (
    <div>
      {/* Top navigation bar */}
      <div className="top-navbar">
        <div className="logo">Agro Welfare Bank</div>
        <ul className="nav-links">
          <li><Link to="/AdminProfile">Profile</Link></li>
          <li><Link to="/AdminUsers">Users</Link></li>
          {/* <li><Link to="/AdminEvents">Events</Link></li> */}
          {/* <li><Link to="/AdminSettings">Settings</Link></li> */}
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
        <h2>Welcome to the Admin Dashboard!</h2>
        {/* Add your admin dashboard content here */}
      </div>

      {/* Footer */}
      <div className="footer">
        &copy;  Agro Welfare Bank Admin 
      </div>
    </div>
  );
};

export default AdminDashboard;
