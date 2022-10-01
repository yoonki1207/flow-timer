import { useEffect } from "react";

/**
 * useCanvas
 * @param {number} canvasWidth canvas width
 * @param {number} canvasHeight canvas height
 * @param {(CanvasRenderingContext2D)=>void} animate animate callback function
 * @param {any[]} deps dependencies
 */
export const useCanvas = (canvasWidth, canvasHeight, animate, deps) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    const setCanvas = () => {
      const devicePixelRatio = window.devicePixelRatio ?? 1;
      if (canvas && ctx) {
        canvas.style.width = canvasWidth + "px";
        canvas.style.height = canvasHeight + "px";

        canvas.width = canvasWidth * devicePixelRatio;
        canvas.height = canvasHeight * devicePixelRatio;

        ctx.scale(devicePixelRatio, devicePixelRatio);
      }

      if (ctx) {
        animate(ctx);
      }
    };
    setCanvas();
  }, [canvasWidth, canvasHeight].concat(deps ?? []));

  return canvasRef;
};
