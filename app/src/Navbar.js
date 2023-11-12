import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from './AuthContext';
import './Navbar.css';


const Navbar = () => {
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext); // Consume the logout function

  const toggleDropdown = () => {
    const content = document.querySelector('.dropdown-content');
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
  };

  const handleLogout = () => {
    logout(); // Call the logout function from AuthContext
    navigate('/'); // Navigate to home or login page after logout
  };

  const handleSettingsClick = () => {
  navigate('/settings'); // Replace '/profile' with the actual path to your profile page
};


  return (
    <header className="header">
      <h1>InfiniFit</h1>
      <div className="dropdown">
        <button className="dropbtn" onClick={toggleDropdown}>
          <div className="hamburger-icon">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </button>
        <div className="dropdown-content">
          <button className="settings-button" onClick={handleSettingsClick}>Settings</button>
          <div className="logout-button-wrapper">
            <button className="logoutbtn" onClick={handleLogout}>Logout</button> {/* Logout button */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;