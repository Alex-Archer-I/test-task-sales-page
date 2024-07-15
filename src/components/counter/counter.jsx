import {useState, useEffect} from 'react';

import getTime from '../../util/get-time';

const Counter = (props) => {
    const [time, setTime] = useState({minutes: '--', seconds: '--'});
    const [stopClass, setStopClass] = useState('');

    useEffect(() => {
        let num = 30;
        const interval = setInterval(() => {
            setTime(getTime(num));

            if (num === 0) {
                props.counterHandler();
                setStopClass('counter__timer--stop');
                clearInterval(interval);
            };

            num--;
        }, 1000);
    }, []);

    return (
        <div className="counter">
            <p className="counter__text">Скидка действует:</p>
            <div className={`counter__timer ${stopClass}`}>
                <p className="counter__timeblock">
                    <span className="counter__numbers">{time.minutes}</span>
                    <span className="counter__words">минут</span>
                </p>
                <p className="counter__timeblock">
                    <span className="counter__numbers">{time.seconds}</span>
                    <span className="counter__words">секунд</span>
                </p>
            </div>
        </div>
    );
};

export default Counter;