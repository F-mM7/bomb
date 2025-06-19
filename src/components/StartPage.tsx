function StartPage({ onStart }: { onStart: () => void }) {
  return (
    <div className="start-page">
      <h1>ゲームの説明</h1>
      <p>ここにゲームのルールや遊び方を記載してください。</p>
      <button onClick={onStart}>スタート</button>
    </div>
  );
}

export default StartPage;
