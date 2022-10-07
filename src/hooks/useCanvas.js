import { useEffect, useRef } from "react";

/**
 * useCanvas
 * @param {number} canvasWidth canvas width
 * @param {number} canvasHeight canvas height
 * @param {(CanvasRenderingContext2D)=>void} animate animate callback function
 */
export const useCanvas = (canvasWidth, canvasHeight, animate) => {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    const setCanvas = () => {
      const devicePixelRatio = window.devicePixelRatio;

      if (canvas && ctx) {
        // 실제 화면에 그려지는 크기
        canvas.style.width = canvasWidth + "px";
        canvas.style.height = canvasHeight + "px";

        // 그려지는 캔버스의 크기. 실제 크기에 밀도를 곱한다.
        canvas.width = canvasWidth * devicePixelRatio;
        canvas.height = canvasHeight * devicePixelRatio;

        // 캔버스의 스케일. 밀도라고 생각하면 된다.
        ctx.scale(devicePixelRatio, devicePixelRatio);
      }
    };
    setCanvas();

    let requestId;
    const requestAnimation = () => {
      requestId = window.requestAnimationFrame(requestAnimation);
      if (ctx) {
        animate(ctx);
      }
    };
    requestAnimation();

    return () => {
      window.cancelAnimationFrame(requestId);
    };
  }, [canvasWidth, canvasHeight, animate]);

  return canvasRef;
};
