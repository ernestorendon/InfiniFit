import React, { useState } from 'react';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import './CreateRoutine.css';

const CreateRoutine = () => {
  const [exerciseName, setExerciseName] = useState('');
  const [exercises, setExercises] = useState([]);
  const navigate = useNavigate();
  const routineName = 'new_routine';

  const handleAddExercise = () => {
    if (exerciseName) {
      setExercises([...exercises, { exercise: exerciseName, reps: 1, sets: 1 }]);
      setExerciseName('');
    }
  };

  const handleContinue = () => {
    // if the routine data is saved, the edit page can bring up the routine based on name for further customization
    console.log('Routine not saved:', { routineName, exercises });
    navigate(`/${routineName}/edit`);
  };

  return (
    <div className="create-routine-page">
      <Navbar />
      <div className="routine-creator">
        <h2>New Routine</h2>
        <div className="exercise-adder">
          <input
            type="text"
            placeholder="Exercise Type"
            value={exerciseName}
            onChange={(e) => setExerciseName(e.target.value)}
            className="exercise-type-input"
          />
          <button onClick={handleAddExercise} className="add-button">Add</button>
        </div>
        <div className="exercises-list">
          {exercises.map((exercise, index) => (
            <div key={index} className="exercise-item">
              {exercise.exercise} - Sets: {exercise.sets}, Reps: {exercise.reps}
            </div>
          ))}
        </div>
        <button onClick={handleContinue} className="continue-button">Continue</button>
      </div>
    </div>
  );
};

export default CreateRoutine;
