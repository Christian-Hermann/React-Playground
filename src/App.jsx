import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
    console.log("Clicked! New count is:", count + 1);
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Count: {count}</h1>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
