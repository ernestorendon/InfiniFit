import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Importing the CSS file for styles

function Home() {
  return (
    <div className="home-container">
      <header className="header">
        <h1 className="welcome-text">InfiniFit</h1>
        {/* Other header elements like menu if needed */}
      </header>
      <div>
        <Link to="/register" className="sign-up-button">Register</Link>
      </div>
      <div>
        <Link to="/login" className="sign-up-button">Log In</Link>
      </div>
    </div>
  );
}

export default Home;
