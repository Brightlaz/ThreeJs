import React, { useState, useEffect } from "react";
import { SketchPicker } from "react-color";
import { FaEyeDropper } from "react-icons/fa";
import { useSnapshot } from "valtio";

import state from "../store";

const ColorPicker = () => {
  const snap = useSnapshot(state);
  const [isEyedropperActive, setIsEyedropperActive] = useState(false);
  const [eyedropperColor, setEyedropperColor] = useState(snap.color);

  const handleEyedropperClick = () => {
    setIsEyedropperActive(!isEyedropperActive);
  };

  return (
    <div className="absolute ml-3 left-full">
      <button onClick={handleEyedropperClick}>
        {isEyedropperActive ? (
          <FaEyeDropper style={{ color: "red" }} />
        ) : (
          <FaEyeDropper />
        )}
      </button>
      <SketchPicker
        color={eyedropperColor}
        disableAlpha
        onChange={(color) => setEyedropperColor(color.hex)}
      />
    </div>
  );
};

export default ColorPicker;
