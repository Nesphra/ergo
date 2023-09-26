import './timer.css'
import React, { useEffect, useState } from 'react';

const Timer = () => {
    const [isStarted, setTimer] = useState<boolean>();
    const [minutes, setMinutes] = useState<number>();
    const [seconds, setSeconds] = useState<String>();

    useEffect(() => {
        var time: number = 1500
        var isStarted: boolean = true

        setInterval(() => {
            if (isStarted == true){
                time = time - 1;
            } else {
                time = time
            }
            var minutes: number = Math.floor(time / 60);
            var seconds: number = time % 60;
            if (seconds <10){
                setSeconds("0" + seconds);
            } else{
                setSeconds(String(seconds));
            }
            setMinutes(minutes);
        }, 1000)
    }, []);

    return (
        <div className="Pomodoro">
            <button onClick={()=>{setTimer(true)}} className='buttonPlay'>Play</button>
            <button onClick={()=>{setTimer(false)}}>Pause</button>
            <h1>{`${minutes}:${seconds}`}</h1>
        </div>
    );
};

export default Timer;