import { useState } from "react";
import Greeting from "./Greeting";

function App() {
  const [people, setPeople] = [
    { name: "Christian", age: 42, hobby: "Coding" },
    { name: "Lisa", age: 38, hobby: "Skiing" },
    { name: "Hermann", age: 21, hobby: "" },
  ];

  return (
    <div>
      {people.map((person, index) => (
        <Greeting
          key={index}
          name={person.name}
          age={person.age}
          hobby={person.hobby}
        />
      ))}
    </div>
  );
}

export default App;
