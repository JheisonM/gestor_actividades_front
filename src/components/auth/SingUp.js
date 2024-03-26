import React, { useState } from 'react';
import './SignUp.css';

const SignUp = ({ handleSignUp }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '' // Nuevo campo para confirmar la contraseña
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignUp(formData);
  };

  return (
    <div className="signup-container">
      <h2 className="signup-title">Registro</h2>
      <form onSubmit={handleSubmit}>
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
        <div className="form-group">
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirmar contraseña"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" className="signup-button">Registrarse</button>
      </form>
    </div>
  );
};

export default SignUp;
