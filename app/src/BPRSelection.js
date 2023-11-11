// BPRSelection.js

import React from 'react';
import './BPRSelection.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom';

const BPRSelection = () => {
  // Function to handle dropdown toggle
  const toggleDropdown = () => {
    const content = document.querySelector('.dropdown-content');
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
  };

  const navigate = useNavigate();

  // Function to handle routine selection (placeholder for navigation logic)
  const selectRoutine = (routineId) => {
    console.log(`Routine ${routineId} selected`);

    if (routineId === 1) {
      navigate('/full_body_routine');
    }
    else if (routineId === 2) {
      navigate('/core_routine');
    }
    else if (routineId === 3) {
      navigate('/upper_body_routine');
    }
    else if (routineId === 4) {
      navigate('/lower_body_routine');
    }
  };

  const routines = {
    1: {
      name: 'Full Body Workout',
      description: 'This is a brief description of the Full Body Workout routine.'
    },
    2: {
      name: 'Core Routine',
      description: 'This is a brief description of the Core Routine.'
    },
    3: {
      name: 'Upper Body Routine',
      description: 'This is a brief description of the Upper Body Routine.'
    },
    4: {
      name: 'Lower Body Routine',
      description: 'This is a brief description of the Lower Body Routine.'
    }
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
        {[1, 2, 3, 4].map((routineNum) => (
          <div key={routineNum} className="info-block" onClick={() => selectRoutine(routineNum)}>
            <h3>{routines[routineNum].name}</h3>
            <p>{routines[routineNum].description}</p>
          </div>
        ))}
      </section>

      {/* Footer, if necessary */}

    </div>
  );
};

export default BPRSelection;
