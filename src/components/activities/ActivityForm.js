import React, { useState } from 'react';
import './ActivityForm.css';

const ActivityForm = ({ handleSubmit }) => {
  // Estado para almacenar los datos del formulario
  const [formData, setFormData] = useState({
    title: '',
    description: ''
  });

  // Manejar cambios en los campos del formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Manejar el envío del formulario
  const submitForm = (e) => {
    e.preventDefault();
    handleSubmit(formData);
    // Limpiar el formulario después de enviar
    setFormData({ title: '', description: '' });
  };

  return (
    <div className="activity-form">
      <form onSubmit={submitForm}>
        <input
          type="text"
          name="title"
          placeholder="Título"
          value={formData.title}
          onChange={handleInputChange}
          required
        />
        <textarea
          name="description"
          placeholder="Descripción"
          value={formData.description}
          onChange={handleInputChange}
          required
        ></textarea>
        <button type="submit">Agregar</button>
      </form>
    </div>
  );
};

export default ActivityForm;
