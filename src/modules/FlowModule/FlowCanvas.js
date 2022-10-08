import React from "react";
import { useCanvas } from "../../hooks/useCanvas";
import { TimeText } from "../share/TimeText";
import { getTimeText } from "../share/utils";
import { Wave } from "./Wave";

const PRIMARY_COLOR = `rgba(0, 0, 0, 0.2)`;
const TEXT_COLOR = "rgba(255, 255, 255, 0.7)";

/**
 *
 * @param {number} canvasWidth
 * @param {number} canvasHeight
 * @returns {React.FC}
 */
const FlowCanvas = ({ canvasWidth, canvasHeight, targetTime, totalTime }) => {
  const fillBackground = (ctx) => {
    ctx.fillStyle = `rgb(31, 31, 36)`;
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
  };

  const animate = (ctx) => {
    fillBackground(ctx);
    wave.animate(ctx);

    const target = targetTime;
    const today = new Date();
    const gap = target - today;
    wave.y = canvasHeight - (gap / (totalTime * 1000 * 60)) * canvasHeight;
    timeText.text = getTimeText(gap);
    timeText.animate(ctx);
  };

  let wave = new Wave(
    canvasWidth,
    canvasHeight,
    5,
    canvasHeight / 2,
    PRIMARY_COLOR
  );
  let timeText = new TimeText(
    canvasWidth / 2,
    canvasHeight / 2,
    new Date().toTimeString().substring(0, 8),
    TEXT_COLOR
  );

  const canvasRef = useCanvas(canvasWidth, canvasHeight, animate);

  return <canvas ref={canvasRef} />;
};

export default React.memo(FlowCanvas);
