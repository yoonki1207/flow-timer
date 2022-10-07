import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useClientWidthHeight } from "../../hooks/useClientWidthHeight";
import { useTimeState } from "../share/TimeProvider";
import FlowCanvas from "./FlowCanvas";

// 시작 시간: 시작 시간
// 끝 시간: 시작 시간 + 목표 시간
// 현재 시간: 현재시간

const FlowModule = () => {
  /**
   * @type {RefObject<HTMLElement>}
   */ 
  const mainRef = useRef(null);
  const {time: minutesL, target: totalTime} = useTimeState();
  const [time, setTime] = useState(null);
  const [targetTime, setTargetTime] = useState(null);
  const { width: canvasWidth, height: canvasHeight } =
    useClientWidthHeight(mainRef);
  useEffect(()=> {
    setTargetTime(new Date(minutesL));
    // console.log(new Date(minutesL - new Date()).toTimeString());
    if(!window.localStorage.getItem("targetTime")) {
      window.localStorage.setItem("targetTime", minutesL);
      setTargetTime(minutesL);
    } else {
      const target = window.localStorage.getItem("targetTime");
      setTargetTime(target);
    }
  }, []);
  return (
    <Main ref={mainRef}>
      <FlowCanvas canvasWidth={canvasWidth} canvasHeight={canvasHeight} targetTime={targetTime} totalTime={totalTime}/>
    </Main>
  );
};

export default FlowModule;

const Main = styled.main`
width: 100%;
height: 100%;
background: black;
display: flex;
justify-content: center;
align-items: center;
`;