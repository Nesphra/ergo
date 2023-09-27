import './timer.css'
import { FaUndoAlt, FaStepForward } from 'react-icons/fa';
import { FaGear } from 'react-icons/fa6';
import React, { useEffect, useState } from 'react';
import { Session } from 'inspector';

const Timer = () => {

    var pomodoroTime : number = 1500 // 25 minutes, default value = 1500
    var longBreak : number = 900 // 15 minutes, default value = 900
    var shortBreak : number = 300 // 5 minutes, default value = 300

    const [isPaused, setPause] = useState<boolean>(true);
    const [time, setTime] = useState<number>(pomodoroTime); // 25 minutes, default value = 1500
    const [minutes, setMinutes] = useState<number>(Math.floor(time / 60));
    
    const [seconds, setSeconds] = useState<string>(String(time % 60 < 10 ? `0${time % 60}` : time % 60));

    const [sessionCounter, setSessionCounter] = useState<number>(1); // counter of sessions
    const [pausePlay, setPausePlay] = useState<string>("Play"); // Pause / play word on the button

    useEffect(() => {
        let intervalId: NodeJS.Timeout | null = null;

        if (!isPaused) {
            intervalId = setInterval(() => {
                setTime((prevTime) => {
                    if (prevTime <= 0) {
                        setSessionCounter(sessionCounter + 0.5);
                        clearInterval(intervalId as NodeJS.Timeout);
                        if (sessionCounter % 1 === 0) { //when the time reaches 0 and the session counter is a full number, put break
                            if (sessionCounter % 4 == 0){
                                return longBreak + 1 // the + 1 is for formatting
                            } else {
                                return shortBreak + 1 
                            }
                        } else { // if the session counter is not a full number, that means you go back to work!
                            return pomodoroTime + 1 
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

    const startTimer = () => { // set the wording in the pause/ play button
        setPause(!isPaused);
        if (isPaused){
            setPausePlay("Pause")
        }else{
            setPausePlay("Play")
        }
    };

    const resetAll = () =>{ // reset the timer when pressed and the session numbers
        setSessionCounter(1);
        setTime(pomodoroTime + 1);
    }

    const skipTimer = () =>{ // skips the current session to go to the next one
        setTime(0);
    }

    return (
        <div className="Pomodoro">
            <div className='breaks'>
                <button>Pomodoro</button>
                <button>Short Break</button>
                <button>Long Break</button>
            </div>
            <h1 className='timer'>{`${minutes}:${seconds}`}</h1>
            <button className="skipTimer" onClick={skipTimer}><FaStepForward/></button>
            <div className='plReSe'>
                <button className='buttonPlay' onClick={startTimer}>{`${pausePlay}`}</button>
                <button className='restart' onClick={resetAll}><FaUndoAlt/></button>
                <button className='settings'><FaGear/></button>
            </div>
            <p className="sessionCounter">{`#${sessionCounter}`}</p>
        </div>
    );
};

export default Timer;