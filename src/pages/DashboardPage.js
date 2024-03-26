import React, { useState } from 'react';
import ActivityList from '../components/activities/ActivityList';
import ActivityForm from '../components/activities/ActivityForm';
import PomodoroTimer from '../components/timer/PomodoroTimer';
import './DashboardPage.css'; 

const DashboardPage = () => {
  const [activities, setActivities] = useState([]);

  const handleDeleteActivity = (id) => {
    setActivities(activities.filter((activity) => activity.id !== id));
  };

  const handleAddActivity = (newActivity) => {
    setActivities([...activities, { id: Date.now(), ...newActivity }]);
  };

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Panel de Control</h1>
      <div className="dashboard-content">
        <PomodoroTimer className="dashboard-section" />
        <div className="activity-section">
          <h2 className="section-title">Agregar Actividad</h2>
          <ActivityForm handleSubmit={handleAddActivity} />
        </div>
        <div className="activity-section">
          <h2 className="section-title">Lista de Actividades</h2>
          <ActivityList activities={activities} handleDelete={handleDeleteActivity} />
        </div>
      </div>
    </div>
  );
  
};

export default DashboardPage;
