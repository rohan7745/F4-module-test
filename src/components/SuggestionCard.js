// SuggestionCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const SuggestionCard = ({ post }) => {
  return (
    <div className="suggestion-card">
      <img
        src={`https://picsum.photos/150?random=${post.id}`}
        alt={`Post ${post.id}`}
      />
      <div className="suggestion-content">
        <h3>{post.title}</h3>
        <Link to={`/item/${post.id}`}>Read More...</Link>
      </div>
    </div>
  );
};

export default SuggestionCard;
