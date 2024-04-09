import "./App.css";
import Tooltip from "./Tooltip";
import { useState } from "react";

function App() {
  const [position, setPosition] = useState("");
  return (
    <>
      <div className="main-div">
        <div className="buttons">
          <button onClick={() => setPosition("top")}>Top</button>
          <button onClick={() => setPosition("bottom")}>Bottom</button>
          <button onClick={() => setPosition("left")}>Left</button>
          <button onClick={() => setPosition("right")}>Right</button>
        </div>
        <div className="tooltip">
          <Tooltip text={"Hey.. I am a Tooltip!"} position={position}></Tooltip>
        </div>
      </div>
    </>
  );
}

export default App;
