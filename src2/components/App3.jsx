import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("");
  const [isMouseOver, setMouseOver] = useState(false);

  function mouseEnter() {
    setMouseOver(true);
  }
  function mouseOut() {
    setMouseOver(false);
  }

  const [name, setName] = useState("");

  function handleClick(event) {
    setHeadingText(name);
    event.preventDefault();
  }

  function handleChange(event) {
    console.log(event.target.value);
    setName(event.target.value);
    // console.log(event.target.placeholder);
    // console.log(event.target.type);
  }

  return (
    <div className="container">
      <h1>Hello {headingText}</h1>
      <form onSubmit={handleClick}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          value={name}
        />
        <button
          type="submit"
          style={{ backgroundColor: isMouseOver ? "black" : "white" }}
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseOut}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
