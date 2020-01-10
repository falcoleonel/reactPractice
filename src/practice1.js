import React from "react";
import ReactDOM from "react-dom";

const myName = "Leonel";
const currentYear = new Date(1995, 3, 15).getFullYear();

ReactDOM.render(
  <div>
    <p>Created by {myName}</p>
    <p>Copyright {currentYear}</p>
  </div>,
  document.getElementById("root")
);
