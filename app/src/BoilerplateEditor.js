import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import './BoilerplateEditor.css';

const BoilerplateEditor = () => {
  const [exercises, setExercises] = useState([]);
  const [routineName, setRoutineName] = useState(''); // State to hold the editable routine name
  const { routineName: routeRoutineName } = useParams(); // This will match the dynamic segment of the URL
  const navigate = useNavigate();

  useEffect(() => {
    const routineUrl = `http://127.0.0.1:5000/${routeRoutineName}`;
    fetch(routineUrl)
      .then(response => response.json())
      .then(data => {
        setExercises(data);
        setRoutineName(routeRoutineName); // Set the initial routine name
      })
      .catch(error => console.error('Error:', error));
  }, [routeRoutineName]);

  const handleSetRepsChange = (index, type, delta) => {
    // Function to increment or decrement sets or reps
    setExercises(exercises.map((exercise, i) => {
      if (i === index) {
        return { ...exercise, [type]: exercise[type] + delta };
      }
      return exercise;
    }));
  };

  const handleSaveRoutine = () => {
    // new routine should be saved to data table and 
    // app should automatically route to /my_routines to display the updated list of saved routines
    console.log('Routine not saved:', { routineName, exercises });
    navigate('/my_routines');
  };

  return (
    <div className="landing-page">
      <Navbar />

      <div className="routine-name-editor">
        <h2>Customize and Save</h2>
        <input 
          type="text" 
          value={routineName} 
          onChange={(e) => setRoutineName(e.target.value)} 
          placeholder="Edit Routine Name"
        />
      </div>

      <div className="exercise-container">
        {exercises.map((exercise, index) => (
          <div key={index} className="exercise">
            <div className='exercise-header'>
              {exercise.exercise}
            </div>
            <div className="sets-reps-editor">
              <div className="sets-editor">
                <span> Sets: {exercise.sets} </span>
                <div className="buttons-vertical">
                  <button 
                    className="set-button" 
                    onClick={() => handleSetRepsChange(index, 'sets', 1)}
                  >
                    +
                  </button>
                  <button 
                    className="set-button" 
                    onClick={() => handleSetRepsChange(index, 'sets', -1)}
                  >
                    -
                  </button>
                </div>
              </div>
              <div className="reps-editor">
                <span> Reps: {exercise.reps} </span>
                <div className="buttons-vertical">
                  <button 
                    className="set-button" 
                    onClick={() => handleSetRepsChange(index, 'reps', 1)}
                  >
                    +
                  </button>
                  <button 
                    className="set-button" 
                    onClick={() => handleSetRepsChange(index, 'reps', -1)}
                  >
                    -
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <button className="save-button" onClick={handleSaveRoutine}>
        Save Routine
      </button>
    </div>
  );
};

export default BoilerplateEditor;
