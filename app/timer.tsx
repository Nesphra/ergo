import React, { useEffect, useState } from 'react';

interface State {
    time: number;
    seconds: number;
    minutes: number;
}

const Timer = () => {
    debugger;
    const [state, setState] = useState<State>({
        time: 1500,
        seconds: 0,
        minutes: 25,
    });

    useEffect(() => {
        setTimeout(() => {
            if (state.time === 0){
                return;
            }

            setState({
                time: state.time - 1,
                minutes: Math.floor((state.time - 1)/ 60),
                seconds: state.time - Math.floor((state.time - 1)/60) * 60 -1,
            });
        }, 1000);
    }, [state.time]);

    return (
        <div className="Pomodoro">
            <button>Focus</button>
            <button>Short Break</button>
            <button>Long Break</button>
            <h1>{`${state.minutes}:${
                state.seconds <= 10 ? `0${state.seconds}`: state.seconds
            }`}</h1>
            <button id="button">play</button>
        </div>
    );
};

export default Timer;