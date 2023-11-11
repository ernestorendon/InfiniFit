// BPRSelection.js

import React from 'react';
import './BPRSelection.css'; // Import the CSS file

const BPRSelection = () => {
  // Function to handle dropdown toggle
  const toggleDropdown = () => {
    const content = document.querySelector('.dropdown-content');
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
  };

  // Function to handle routine selection (placeholder for navigation logic)
  const selectRoutine = (routineId) => {
    console.log(`Routine ${routineId} selected`);
    // Here you would navigate to the routine's detail page
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
            <a href="#profile">Profile</a> {/* Link to the profile page */}
          </div>
        </div>
      </header>

      <section className="info">
        {[1, 2, 3, 4].map((routine) => (
          <div key={routine} className="info-block" onClick={() => selectRoutine(routine)}>
            <h3>Routine {routine}</h3>
            <p>This is a brief description of Boilerplate Routine {routine}.</p>
          </div>
        ))}
      </section>

      {/* Footer, if necessary */}
    </div>
  );
};

export default BPRSelection;
