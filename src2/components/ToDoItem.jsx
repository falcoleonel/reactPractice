import React, { useState } from "react";

function ToDoItem(props) {
  const [isClicked, setIsClicked] = useState(false);

  function handleClick() {
    setIsClicked(prev => {
      return !prev;
    });
  }

  return (
    <div onClick={handleClick}>
      <li style={{ textDecoration: isClicked ? "line-through" : "none" }}>
        {props.item}
      </li>
    </div>
  );
}

export default ToDoItem;
