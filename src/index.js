import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const food = "Foodiest";

function App() {
  return (
    <div className="">
      <h1>My Favourite {food}</h1>
      <ul>
        <li>Spagetti</li>
        <li>Lasagne</li>
        <li>Capirucha</li>
      </ul>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
