import { useState } from "react";
import Greeting from "./Greeting";

function App() {
  const [people, setPeople] = useState([
    { name: "Christian", age: 42, hobby: "Coding" },
    { name: "Lisa", age: 38, hobby: "Skiing" },
    { name: "Hermann", age: 21, hobby: "" },
  ]);

  const [newName, setNewName] = useState("");

  function handleInputChange(event) {
    setNewName(event.target.value);
  }

  function handleAddPerson() {
    if (newName.trim() === "") return;

    const newPerson = {
      name: newName,
      age: null,
      hobby: "",
    };

    setPeople([...people, newPerson]);
    setNewName("");
  }

  return (
    <div>
      <h1>Greeting App</h1>

      <input
        type="text"
        placeholder="Enter a name"
        value={newName}
        onChange={handleInputChange}
      />
      <button onClick={handleAddPerson}>Add</button>

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
<!-- In README.md -->
This is a test commit after renaming the repo.
