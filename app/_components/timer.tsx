import './timer.css';
import { FaUndoAlt, FaStepForward } from 'react-icons/fa';
import { FaGear } from 'react-icons/fa6';
import React, { useEffect, useState } from 'react';

const Timer = () => {
  const pomodoroTime = 1500; // 25 minutes, default value = 1500
  const longBreak = 900; // 15 minutes, default value = 900
  const shortBreak = 300; // 5 minutes, default value = 300

  const [isPaused, setPause] = useState<boolean>(true);
  const [time, setTime] = useState<number>(pomodoroTime);
  const [minutes, setMinutes] = useState<number>(Math.floor(time / 60));
  const [seconds, setSeconds] = useState<string>(String(time % 60 < 10 ? `0${time % 60}` : time % 60));

  const [sessionCounter, setSessionCounter] = useState<number>(1);
  const [pausePlay, setPausePlay] = useState<string>('Play');

  // State variable to track the current timer mode
  const [timerMode, setTimerMode] = useState<'pomodoro' | 'shortBreak' | 'longBreak'>('pomodoro');

  useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null;

    if (!isPaused) {
      intervalId = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime <= 0) {
            setSessionCounter(sessionCounter + 0.5);
            clearInterval(intervalId as NodeJS.Timeout);

            // Update the timer mode based on the session counter
            if (sessionCounter % 1 === 0) {
              setTimerMode(sessionCounter % 4 === 0 ? 'longBreak' : 'shortBreak');
              return sessionCounter % 4 === 0 ? longBreak + 1 : shortBreak + 1;
            } else {
              setTimerMode('pomodoro');
              return pomodoroTime + 1;
            }
          }
          const newTime = prevTime - 1;
          setMinutes(Math.floor(newTime / 60));
          setSeconds(newTime % 60 < 10 ? `0${newTime % 60}` : String(newTime % 60));
          return newTime;
        });
      }, 1000);
    } else {
      if (intervalId) {
        clearInterval(intervalId); // when the timer is paused, destroy the interval function
      }
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isPaused, time, sessionCounter]);

  const startTimer = () => {
    setPause(!isPaused);
    if (isPaused) {
      setPausePlay("Pause");
    } else {
      setPausePlay("Play");
    }
  };

  const resetAll = () => {
    setSessionCounter(1);
    setTime(pomodoroTime + 1);
  };

  const skipTimer = () => {
    setTime(0);
  };

  // Define button styles based on the timer mode
  const pomodoroStyle: React.CSSProperties = {
    backgroundColor: timerMode === 'pomodoro' ? 'white' : 'transparent',
    color: timerMode === 'pomodoro' ? 'black' : 'white',
  };

  const shortBreakStyle: React.CSSProperties = {
    backgroundColor: timerMode === 'shortBreak' ? 'white' : 'transparent',
    color: timerMode === 'shortBreak' ? 'black' : 'white',
  };

  const longBreakStyle: React.CSSProperties = {
    backgroundColor: timerMode === 'longBreak' ? 'white' : 'transparent',
    color: timerMode === 'longBreak' ? 'black' : 'white',
  };

  return (
    <div className="Pomodoro">
      <div className="breaks">
        <button style={pomodoroStyle} onClick={resetAll}>Pomodoro</button>
        <button style={shortBreakStyle} onClick={resetAll}>Short Break</button>
        <button style={longBreakStyle} onClick={resetAll}>Long Break</button>
      </div>
      <h1 className="timer">{`${minutes}:${seconds}`}</h1>
      <button className="skipTimer" onClick={skipTimer}><FaStepForward /></button>
      <div className="plReSe">
        <button className="buttonPlay" onClick={startTimer}>{`${pausePlay}`}</button>
        <button className="restart" onClick={resetAll}><FaUndoAlt /></button>
        <button className="settings"><FaGear /></button>
      </div>
      <p className="sessionCounter">{`#${sessionCounter}`}</p>
    </div>
  );
};

export default Timer;
