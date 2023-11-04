import React, { useState } from 'react';
import './RegistrationForm.css'; // Import the CSS file

const securityQuestions = {
  1: "What city were you born in?",
  2: "What was the name of your first pet?",
  3: "What's your mother's maiden name?",
  4: "What high school did you attend?",
  5: "What year did you enter college?"
};


const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    securityQuestion: '',
    securityAnswer: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Password and confirmation do not match.');
    } else {
      console.log('Form data submitted:', formData);
    }
  };

  return (
    <div className="registration-form">
      {/* <h1>Registration Form</h1> */}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email Address:</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Security Question:</label>
          <select
            name="securityQuestion"
            value={formData.securityQuestion}
            onChange={handleChange}
            required
          >
            <option value="">Select a question...</option>
            {Object.entries(securityQuestions).map(([key, value]) => (
              <option key={key} value={key}>
                {value}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Answer To Security Question:</label>
          <input
            type="text"
            name="securityAnswer"
            value={formData.securityAnswer}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
