// PomodoroTimer.js
import React, { useState, useEffect } from 'react';

function PomodoroTimer() {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isActive) {
      intervalId = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(intervalId);
            // Aquí puedes agregar lógica adicional cuando el temporizador llegue a cero
          } else {
            setMinutes(prevMinutes => prevMinutes - 1);
            setSeconds(59);
          }
        } else {
          setSeconds(prevSeconds => prevSeconds - 1);
        }
      }, 1000);
    } else {
      clearInterval(intervalId);
    }
    return () => clearInterval(intervalId);
  }, [isActive, minutes, seconds]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  return (
    <div>
      <h2>Pomodoro Timer</h2>
      <div>
        <p>{`${minutes}:${seconds < 10 ? '0' : ''}${seconds}`}</p>
        <button onClick={toggleTimer}>{isActive ? 'Pause' : 'Start'}</button>
      </div>
    </div>
  );
}

export default PomodoroTimer;


