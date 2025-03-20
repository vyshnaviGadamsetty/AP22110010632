import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

const CommentsPage = () => {
  const [comments, setComments] = useState([]);
  const [searchParams] = useSearchParams();
  const postId = searchParams.get("postId");

  useEffect(() => {
    if (postId) {
      axios.get(`http://20.244.56.144/test/posts/${postId}/comments`)
        .then(response => setComments(response.data.comments))
        .catch(error => console.error("Error fetching comments:", error));
    }
  }, [postId]);

  return (
    <div>
      <h2>Comments</h2>
      <ul>
        {comments.map(comment => (
          <li key={comment.id}>{comment.content}</li>
        ))}
      </ul>
    </div>
  );
};

export default CommentsPage;