import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import './BoilerplateEditor.css';

const BoilerplateEditor = () => {
  const [exercises, setExercises] = useState([]);
  const { routineName } = useParams(); // This will match the  dynamic segment of the URL

  useEffect(() => {
    const routineUrl = `http://127.0.0.1:5000/${routineName}`; // Construct the URL based on the routine name
    fetch(routineUrl)
      .then(response => response.json())
      .then(data => {
        const exercisesWithState = data.map(exercise => ({
          ...exercise,
          sets: Array.from({ length: exercise.sets }, () => ({
            started: false,
            reps: exercise.reps,
            clickedOnce: false,
          })),
        }));
        setExercises(exercisesWithState);
      })
      .catch(error => console.error('Error:', error));
  }, [routineName]); // Re-run the effect if routineName changes

  
  return (
    <div className="landing-page">
      <Navbar />

      <div className="exercise-container">
        {exercises.map((exercise, exerciseIndex) => (
          <div key={exerciseIndex} className="exercise">
            <div className='exercise-header'>
              {`${exercise.exercise} (Sets: ${exercise.sets.length}, Reps: ${exercise.reps})`}
            </div>
          {/*  Insert Button Logic for incrementing Sets and Reps */}
          {/*  Change HandleSetClick function to work with new buttons  */}
          {/*  After user "starts" or submits edits, a handleSubmitClick function will create a mapping like below  */}
          {/*  routine = [
                    {"exercise": "Air Squats", "sets": 3, "reps": 20},
                    {"exercise": "Calf Raises", "sets": 3, "reps": 30},
                    {"exercise": "Walking Lunges", "sets": 3, "reps": 20},
                    {"exercise": "Lying Glute Bridges", "sets": 3, "reps": 20},
                    {"exercise": "Jump Squat", "sets": 3, "reps": 20},
               ]*/}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoilerplateEditor;