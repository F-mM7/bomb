interface StartPageProps {
  onStart: () => void;
}

const StartPage = ({ onStart }: StartPageProps) => {
  return (
    <div className="start-page">
      <h1>謎解きゲーム「爆弾解除」</h1>
      <p>謎を解いて爆弾を解除しよう</p>
      <p>制限時間は10分</p>
      <button onClick={onStart}>スタート</button>
    </div>
  );
};

export default StartPage;
