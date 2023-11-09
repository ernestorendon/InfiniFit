import React from 'react';
import './Dashboard.css'; // Import your CSS file for styling

const Dashboard = () => {
  // Function to handle dropdown toggle
  const toggleDropdown = () => {
    const content = document.querySelector('.dropdown-content');
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
  };

  return (
    <div className="landing-page">
      <header className="header">
        <h1>InfiniFit</h1>
        <div className="dropdown">
          <button className="dropbtn" onClick={toggleDropdown}>
            <div className="hamburger-icon">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </button>
          <div className="dropdown-content">
            <a href="#profile">Profile</a> {/* You can add your link here */}
          </div>
        </div>
      </header>

      <section className="hero">
        <div className="hero-content">
          <h2>Maximize Your Fitness Journey</h2>
          <p>Discover personalized workouts and achieve your goals.</p>
        </div>
      </section>

      <section className="info">
        <div className="info-block">
          <h3>Choose a Boilerplate Routine</h3>
          <button className="green-button">Select Routine</button>
        </div>

        <div className="info-block">
          <h3>Create a Custom Routine</h3>
          <button className="green-button">Create Routine</button>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2023 InfiniFit</p>
      </footer>
    </div>
  );
};

export default Dashboard;
