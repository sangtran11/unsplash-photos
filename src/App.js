import React from "react";
import "./App.scss";
import Images from "./Components/Images/Images";
import Header from "./Components/Header/Header";
import ImageModal from "./Components/Modals/ImageModal";

function App() {
  return (
    <div className="App">
      <Header />
      <Images />
      <ImageModal />
    </div>
  );
}

export default App;
