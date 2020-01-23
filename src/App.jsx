import React from "react";
import Card from "./components/Card";
import Avatar from "./components/Avatar";
import contacts from "./contacts";

function createCard(contacts) {
  return (
    <Card
      key={contacts.id}
      id={contacts.id}
      name={contacts.name}
      img={contacts.img}
      tel={contacts.tel}
      email={contacts.email}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSxJN4jtTcIGnVsvTO-sohQ0o8GfZBBwdMXSiM4YUg_RXrhbobZ" />
      {contacts.map(createCard)}
    </div>
  );
}

export default App;
