import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from './AuthContext'; // Adjust the path as needed
import './Dashboard.css';
import Navbar from './Navbar'; // Import the Navbar component




const Dashboard = () => {
  const navigate = useNavigate(); // Hook to enable programmatic navigation

  // Function to handle clicking on 'Select Routine'
  const handleSelectRoutineClick = () => {
    navigate('/bprselection'); // Route to BPRSelection page
  };

  return (
    <div className="landing-page">
      <Navbar /> {/* Include the Navbar component */}


      <section className="hero">
        <div className="hero-content">
          <h2>Maximize Your Fitness Journey</h2>
          <p>Discover personalized workouts and achieve your goals.</p>
        </div>
      </section>

      <section className="info">
        <div className="info-block">
          <h3>Choose a Boilerplate Routine</h3>
          <button className="green-button" onClick={handleSelectRoutineClick}>Select Routine</button>
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
