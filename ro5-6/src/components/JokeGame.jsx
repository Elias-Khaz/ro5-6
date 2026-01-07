import { useEffect, useState } from "react";
import "./JokeGame.css";

function JokeGame() {
  const [joke, setJoke] = useState(null);
  const [showPunchline, setShowPunchline] = useState(false);
  const [funnyCount, setFunnyCount] = useState(0);
  const [mehCount, setMehCount] = useState(0);

  function fetchJoke() {
    setShowPunchline(false);

    fetch("https://official-joke-api.appspot.com/random_joke")
      .then((res) => res.json())
      .then((data) => {
        setJoke(data);
      });
  }

  useEffect(() => {
    fetchJoke();
  }, []);

  if (!joke) {
    return <p>Loading joke...</p>;
  }

  function handleFunny() {
    setFunnyCount(funnyCount + 1);
    fetchJoke();
  }

  function handleMeh() {
    setMehCount(mehCount + 1);
    fetchJoke();
  }

  return (
    <div className="joke-container">
      <h2>Joke Game </h2>

        <p>
            Funny: <strong>{funnyCount}</strong> Meh: <strong>{mehCount}</strong>
        </p>

      <h3>{joke.setup}</h3>

      {!showPunchline ? (
        <button className="show" onClick={() => setShowPunchline(true)}>
          Show punchline
        </button>
      ) : (
        <>
          <p><strong>{joke.punchline}</strong></p>

          <button className="funny" onClick={handleFunny}>Funny</button>
          <button className="meh" onClick={handleMeh}>Meh</button>
        </>
      )}
    </div>
  );
}

export default JokeGame;
