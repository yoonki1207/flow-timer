import React, { useEffect, useRef, useState } from "react";
import { useCanvas } from "../../hooks/useCanvas";
import { useTimeState } from "../share/TimeProvider";
import { TimeText } from "../share/TimeText";
import { Wave } from "./Wave";

/**
 *
 * @param {number} canvasWidth
 * @param {number} canvasHeight
 * @returns {React.FC}
 */
const FlowCanvas = ({ canvasWidth, canvasHeight }) => {
  
  const time = useTimeState();
  const fillBackground = (ctx) => {
    ctx.fillStyle = `rgb(31, 31, 36)`;
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
  };

  const animate = (ctx) => {
    fillBackground(ctx);
    wave.animate(ctx);
    timeText.text = new Date().toTimeString().substring(0, 8);
    timeText.animate(ctx);
    console.log(time)
  };

  let wave = new Wave(canvasWidth, canvasHeight, 5, canvasHeight / 2);
  let timeText = new TimeText(
    canvasWidth / 2,
    canvasHeight / 2,
    new Date().toTimeString().substring(0, 8),
    "rgba(255, 255, 255, 0.7)"
  );

  const canvasRef = useCanvas(canvasWidth, canvasHeight, animate);

  return <canvas ref={canvasRef} />;
};

export default React.memo(FlowCanvas);
