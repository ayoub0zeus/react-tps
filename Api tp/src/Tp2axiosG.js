import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserList() {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({
    nom: '',
    prenom: '',
    email: '',
  });

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://192.168.68.53/tpreact/getUsers.php');
        const userData = response.data;
        setUsers(userData);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://192.168.68.53/tpreact/addUser.php', newUser);
      console.log('New User Added:', response.data);
      // You can update the users state with the newly added user if needed.
    } catch (error) {
      console.error('Error adding new user:', error);
    }
  };

  return (
    <div>
      <h1>User List from Database</h1>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            ID: {user.id}, Name: {user.name}, Email: {user.email}
          </li>
        ))}
      </ul>

      <h2>Add New User</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nom:
          <input
            type="text"
            name="nom"
            value={newUser.nom}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Prenom:
          <input
            type="text"
            name="prenom"
            value={newUser.prenom}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={newUser.email}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
}

export default UserList;