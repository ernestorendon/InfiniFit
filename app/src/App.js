import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import RegistrationForm from './RegistrationForm';
import BoilerplateRoutine from "./BoilerplateRoutine";
import LoginScreen from "./LoginScreen";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/:routineName" element={<BoilerplateRoutine />} />
      </Routes>
    </Router>
  );
}

export default App;

