import { useState, useRef } from "react"
import ResultModal from './ResultModal.jsx';

export default function TimerChallenge({ title, targetTime }) {
    const [timerStarted, setTimerStarted] = useState(false);
    const [timerExpired, setTimerExpired] = useState(false);
    const timer = useRef();
    const dialog = useRef();
    function handleStart() {
        timer.current = setTimeout(() => {
            setTimerExpired(true);
            dialog.current.open();
        }, targetTime * 1000);
        
        setTimerStarted(true);
    }
    function handleStop() {
        clearTimeout(timer.current)
    }
    return <>
        <ResultModal ref={dialog} result="Lost" targetTime={1}/>
        <section className="challenge">
            <h2>{title}</h2>
            <p className="challenge-time">
                {targetTime} second{targetTime>1?'s':''}
            </p>
            <p>
                <button onClick={!timerStarted?handleStart:handleStop}>
                    {!timerStarted?'Start':'Stop'} Chanllenge</button>
            </p>
            <p className={timerStarted?'active':''}>
                {timerStarted?'Timmer is running...': 'Timer inactive'}
            </p>
        </section>
    </>
}