import React from 'react';

const ActivityItem = ({ activity, handleDelete }) => {
  return (
    <li>
      {activity.title} - {activity.description}{' '}
      <button onClick={() => handleDelete(activity.id)}>Eliminar</button>
    </li>
  );
};

export default ActivityItem;
