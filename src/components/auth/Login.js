import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate en lugar de useHistory
import './Login.css';

const Login = () => {
  const navigate = useNavigate(); // Utiliza useNavigate en lugar de useHistory
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleLogin = () => {
    // aca se deben validar credenciales con backend y demás, de momento redirige a dashboard
    navigate('/dashboard');
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Iniciar Sesión</h2>
      <div className="form-group">
        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={formData.password}
          onChange={handleInputChange}
          required
        />
      </div>
      <button className="login-button" onClick={handleLogin}>Iniciar Sesión</button>
    </div>
  );
};

export default Login;
