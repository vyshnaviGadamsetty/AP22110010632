import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://20.244.56.144/test/users")
      .then(response => setUsers(response.data.users))
      .catch(error => console.error("Error fetching users:", error));
  }, []);

  const viewPosts = (userId) => {
    navigate(`/posts?userId=${userId}`);
  };

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name}{" "}
            <button onClick={() => viewPosts(user.id)}>View Posts</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersPage;