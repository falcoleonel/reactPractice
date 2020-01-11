import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const food = "Foodiest";
const img = "https://picsum.photos/200";
const rootElement = document.getElementById("root");
const customStyle = { color: "blue" };

customStyle.color = "purple";

function App() {
  return (
    <div>
      <h1 className="heading" contentEditable="true" spellCheck="false">
        My Favourite {food}
      </h1>
      <ul>
        <li style={{ color: "green" }}>Spaghetti</li>
        <li style={customStyle}>Lasagne</li>
        <li>Capirucha</li>
      </ul>
      <img
        className="food-image"
        alt="Spaghetti"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTLBdlHHzqQRbPJjNidDXrj6h0zIIvjZZ-PmzKpMcU146D04Zz4"
      />
      <img
        className="food-image"
        alt="Lasagne"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQu_3NZQ39LVddWHjh5kbszLwOruzHGN2aQhVKcqE-t1JMQ8PeX"
      />
      <img
        className="food-image"
        alt="Capirotada"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQWiECI3ADdnQTRpsrF5pOwP0IOac7k8FV3OLWU_Ca-nLwJiemW"
      />
      <img alt="Imagen" src={img + "?grayscale"} />
    </div>
  );
}

ReactDOM.render(<App />, rootElement);
