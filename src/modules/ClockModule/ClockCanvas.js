import { useCanvas } from "../../hooks/useCanvas";
import { TimeText } from "../share/TimeText";
import { getTimeText } from "../share/utils";
import Clock from "./Clock";
const BACKGROUND_COLOR = `rgb(31, 31, 36)`;
const PRIMARY_COLOR = `rgba(0, 0, 0, 0.2)`;
const TEXT_COLOR = "rgba(255, 255, 255, 0.7)";

const ClockCanvas = ({ canvasWidth, canvasHeight, targetTime, totalTime }) => {
  const fillBackground = (ctx) => {
    ctx.fillStyle = BACKGROUND_COLOR;
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
  };

  const animate = (ctx) => {
    fillBackground(ctx);
    clock.animate(ctx);
    const target = targetTime;
    const today = new Date();
    const gap = target - today;
    clock.setAngle(Math.PI * 2 - (gap / (totalTime * 1000 * 60)) * Math.PI * 2);

    text.text = getTimeText(gap);
    text.animate(ctx);
  };

  let clock = new Clock(canvasWidth / 2, canvasHeight / 2, 300, PRIMARY_COLOR);
  let text = new TimeText(canvasWidth / 2, canvasHeight / 2, "", TEXT_COLOR);

  const canvasRef = useCanvas(canvasWidth, canvasHeight, animate);
  return <canvas ref={canvasRef} />;
};

export default ClockCanvas;
