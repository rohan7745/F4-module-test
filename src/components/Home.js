// Home.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../redux/actions';
import './Home.css';
import Navbar from './Navbar';

const Home = () => {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => state);

  
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

 
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Navbar/>
      <h1>Social Media For Travallers</h1>

    
      <div className="search-box">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="card-container">
        {filteredPosts.map((post) => (
          <div className="card" key={post.id}>
            <img
              src={`https://picsum.photos/200?random=${post.id}`}
              alt={`Post ${post.id}`}
            />
            <div className="card-content">
              <h3>{post.title}</h3>
              <p>{post.body.slice(0, 100)}...</p>
              <Link to={`/item/${post.id}`}>Read More...</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
