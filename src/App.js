import React from "react";
import "./styles.css";
import Navbar from "./components/Navbar.js";
import ImageGallery from "./components/ImageGallery.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ImageGallery />
    </div>
  );
}

export default App;
