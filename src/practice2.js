import React from "react";
import ReactDom from "react-dom";

import "./styles.css";

const doc = document.getElementById("root");
const hour = new Date(2020, 1, 10, 20).getHours();
const colorLabel = { color: "" };

let label;

if (hour < 12) {
  label = "Good Morning";
  colorLabel.color = "red";
} else if (hour < 18) {
  label = "Good Afternoon";
  colorLabel.color = "green";
} else {
  label = "Good Night";
  colorLabel.color = "blue";
}

ReactDom.render(
  <h1 className="heading" style={colorLabel}>
    {label}
  </h1>,
  doc
);
