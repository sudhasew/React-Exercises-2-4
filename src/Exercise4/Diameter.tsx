import { useState } from "react";

import "./Diameter.css";

export function Diameter() {
  const [diameter, setDiameter] = useState(200);
  const [isCircle, setIsCircle] = useState(false);

  function updateDiameter(e: any) {
    setDiameter(e.target.value);
  }

  function updateIsCircle(e: any) {
    setIsCircle(e.target.checked);
  }

  const styles = {
    width: diameter + "px",
    height: diameter + "px",
  };

  return (
    <div>
      <input type="number" value={diameter} onChange={updateDiameter} />
      Diameter
      <label>
        <input
          className="checkbox"
          type="checkbox"
          checked={isCircle}
          onChange={updateIsCircle}
        />
        IsCircle
      </label>
      <div
        className={isCircle ? "object circle" : "object"}
        style={styles}
      ></div>
    </div>
  );
}
