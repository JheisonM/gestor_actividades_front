import React from 'react';
import ActivityList from '../components/activities/ActivityList';
import ActivityForm from '../components/activities/ActivityForm';
import PomodoroTimer from '../components/timer/PomodoroTimer';

function DashboardPage() {
  const activities = [
    { id: 1, title: 'Activity 1', description: 'Description of activity 1' },
    { id: 2, title: 'Activity 2', description: 'Description of activity 2' },
  ];

  const handleAddActivity = (newActivity) => {
    // Lógica para agregar una nueva actividad
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <ActivityForm onSubmit={handleAddActivity} />
      <ActivityList activities={activities} />
      <PomodoroTimer />
    </div>
  );
}

export default DashboardPage;
