import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';  // Importing the CSS file for styles

function Home() {
  return (
    <div className="home-container">
      <h1 className="welcome-text">InfiniFit</h1>
      <Link to="/register" style={{ textDecoration: 'none' }}>
        <button className="sign-up-button">Sign Up</button>
      </Link>
    </div>
  );
}

export default Home;