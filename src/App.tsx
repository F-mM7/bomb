import { useState, useEffect } from "react";
import "./App.css";
import StartPage from "./components/StartPage";
import ResetButton from "./components/ResetButton";
import GamePage from "./components/GamePage";

function App() {
  const [timeLeft, setTimeLeft] = useState<number>(600);
  const [gameStarted, setGameStarted] = useState(() => {
    return localStorage.getItem("gameStartTime") !== null;
  });
  const [gameOvered, setGameOvered] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleStart = () => {
    const t = Date.now().toString();
    setGameStarted(true);
    localStorage.setItem("gameStartTime", t);
  };

  const handleReset = () => {
    localStorage.removeItem("gameStartTime");
    setGameStarted(false);
    setGameOvered(false);
    setSuccess(false);
  };

  useEffect(() => {
    if (!gameStarted) return;

    const interval = setInterval(() => {
      const elapsed = Math.floor(
        (Date.now() - Number(localStorage.getItem("gameStartTime"))) / 1000
      );
      const remaining = Math.max(0, 10 - elapsed); //600
      setTimeLeft(remaining);

      if (remaining === 0) {
        setGameOvered(true);
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [gameStarted]);

  if (!gameStarted) return <StartPage onStart={handleStart} />;

  if (gameOvered) {
    if (success) {
      return (
        <div>
          <h1>解除成功!!!</h1>
          <ResetButton onReset={handleReset} />
        </div>
      );
    }
    return (
      <div>
        <h1>解除失敗...</h1>
        <ResetButton onReset={handleReset} />
      </div>
    );
  }

  return (
    <GamePage
      timeLeft={timeLeft}
      phase={0}
      onClickLeft={() => {
        setGameOvered(true);
        setSuccess(true);
      }}
      onClickRight={() => {
        setGameOvered(true);
        setSuccess(false);
      }}
      handleReset={handleReset}
    />
  );
}

export default App;
