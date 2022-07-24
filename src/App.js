import React from "react";
import "./App.scss";
import Images from "./Components/Images/Images";

function App() {
  return (
    <div className="App">
      <div className="header">
        <p className="title">
          <b>Unsplash</b>
        </p>
        <p className="description">
          The most powerful photo engine in the world.
        </p>
      </div>
      <Images />
    </div>
  );
}

export default App;
