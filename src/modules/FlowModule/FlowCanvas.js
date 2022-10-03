import React, { useEffect, useRef, useState } from "react";
import { useCanvas } from "../../hooks/useCanvas";

/**
 *
 * @param {number} canvasWidth
 * @param {number} canvasHeight
 * @returns {React.FC}
 */
const FlowCanvas = ({ canvasWidth, canvasHeight }) => {
  /**
   *
   * @param {CanvasRenderingContext2D} ctx
   */
  const animate = (ctx) => {};
  const canvasRef = useCanvas(canvasWidth, canvasHeight, animate);

  return <canvas ref={canvasRef} />;
};

export default React.memo(FlowCanvas);
