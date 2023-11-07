import React from 'react';
import './Dashboard.css'; // Import your CSS file for styling

const Dashboard = () => {
  return (
    <div className="landing-page">
      <header className="header">
        <h1>Welcome to Our Mobile Site</h1>
      </header>

      <section className="hero">
        <div className="hero-content">
          <h2>Your Mobile Landing Page</h2>
          <p>Discover what we have to offer on your mobile device.</p>
        </div>
      </section>

      <section className="info">
        <div className="info-block">
          <h3>Feature 1</h3>
          <p>Learn about our amazing feature.</p>
        </div>

        <div className="info-block">
          <h3>Feature 2</h3>
          <p>Explore another fantastic feature.</p>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2023 Your Company Name</p>
      </footer>
    </div>
  );
};

export default Dashboard;
