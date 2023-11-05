import React, { useEffect, useState } from 'react';

const FullBodyRoutine = () => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    // change this to fetch('http://localhost:5000/{routine}') where {routine} catches the user click of 1 of 4 boilerplate routines
    fetch('http://localhost:5000/full_body_routine')
      .then(response => response.json())
      .then(data => {
        // Initialize state for each set of each exercise
        const exercisesWithState = data.map(exercise => ({
          ...exercise,
          sets: Array.from({ length: exercise.sets }, () => ({
            started: false,
            reps: exercise.reps,
            clickedOnce: false, // Add this line
          })),
        }));
        setExercises(exercisesWithState);
      })
      .catch(error => console.error('Error:', error));
  }, []);

   const handleSetClick = (exerciseIndex, setIndex) => {
    setExercises(currentExercises => {
      const newExercises = currentExercises.map((exercise, index) => {
        if (index === exerciseIndex) {
          const newSets = exercise.sets.map((set, sIndex) => {
            if (sIndex === setIndex) {
              // If the set hasn't been started yet, start it and turn it green
              if (!set.started) {
                return { ...set, started: true, firstClick: true };
              }
              // If the set has been started, and it's the first click, turn it yellow
              else if (set.firstClick) {
                return { ...set, reps: set.reps - 1, firstClick: false };
              }
              // If the set has been started, and it's not the first click, decrement reps
              else if (set.reps > 0) {
                return { ...set, reps: set.reps - 1 };
              }
              // If the reps are 0, reset the set on next click
              else {
                return { ...set, reps: exercise.reps, started: false, firstClick: false };
              }
            }
            return set;
          });

          return { ...exercise, sets: newSets };
        }
        return exercise;
      });

      return newExercises;
    });
  };

  return (
    <div id="routine-container">
      {exercises.map((exercise, exerciseIndex) => (
        <div key={exerciseIndex} className="exercise">
          <div className='exercise-header'>
            {`${exercise.exercise} (Sets: ${exercise.sets.length}, Reps: ${exercise.reps})`}
          </div>
          {exercise.sets.map((set, setIndex) => (
            <button
              key={setIndex}
              className='set-button'
              style={{
                backgroundColor: !set.started ? 'red' : set.firstClick ? 'green' : 'yellow',
                color: 'black', // Set font color to black
              }}
              onClick={() => handleSetClick(exerciseIndex, setIndex)}
            >
              {`${set.reps}`}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default FullBodyRoutine;