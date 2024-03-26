import React from 'react';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import Login from './components/auth/Login';
import SingUp from './components/auth/SingUp';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SingUp />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;