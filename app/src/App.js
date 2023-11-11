import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import RegistrationForm from './RegistrationForm';
import BoilerplateRoutine from "./BoilerplateRoutine";
import BPRSelection from "./BPRSelection";
import LoginScreen from "./LoginScreen";
import Dashboard from "./Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/:routineName" element={<BoilerplateRoutine />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/bprselection" element={<BPRSelection />} />
      </Routes>
    </Router>
  );
}

export default App;

