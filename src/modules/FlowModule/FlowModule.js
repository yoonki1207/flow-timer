import React, { useEffect, useRef, useState } from "react";
import FlowCanvas from "./FlowCanvas";

// 시작 시간: 시작 시간
// 끝 시간: 시작 시간 + 목표 시간
// 현재 시간: 현재시간

const FlowModule = () => {
  const canvasWidth = useRef(document.body.clientWidth);
  const canvasHeight = useRef(document.body.clientHeight);
  const [timeHeight, setTimeHeight] = useState(document.body.clientHeight);
  const [tmp, setTmp] = useState(0);
  const resize = () => {
    console.log("resize()");
    canvasWidth.current = document.body.clientWidth;
    canvasHeight.current = document.body.clientHeight;
    setTimeHeight(document.body.clientHeight);
  };
  useEffect(() => {
    console.log("FlowModule mounted");
    // TODO window말고 canvas객체에 적용하기
    window.addEventListener("resize", resize);
    resize();
    setTimeHeight(document.body.clientHeight);
    setInterval(() => tmp + 1, 10);
    return () => {
      window.removeEventListener("resize", resize);
      console.log("FlowModule unmounted");
    };
  }, []);
  return (
    <>
      <FlowCanvas
        canvasWidth={canvasWidth.current}
        canvasHeight={canvasHeight.current}
        timeHeight={timeHeight}
        tmp={tmp}
      />
    </>
  );
};

export default React.memo(FlowModule);
