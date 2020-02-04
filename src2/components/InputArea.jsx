import React, { useState } from "react";

function InputArea(props) {
  const [inputText, setInputTex] = useState("");

  function handleChange(event) {
    const { value } = event.target;
    setInputTex(value);
  }

  return (
    <div className="form">
      <input onChange={handleChange} type="text" value={inputText} />
      <button
        onClick={() => {
          props.addItem(inputText);
          setInputTex("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
