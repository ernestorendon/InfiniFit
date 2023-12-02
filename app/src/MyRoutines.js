import React from 'react';
import Navbar from './Navbar';
import './MyRoutines.css';

const MyRoutines = () => {
  return (
    <div className="my-routines-page">
      <Navbar />
      <section className="routines-content">
        <h2>My Routines</h2>
        <p>View and launch saved routines here.</p>
      </section>
    </div>
  );
};

export default MyRoutines;
