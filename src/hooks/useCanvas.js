import { useEffect, useRef } from "react";

/**
 * useCanvas
 * @param {number} canvasWidth canvas width
 * @param {number} canvasHeight canvas height
 * @param {(CanvasRenderingContext2D)=>void} animate animate callback function
 * @param {any[]} deps dependencies
 */
export const useCanvas = (canvasWidth, canvasHeight, animate, deps) => {
  const canvasRef = useRef(null);
  const canvas = canvasRef.current;
  const ctx = canvas?.getContext("2d");

  const initCanvas = () => {
    const setCanvas = () => {
      const devicePixelRatio = window.devicePixelRatio ?? 1;
      if (canvas && ctx) {
        canvas.style.width = canvasWidth + "px";
        canvas.style.height = canvasHeight + "px";

        canvas.width = canvasWidth * devicePixelRatio;
        canvas.height = canvasHeight * devicePixelRatio;

        ctx.scale(devicePixelRatio, devicePixelRatio);
      }
    };
    setCanvas();
  };

  const anim = () => {
    window.requestAnimationFrame(anim);
    if (ctx) {
      animate(ctx);
    }
  };

  useEffect(() => {
    window.requestAnimationFrame(anim);
  }, []);

  useEffect(() => {
    initCanvas();
  }, [canvasWidth, canvasHeight, animate]);

  return canvasRef;
};
