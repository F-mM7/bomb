import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// ゲーム開始前に表示するページ
function StartPage({ onStart }: { onStart: () => void }) {
  return (
    <div className="start-page">
      <h1>ゲームの説明</h1>
      <p>ここにゲームのルールや遊び方を記載してください。</p>
      <button onClick={onStart}>スタート</button>
    </div>
  );
}

function App() {
  const [started, setStarted] = useState(false);
  const [count, setCount] = useState(0);

  // ゲーム未開始の場合は説明ページを表示
  if (!started) {
    return <StartPage onStart={() => setStarted(true)} />;
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
