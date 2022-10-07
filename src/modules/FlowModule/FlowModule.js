import React, { useRef } from "react";
import styled from "styled-components";
import { useClientWidthHeight } from "../../hooks/useClientWidthHeight";
import FlowCanvas from "./FlowCanvas";

// 시작 시간: 시작 시간
// 끝 시간: 시작 시간 + 목표 시간
// 현재 시간: 현재시간

const FlowModule = () => {
  /**
   * @type {RefObject<HTMLElement>}
   */
  const mainRef = useRef(null);
  const { width: canvasWidth, height: canvasHeight } =
    useClientWidthHeight(mainRef);

  return (
    <Main ref={mainRef}>
      <FlowCanvas canvasWidth={canvasWidth} canvasHeight={canvasHeight} />
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