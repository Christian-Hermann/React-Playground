function Greeting({ name, age, hobby }) {
  return (
    <div>
      <h2>Hello {name}!</h2>
      <p>Age: {age}</p>
      <p>Hobby: {hobby ? hobby : "No hobby listed"}</p>
    </div>
  );
}

export default Greeting;
