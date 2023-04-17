import React, { useState, useRef } from "react";
import { SketchPicker } from "react-color";
import { FaEyeDropper } from "react-icons/fa";
import { useSnapshot } from "valtio";

import state from "../store";

const ColorPicker = () => {
  const snap = useSnapshot(state);
  // const [color, setColor] = useState("#ffffff");
  // const canvasRef = useRef(null);
  // const [isEyedropperActive, setIsEyedropperActive] = useState(false);

  // const handleEyedropperClick = () => {
  //   setIsEyedropperActive(!isEyedropperActive);
  // };

  // const handleCanvasClick = (event) => {
  //   if (isEyedropperActive) {
  //     const canvas = canvasRef.current;
  //     const context = canvas.getContext("2d");

  //     const x = event.clientX - canvas.offsetLeft;
  //     const y = event.clientY - canvas.offsetTop;
  //     const pixel = context.getImageData(x, y, 1, 1).data;
  //     const newColor = `rgb(${pixel[0]}, ${pixel[1]}, ${pixel[2]})`;
  //     setColor(newColor);
  //     console.log(color);
  //     setIsEyedropperActive(false);
  //   }
  // };

  return (
    <div className="absolute ml-3 left-full">
      {/* <canvas
        ref={canvasRef}
        style={{ display: "none" }}
        width={window.innerWidth}
        height={window.innerHeight}
        onClick={handleCanvasClick}
      />
      <button onClick={handleEyedropperClick}>
        {isEyedropperActive ? (
          <FaEyeDropper style={{ color: "red" }} />
        ) : (
          <FaEyeDropper />
        )}
      </button> */}
      <SketchPicker
        color={snap.color}
        disableAlpha
        onChange={(color) => (state.color = color.hex)}
      />
    </div>
  );
};

export default ColorPicker;
