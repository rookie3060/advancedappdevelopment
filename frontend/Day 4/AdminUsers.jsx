import { useState } from 'react';
import '../assets/adminusers.css'; 
import { Link } from 'react-router-dom';  


const AdminUsers = () => {
  const [users, setUsers] = useState([
    { id: 1, username: 'user1', email: 'user1@example.com' },
    { id: 2, username: 'user2', email: 'user2@example.com' },
    { id: 3, username: 'user3', email: 'user3@example.com' },
  ]);

  const handleView = (userId) => {
    alert(`Viewing user with ID ${userId}`);
    window.location.href = '/AdminUserUpdate'; 

  };

  const handleDelete = (userId) => {
    const updatedUsers = users.filter(user => user.id !== userId);
    setUsers(updatedUsers);
    alert(`User with ID ${userId} deleted successfully!`);
  };
  const handleLogout = () => {
    // Implement logout logic here
    alert('Logged out successfully!');
    // Redirect to homepage
    window.location.href = '/'; // Redirect to homepage
  };

  const handleUpdate = (userId) => {
    alert(`Updating user with ID ${userId}`);
    window.location.href = '/AdminUserView'; // Redirect to homepage
  };

  const handleCreateUser = () => {
    alert('Redirecting to create user page...');
    // Implement redirection logic here
    window.location.href = '/AdminUserCreate'; 

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
        <h2>Users</h2>
        <button onClick={handleCreateUser}>Create User</button>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Username</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td className='button'>
                  <button className='view'onClick={() => handleView(user.id)}>View</button>
                  <button className='update'onClick={() => handleUpdate(user.id)}>Update</button>
                  <button className='delete' onClick={() => handleDelete(user.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="footer">
        &copy; 2024  Agro Welfare Bank Admin 
      </div>
    </div>
  );
};

export default AdminUsers;
