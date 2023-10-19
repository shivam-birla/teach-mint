import React, { useState, useEffect } from 'react';
import './DigitalClock.css'
import { useNavigate } from 'react-router-dom';
const DigitalClock = ({ hour: initialHour, minute: initialMinute, second: initialSecond }) => {
    const [hour, setHour] = useState(initialHour);
    const [minute, setMinute] = useState(initialMinute);
    const [second, setSecond] = useState(initialSecond);
    const [isRunning, setIsRunning] = useState(true);
    const navigate = useNavigate()
    useEffect(() => {
        setHour(initialHour);
        setMinute(initialMinute);
        setSecond(initialSecond);
    }, [initialHour, initialMinute, initialSecond]);
    useEffect(() => {
        let timer;

        if (isRunning) {
            timer = setInterval(() => {
                if (second < 59) {
                    setSecond(second + 1);
                } else if (minute < 59) {
                    setMinute(minute + 1);
                    setSecond(0);
                } else {
                    setHour(hour < 23 ? hour + 1 : 0);
                    setMinute(0);
                    setSecond(0);
                }
            }, 1000);
        } else {
            clearInterval(timer);
        }

        return () => {
            clearInterval(timer);
        };
    }, [hour, minute, second, isRunning]);

    const toggleClock = () => {
        setIsRunning(!isRunning);
    };

    return (
        <>
            <div className={`digital-clock ${isRunning ? 'running' : ''}`}>
                <button className='back' onClick={() => navigate('/')}>Back</button>
                <div className='clock-containr'>
                    <div className="clock-display">
                        <div className="digit">
                            {hour < 10 ? '0' + hour : hour}
                        </div>
                        <div className="separator">:</div>
                        <div className="digit">
                            {minute < 10 ? '0' + minute : minute}
                        </div>
                        <div className="separator">:</div>
                        <div className="digit">
                            {second < 10 ? '0' + second : second}
                        </div>
                    </div>
                    <button className="control-button" onClick={toggleClock}>
                        {isRunning ? 'Stop' : 'Start'}
                    </button>
                </div>
            </div>
        </>
    );
};

export default DigitalClock;
