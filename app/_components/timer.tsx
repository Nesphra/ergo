import './timer.css'
import { FaUndoAlt } from 'react-icons/fa';
import { FaGear } from 'react-icons/fa6';
import React, { useEffect, useState } from 'react';

const Timer = () => {
    const [isPaused, setPause] = useState<boolean>(true);
    const [time, setTime] = useState<number>(1500); // Initial time is 25 minutes
    const [minutes, setMinutes] = useState<number>(Math.floor(time / 60));
    const [seconds, setSeconds] = useState<string>(String(time % 60));

    const [pausePlay, setPausePlay] = useState<string>("Play");

    useEffect(() => {
        let intervalId: NodeJS.Timeout | null = null;

        if (!isPaused) {
            intervalId = setInterval(() => {
                setTime((prevTime) => {
                    if (prevTime <= 0) {
                        clearInterval(intervalId as NodeJS.Timeout);
                        if (time === 0) {
                            // If 25-minute timer reaches 0, start a new 5-minute timer
                            return 300; // 5 minutes in seconds
                        }
                        return 0;
                    }
                    const newTime = prevTime - 1;
                    setMinutes(Math.floor(newTime / 60));
                    setSeconds(newTime % 60 < 10 ? `0${newTime % 60}` : String(newTime % 60));
                    return newTime;
                });
            }, 1000);
        } else {
            if (intervalId) {
                clearInterval(intervalId);
            }
        }

        return () => {
            if (intervalId) {
                clearInterval(intervalId);
            }
        };
    }, [isPaused, time]);

    const startTimer = () => {
        setPause(!isPaused);
        if (isPaused){
            setPausePlay("Pause")
        }else{
            setPausePlay("Play")
        }
    };

    return (
        <div className="Pomodoro">
            <h1 className='timer'>{`${minutes}:${seconds}`}</h1>
            <div className='plReSe'>
                <button className='buttonPlay' onClick={startTimer}>{`${pausePlay}`}</button>
                <button className='restart'><FaUndoAlt/></button>
                <button className='settings'><FaGear/></button>
            </div>
        </div>
    );
};

export default Timer;
