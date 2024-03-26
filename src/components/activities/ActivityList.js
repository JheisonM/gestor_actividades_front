import React from 'react';
import './ActivityList.css';

const ActivityList = ({ activities, handleDelete }) => {
  return (
    <ul className="activity-list">
      {activities.map((activity) => (
        <li key={activity.id} className="activity-item">
          <input
            type="checkbox"
            id={activity.id}
            checked={activity.completed}
          />
          <label htmlFor={activity.id}>{activity.title}</label>
          <button onClick={() => handleDelete(activity.id)}>Eliminar</button>
        </li>
      ))}
    </ul>
  );
};

export default ActivityList;
