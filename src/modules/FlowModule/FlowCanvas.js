import React, { useEffect, useRef, useState } from "react";
import { useCanvas } from "../../hooks/useCanvas";
import { Dot } from "./share/Dot";

/**
 *
 * @param {number} canvasWidth
 * @param {number} canvasHeight
 * @returns
 */
const FlowCanvas = ({ canvasWidth, canvasHeight, timeHeight }) => {
  const tick = useRef(0);
  const dots = useRef([]);
  /**
   *
   * @param {CanvasRenderingContext2D} ctx canvas context 2d
   */
  const animate = (ctx) => {
    ctx.beginPath();
    ctx.fillStyle = "#ffee88";
    ctx.moveTo(0, timeHeight / 2);
    ctx.lineTo(0, canvasHeight);
    ctx.lineTo(canvasWidth, canvasHeight);
    ctx.lineTo(canvasWidth, timeHeight / 2);
    ctx.fill();
    console.log("animated");
  };
  const canvasRef = useCanvas(canvasWidth, canvasHeight, animate, [
    tick.current,
  ]);

  useEffect(() => {
    console.log("Somethings change on FlowCanvas");
  });

  useEffect(() => {
    console.log("FlowCanvas mounted");
  }, []);

  return <canvas ref={canvasRef} />;
};

export default React.memo(FlowCanvas);
