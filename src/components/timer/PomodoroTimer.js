import React, { useState, useEffect } from 'react';
import './PomodoroTimer.css';

const PomodoroTimer = () => {
  const [time, setTime] = useState(25 * 60); // 25 minutes in seconds
  const [isRunning, setIsRunning] = useState(false);
  const [timerId, setTimerId] = useState(null);

  // Función para manejar el inicio/pausa del temporizador
  const toggleTimer = () => {
    if (isRunning) {
      clearInterval(timerId);
    } else {
      const newTimerId = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime > 0) {
            return prevTime - 1;
          } else {
            clearInterval(newTimerId);
            // Aquí podrías agregar una notificación o realizar alguna acción adicional
            return 0;
          }
        });
      }, 1000);
      setTimerId(newTimerId);
    }
    setIsRunning(!isRunning);
  };

  // Función para restablecer el temporizador
  const resetTimer = () => {
    clearInterval(timerId);
    setTime(25 * 60);
    setIsRunning(false);
  };

  // Función para convertir segundos a formato de tiempo (mm:ss)
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  // Efecto para limpiar el temporizador cuando se desmonta el componente
  useEffect(() => {
    return () => {
      clearInterval(timerId);
    };
  }, [timerId]);

  return (
    <div className="pomodoro-timer">
      <h2 className="pomodoro-title">Temporizador Pomodoro</h2>
      <div className="pomodoro-display">
        <h3 className="pomodoro-time">{formatTime(time)}</h3>
        <div className="pomodoro-controls">
          <button className="pomodoro-toggle" onClick={toggleTimer}>
            {isRunning ? 'Pausar' : 'Iniciar'}
          </button>
          <button className="pomodoro-reset" onClick={resetTimer}>Reiniciar</button>
        </div>
      </div>
    </div>
  );
};

export default PomodoroTimer;
