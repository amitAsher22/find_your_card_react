import "./App.css";
import React from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";

import Driver from "./components/driver/Driver";
import Luxury from "./components/luxury/Luxury";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />

      <Driver />
      <Luxury />
    </div>
  );
}

export default App;
