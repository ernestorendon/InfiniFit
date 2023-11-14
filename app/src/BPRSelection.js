import React from 'react';
import './BPRSelection.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar'; // Import the Navbar component


const BPRSelection = () => {
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
      description: 'A dynamic routine targeting all major muscle groups with air squats, pushups, situps, walking lunges, and mountain climbers.'
    },
    2: {
      name: 'Core Routine',
      description: 'Strengthen your core with a focused series of crunches, flutter kicks, situps, leg raises, and planks.'
    },
    3: {
      name: 'Upper Body Routine',
      description: 'Build upper body strength with pushups, bench dips, pike pushups, and supermans.'
    },
    4: {
      name: 'Lower Body Routine',
      description: 'Tone and strengthen your lower body with air squats, calf raises, walking lunges, lying glute bridges, and jump squats.'
    }
  };


  return (
    <div className="landing-page">
      <Navbar/>

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
