import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/adminusercreate.css'; // Import CSS for styling

const AdminUserCreate = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    role: '',
    status: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleLogout = () => {
    // Implement logout logic here
    alert('Logged out successfully!');
    // Redirect to homepage
    window.location.href = '/'; // Redirect to homepage
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to submit form data (e.g., send to server)
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({
      username: '',
      email: '',
      role: '',
      status: ''
    });
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
        <h2>Create User</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username:</label>
            <input type="text" name="username" value={formData.username} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Role:</label>
            <input type="text" name="role" value={formData.role} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Status:</label>
            <input type="text" name="status" value={formData.status} onChange={handleChange} required />
          </div>
          <button type="submit">Create User</button>
        </form>
      </div>

      {/* Footer */}
      <div className="footer">
        &copy; 2024  Agro Welfare Bank Admin 
      </div>
    </div>
  );
};

export default AdminUserCreate;
