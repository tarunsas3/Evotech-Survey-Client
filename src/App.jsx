import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Form from './components/Form';
import Login from './components/Login';
import Home from './components/Home';
import Surveys from './components/Surveys';

function App() {
  const initialLoggedInState = localStorage.getItem('isLoggedIn') === 'true';
  const [isLoggedIn, setLoggedIn] = useState(initialLoggedInState);

  const handleLogin = () => {
    setLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
  };

  const handleLogout = () => {
    setLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
  };

  useEffect(() => {
    if (!isLoggedIn && window.location.pathname.includes('surveys')) {
      window.location.href = '/login';
    }
  }, [isLoggedIn]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/form" element={<Form />} />
        {isLoggedIn ? (
          <Route path="/surveys" element={<Surveys onLogout={handleLogout} />} />
        ) : (
          <Route path="/surveys" element={<Navigate to="/login" />} />
        )}
      </Routes>
    </Router>
  );
}

export default App;
