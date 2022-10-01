import { useCanvas } from "../../hooks/useCanvas";

export const FlowCanvas = (canvasWidth, canvasHeight) => {
  /**
   *
   * @param {CanvasRenderingContext2D} ctx canvas context 2d
   */
  const animate = (ctx) => {};
  const canvasRef = useCanvas(canvasWidth, canvasHeight, animate);

  return <canvas ref={canvasRef} />;
};
