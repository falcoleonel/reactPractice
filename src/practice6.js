import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import emojipedia from "./emojipedia";

import "./styles6.css";

const shortMeaning = emojipedia.map(function(x) {
  return x.meaning.substring(0, 100);
});

console.log(shortMeaning);

ReactDOM.render(<App />, document.getElementById("root"));
