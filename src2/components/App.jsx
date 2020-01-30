import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        color: "#ffcb05",
        backgroundColor: "#194D33",
        textAlign: "center"
      }}
    >
      <h1>{count}</h1>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

export default App;
