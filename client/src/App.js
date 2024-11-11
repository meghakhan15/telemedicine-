// src/App.js
import './App.css';
import React from 'react';
import 'antd/dist/reset.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';

function App() {
  const role = localStorage.getItem('role'); // Retrieve user role
  const isAuthenticated = Boolean(localStorage.getItem('token')); // Assume token indicates login status

  const ProtectedRoute = ({ children }) => {
    if (!isAuthenticated) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Dashboard Route with Protection */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard role={role} />
            </ProtectedRoute>
          }
        />

        {/* Redirect all unknown paths to home */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
