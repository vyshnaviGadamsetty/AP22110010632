import React, { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";

const PostsPage = () => {
  const [posts, setPosts] = useState([]);
  const [searchParams] = useSearchParams();
  const userId = searchParams.get("userId");
  const navigate = useNavigate();

  useEffect(() => {
    if (userId) {
      axios.get(`http://20.244.56.144/test/users/${userId}/posts`)
        .then(response => setPosts(response.data.posts))
        .catch(error => console.error("Error fetching posts:", error));
    }
  }, [userId]);

  const viewComments = (postId) => {
    navigate(`/comments?postId=${postId}`);
  };

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            {post.content}{" "}
            <button onClick={() => viewComments(post.id)}>View Comments</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsPage;