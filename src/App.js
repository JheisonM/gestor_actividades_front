import React from 'react';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route exact path="/" component={HomePage} />
          <Route path="/dashboard" component={DashboardPage} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;