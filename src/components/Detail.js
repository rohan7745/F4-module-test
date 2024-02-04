// Detail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SuggestionCard from './SuggestionCard'; // Import the new component
import './Detail.css';
import Navbar from './Navbar';

const Detail = () => {
  const { id } = useParams();
  const { posts } = useSelector((state) => state);
  const post = posts.find((p) => p.id === parseInt(id, 10));

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="detail-container">
      <Navbar/>
      <h1>Post Number {post.userId}</h1>
      <div className="detail-card">
        <img
          src={`https://picsum.photos/400?random=${post.id}`}
          alt={`Post ${post.id}`}
        />
        <div className="detail-content">
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      </div>

      <h2>More Posts</h2>
      <div className="suggestion-container">
        
        {posts.slice(0, 3).map((suggestion) => (
          <SuggestionCard key={suggestion.id} post={suggestion} />
        ))}
      </div>
    </div>
  );
};

export default Detail;
