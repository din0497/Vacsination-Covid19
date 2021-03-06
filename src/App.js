import React from "react";

import "./App.css";
import WorldMap from "./worldMap/index";
import LeftBar from "./components/sidebars/LeftBar";
import RightBar from "./components/sidebars/RightBar";

function App() {
  return (
    <div className="App">
      <LeftBar/>
      <WorldMap />
      <RightBar/>
    </div>
  );
}

export default App;
