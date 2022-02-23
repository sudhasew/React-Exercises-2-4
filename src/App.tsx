import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Diameter } from "./Exercise4/Diameter";
import { PetInfo } from "./Exercise2/PetInfo";
import { UpDownCounter } from "./Exercise3/UpDownCounter";
function App(): JSX.Element {
  return (
    <div className="App">
      <Diameter></Diameter>
      {/* <PetInfo></PetInfo> */}
      <UpDownCounter></UpDownCounter>
    </div>
  );
}

export default App;
