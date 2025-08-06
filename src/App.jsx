import { useState, useEffect } from "react";

function app() {
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("Name changed to:", name);
  }, [name]);

  return (
    <div>
      <h1>Hello {name || "Stranger"}</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Christian"
      />
    </div>
  );
}

export default app;
