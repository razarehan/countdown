export default function TimerChallenge({ title, targetTime }) {
    return (
        <section className="challenge">
            <h2>{title}</h2>
            <p className="challenge-time">
                {targetTime} second{targetTime>1?'s':''}
            </p>
            <p>
                <button>Start Chanllenge</button>
            </p>
            <p>
                Timmer is running... / Timer inactive
            </p>
        </section>
    )

}