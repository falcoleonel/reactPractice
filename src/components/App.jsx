import React from "react";
import emojipedia from "../emojipedia";
import Entry from "./Entry";

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map(emojipedia => (
          <Entry
            key={emojipedia.id}
            emoji={emojipedia.emoji}
            name={emojipedia.name}
            description={emojipedia.meaning}
          />
        ))}
      </dl>
    </div>
  );
}

export default App;
