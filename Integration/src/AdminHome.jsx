import React, { useState, useEffect } from 'react';
import "./AdminHome.css";
import AdminNavbar from './AdminNavbar';

function AdminHome() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch data from the backend
    fetch('http://localhost:8083/api/users/all')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleDelete = (id) => {
    // Send delete request to backend
    fetch(`http://localhost:8083/delete/${id}`, {
      method: 'DELETE',
    })
    .then(() => {
      // After successful delete, update state to reflect changes
      setUsers(users.filter(user => user.id !== id));
    })
    .catch(error => console.error('Error deleting user:', error));
  };

  return (
    <>
    <AdminNavbar/>
    <div>
      <h1>User List</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email ID</th>
            <th>Phone</th>
            <th>Actions</th> {/* New column for delete button */}
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.emailId}</td>
              <td>{user.phone}</td>
              <td>
                <button onClick={() => handleDelete(user.id)}>Delete</button>
              </td> {/* Button for delete action */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
}

export default AdminHome;
