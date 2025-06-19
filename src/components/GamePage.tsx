import ResetButton from "./ResetButton";

interface GamePageProps {
  timeLeft: number;
  phase: number;
  onClickLeft: () => void;
  onClickRight: () => void;
  handleReset: () => void;
}

const formatTime = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${minutes}:${secs.toString().padStart(2, "0")}`;
};

const GamePage = ({
  timeLeft,
  phase,
  onClickLeft,
  onClickRight,
  handleReset,
}: GamePageProps) => {
  return (
    <>
      <div className="timer">
        <h2>残り時間: {formatTime(timeLeft)}</h2>
      </div>
      <div> {phase}</div>
      <div>
        <button onClick={onClickLeft}>left</button>
        <button onClick={onClickRight}>right</button>
      </div>
      <ResetButton onReset={handleReset} />
    </>
  );
};

export default GamePage;
