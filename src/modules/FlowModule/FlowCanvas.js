import React from "react";
import { useCanvas } from "../../hooks/useCanvas";
import { TimeText } from "../share/TimeText";
import { Wave } from "./Wave";

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
    wave.y = canvasHeight-gap/(totalTime*1000*60)*canvasHeight;
    const d = Math.floor(gap / (1000 * 60 * 60 * 24)); // 일
    const h = Math.floor((gap / (1000 * 60 * 60)) % 24); // 시
    const m = Math.floor((gap / (1000 * 60)) % 60); // 분
    const s = Math.floor((gap / 1000) % 60); // 초
    
    if(m<0 || s<0) {
      timeText.text = "TIME OUT!";
    } else {
      timeText.text = `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
      // timeText.text = gap/(totalTime*1000*60);
      // timeText.text = targetTime - new Date()
      // timeText.text = new Date(targetTime - new Date()).toTimeString().substring(0, 8);
      // timeText.text = targetTime - new Date()
    }
    timeText.animate(ctx);
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
