import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Aplicación de Gestión de Actividades</h1>
      <p className="home-description">Inicia sesión o <Link to="/signup" className="register-link">Regístrate</Link> para continuar.</p>
      <div className="home-buttons">
        <Link to="/login" className="button">Iniciar Sesión</Link>
      </div>
    </div>
  );
};

export default HomePage;
