import React, { useState, useEffect } from "react";
import { SketchPicker } from "react-color";
import { FaEyeDropper } from "react-icons/fa";
import { useSnapshot } from "valtio";
import { extractColorFromScreen } from "react-color-extractor";

import state from "../store";

const ColorPicker = () => {
  const snap = useSnapshot(state);
  const [isEyedropperActive, setIsEyedropperActive] = useState(false);
  const [eyedropperColor, setEyedropperColor] = useState(snap.color);

  useEffect(() => {
    if (isEyedropperActive) {
      const handleMouseMove = (e) => {
        extractColorFromScreen(e.clientX, e.clientY).then((color) => {
          setEyedropperColor(color);
          state.color = color;
        });
      };

      window.addEventListener("mousemove", handleMouseMove);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, [isEyedropperActive]);

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
