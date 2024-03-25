import React from 'react';

function ActivityList({ activities }) {
  return (
    <ul>
      {activities.map(activity => (
        <li key={activity.id}>{activity.title}</li>
      ))}
    </ul>
  );
}

export default ActivityList;