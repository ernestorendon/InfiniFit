import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import { AuthProvider } from './AuthContext';
import ProtectedRoute from './ProtectedRoute';
import RegistrationForm from './RegistrationForm';
import BoilerplateRender from "./BoilerplateRender";
import BoilerplateEditor from "./BoilerplateEditor";
import BPRSelection from "./BPRSelection";
import LoginScreen from "./LoginScreen";
import Dashboard from "./Dashboard";


function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/bprselection"
            element={
              <ProtectedRoute>
                <BPRSelection />
              </ProtectedRoute>
            }
          />
          <Route
            path="/:routineName"
            element={
              <ProtectedRoute>
                <BoilerplateRender />
              </ProtectedRoute>
            }
          />
          <Route
            path="/:routineName/edit"
            element={
              <ProtectedRoute>
                <BoilerplateEditor />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;


