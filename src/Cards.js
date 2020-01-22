import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const rootElement = document.getElementById("root");

function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.img} alt="Photo" />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card
      name="Robert Smith"
      img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTJQvfY_PSYM2xiK9PXXuniqf3t3i_wLAy71e-LVqKeJC-BKz2t"
      tel="555 154 1245"
      email="robertsmit@thecure.com"
    />
    <Card
      name="David Bowie"
      img="http://m.zeleb.es/sites/default/files/david-bowie_0.jpg"
      tel="555 154 1245"
      email="davidbowie@bowie.com"
    />
  </div>,
  rootElement
);
