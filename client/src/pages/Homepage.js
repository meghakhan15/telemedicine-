// Homepage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/HomepageStyle.css';

const Homepage = () => {
  const navigate = useNavigate();
  const [showRolePopup, setShowRolePopup] = useState(false);

  const handleRoleSelection = (role) => {
    setShowRolePopup(false);
    navigate(`/login?role=${role}`);
  };

  return (
    <div className="homepage-container">
      <header className="hero-section">
        <h1 className="app-name">MEDICONNECT</h1>
        <h3 className="hero-title">Welcome to TeleMed</h3>
        <p className="hero-subtitle">
          Connecting you with healthcare professionals from the comfort of your home.
        </p>
        <div className="hero-buttons">
          <button
            className="btn btn-primary"
            onClick={() => setShowRolePopup(true)}
          >
            Login
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => navigate('/register')}
          >
            Register
          </button>
        </div>
      </header>

      <section className="features-section">
        <h2>Why Choose TeleMed?</h2>
        <p className="features-description">
          TeleMed brings healthcare to your fingertips. Book appointments, manage medical records, 
          and connect with professionals anytime, anywhere.
        </p>
        <div className="features">
          <div className="feature">
            <h3>Easy Appointments</h3>
            <p>Book consultations with top doctors with just a few clicks.</p>
          </div>
          <div className="feature">
            <h3>Secure Medical Records</h3>
            <p>Access and manage your medical records securely.</p>
          </div>
          <div className="feature">
            <h3>24/7 Support</h3>
            <p>Get assistance anytime, anywhere, with our dedicated support.</p>
          </div>
        </div>
      </section>

      {showRolePopup && (
        <div className="role-popup">
          <div className="role-popup-content">
            <h3>Select Login Role</h3>
            <button onClick={() => handleRoleSelection('doctor')}>Doctor</button>
            <button onClick={() => handleRoleSelection('patient')}>Patient</button>
            <button onClick={() => handleRoleSelection('admin')}>Admin</button>
            <button onClick={() => setShowRolePopup(false)} className="close-popup">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Homepage;
