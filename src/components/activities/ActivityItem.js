import React from 'react';

function ActivityItem({ activity }) {
  return (
    <div>
      <h3>{activity.title}</h3>
      <p>{activity.description}</p>
    </div>
  );
}

export default ActivityItem;