import { useState } from "react";

import styles from "./App.module.css";

export function App() {
  const [count, setCount] = useState(0);
  return (
    <button
      className={styles.GGButton}
      onClick={() => setCount((count) => count + 1)}
    >
      Count is: {count}
    </button>
  );
}
