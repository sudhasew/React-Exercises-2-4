import { useState } from "react";

export function UpDownCounter() {
  const [counter, setCounter] = useState(0);
  const [upButton] = useState(0);
  const [downButton] = useState(0);
  function UpButtonClick() {
    setCounter(counter + 1);
  }
  function DownButtonClick() {
    setCounter(counter - 1);
  }

  return (
    <div className="container">
      <div className="upDownCounter">
        <button className="upBtn" onClick={UpButtonClick}>
          Up
        </button>
        <span>{counter}</span>
        <button className="downBtn" onClick={DownButtonClick}>
          Down
        </button>
      </div>
    </div>
  );
}
