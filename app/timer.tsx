import React, { useEffect, useState } from 'react';

const Timer = () => {
    debugger;
    const [time, setState] = useState<number>();

    useEffect(() => {
        var time: number = 1500
        setInterval(() => {
            time = time - 1;
            setState(time)
        }, 1000)
    }, []);

    return (
        <div className="Pomodoro">
            <button>Play</button>
            <button>Pause</button>
            <h1>{`${time}`}</h1>
        </div>
    );
};

export default Timer;