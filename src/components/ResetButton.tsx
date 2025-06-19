interface ResetButtonProps {
  onReset: () => void;
}

const StartPage = ({ onReset }: ResetButtonProps) => {
  return (
    <div>
      <button onClick={onReset}>Reset</button>
    </div>
  );
};

export default StartPage;
