import { useState } from "react";
import styled from "styled-components";
import FlowModule from "../FlowModule/FlowModule";
import { TimerCard } from "./TimerCard";
import { TimerCardList } from "./TimerCardList";

export const MainMoudle = () => {
  const [tmp, setTmp] = useState(false);
  const onClick = () => {
    setTmp(!tmp);
  };
  return (
    <Main>{tmp ? <FlowModule /> : <TimerCardList onClick={onClick} />}</Main>
  );
};

const Main = styled.main`
  width: 100%;
  height: 100%;
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;
