import React, { useState } from "react";

function App() {
  //Create state object
  const [fullName, setFullName] = useState({
    fName: "",
    lName: ""
  });

  function handleChange(event) {
    const { value, name } = event.target;

    //for updating an state object
    setFullName(previous => {
      if (name === "fName") {
        return {
          fName: value,
          lName: previous.lName
        };
      } else if (name === "lName") {
        return {
          fName: previous.fName,
          lName: value
        };
      }
    });
    // if (inputName === "fName") setFullName({ fName: newValue });
    // else if (inputName === "lName") setFullName({ lName: newValue });
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}{" "}
      </h1>
      <form>
        <input
          onChange={handleChange}
          name="fName"
          placeholder="First Name"
          //Controlled components
          value={fullName.fName}
        />
        <input
          onChange={handleChange}
          name="lName"
          placeholder="Last Name"
          value={fullName.lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
