import React, { useState } from 'react';
import Navbar from './Navbar';
import './Settings.css';

const Settings = () => {
  // States to manage display and edit modes
  const [editMode, setEditMode] = useState({
    fitnessLevel: false,
    focusArea: false,
    workoutTime: false
  });

  // Placeholder state for user settings
  const [userSettings, setUserSettings] = useState({
    fitnessLevel: '(current fitness level)',
    focusArea: '(current focus area)',
    workoutTime: '(current workout duration)'
  });

  // Handle edit mode toggle
  const toggleEdit = (field) => {
    setEditMode({ ...editMode, [field]: !editMode[field] });
  };

  // Handle changes in the edit form and exit edit mode
  const handleChange = (e) => {
    setUserSettings({ ...userSettings, [e.target.name]: e.target.value });
    toggleEdit(e.target.name);
  };

  // Handle exiting edit mode when clicking outside
  const handleBlur = (e) => {
    toggleEdit(e.target.name);
  };

  return (
    <div className="landing-page">
      <Navbar />

      <section className="settings-content">
        <h2>Fitness Settings</h2>

        {/* Fitness Level */}
        <div className="setting-item">
          {editMode.fitnessLevel ? (
            <select
              name="fitnessLevel"
              value={userSettings.fitnessLevel}
              onChange={handleChange}
              onBlur={handleBlur}
              autoFocus
            >
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
            </select>
          ) : (
            <p onClick={() => toggleEdit('fitnessLevel')}>{userSettings.fitnessLevel}</p>
          )}
        </div>

        {/* Focus Area */}
        <div className="setting-item">
          {editMode.focusArea ? (
            <select
              name="focusArea"
              value={userSettings.focusArea}
              onChange={handleChange}
              onBlur={handleBlur}
              autoFocus
            >
              <option value="upper_body">Upper Body</option>
              <option value="lower_body">Lower Body</option>
              <option value="full_body">Full Body</option>
            </select>
          ) : (
            <p onClick={() => toggleEdit('focusArea')}>{userSettings.focusArea}</p>
          )}
        </div>

        {/* Workout Time */}
        <div className="setting-item">
          {editMode.workoutTime ? (
            <input
              type="text"
              name="workoutTime"
              value={userSettings.workoutTime}
              onChange={handleChange}
              onBlur={handleBlur}
              autoFocus
            />
          ) : (
            <p onClick={() => toggleEdit('workoutTime')}>{userSettings.workoutTime}</p>
          )}
        </div>

      </section>
    </div>
  );
};

export default Settings;
