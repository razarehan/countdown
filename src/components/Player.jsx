import { useState } from "react";
import { useRef } from "react";

export default function Player() {
  let playerName = useRef();
  const [enteredPlayerName, setEnteredPlayerName] = useState();

  function handleClick() {
    setEnteredPlayerName(playerName.current.value);
    playerName.current.value = '';
  }
  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName??'unknown entity'}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
