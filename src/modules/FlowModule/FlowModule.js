import { useRef, useState } from "react";
import { FlowCanvas } from "./FlowCanvas";

// 시작 시간: 시작 시간
// 끝 시간: 시작 시간 + 목표 시간
// 현재 시간: 현재시간

export const FlowModule = () => {
  const canvasWidth = useRef(0);
  const canvasHeight = useRef(0);
  const [timeHeight, setTimeHeight] = useState(document.bodt.clientHeight);
  const resize = () => {
    canvasWidth.current = document.body.clientWidth;
    canvasWidth.current = document.body.clientHeight;
  };
  useEffect(() => {
    // TODO window말고 canvas객체에 적용하기
    window.addEventListener("resize", resize);
    resize();

    return () => window.removeEventListener("resize", resize);
  }, []);
  return (
    <>
      <FlowCanvas
        canvasWidth={canvasWidth.current}
        canvasHeight={canvasHeight.current}
      />
    </>
  );
};
