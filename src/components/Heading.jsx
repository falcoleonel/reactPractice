import React from "react";

function Heading() {
  const hour = new Date(2020, 1, 12, 19).getHours();
  const custom = { color: "", size: 0 };

  let foods;

  if (hour < 12) {
    foods = "Breakfast";
    custom.color = "red";
    custom.size = 10;
  } else if (hour < 18) {
    foods = "Food";
    custom.color = "green";
    custom.size = 15;
  } else {
    foods = "Diner";
    custom.color = "blue";
    custom.size = 25;
  }
  return <h1 style={custom}> My Favourite {foods}</h1>;
}

export default Heading;
