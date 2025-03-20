import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import UsersPage from "./pages/UsersPage";
import PostsPage from "./pages/PostsPage";
import CommentsPage from "./pages/CommentsPage";

const App = () => {
  return (
    <Router>
      <div className="App">
        <h1>Social Media Analytics App</h1>
        <nav>
          <ul>
            <li><Link to="/">Users</Link></li>
            <li><Link to="/posts">Posts</Link></li>
            <li><Link to="/comments">Comments</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<UsersPage />} />
          <Route path="/posts" element={<PostsPage />} />
          <Route path="/comments" element={<CommentsPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;