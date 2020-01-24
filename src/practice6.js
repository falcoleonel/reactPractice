import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import emojipedia from "./emojipedia";

import "./styles6.css";

var numbers = [3, 15, 4, 16, 5];

const shortMeaning = emojipedia.map(function(x) {
  return x.meaning.substring(0, 100);
});

console.log(shortMeaning);

const double = numbers.map(x => x * 2);

console.log(double);

const lessthan10 = numbers.filter(x => x < 10);

console.log(lessthan10);

const acummuleted = numbers.reduce(
  (accumulator, current) => accumulator + current
);

console.log(acummuleted);

const exists = numbers.find(x => x < 20 && x > 10);

console.log(exists);

const index = numbers.findIndex(x => x < 5 && x > 3);

console.log(index);

ReactDOM.render(<App />, document.getElementById("root"));
