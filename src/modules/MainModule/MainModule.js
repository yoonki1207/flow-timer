import React, { useState } from "react";
import styled from "styled-components";
import TimerBar from "./TimerBar";
import { TimerCardList } from "./TimerCardList";

export const INIT_TIME = 500;

const MainMoudle = () => {
  
  const [time, setTime] = useState(INIT_TIME);

  const onDrag = (e, data) => {
    setTime(data.x);
    console.log(data);
  }
  return (
    <Main><Title>{"FLOW TIMER"}</Title>
      <TimerCardList />
      <TimerBar onDrag={onDrag}/>
      {Math.ceil(time/10) + 'min'}
    </Main>
  );
};
const Title = styled.div`
  font-size: 30px;
  padding: 15px;
  color: #ffffff88;
`

const Main = styled.main`
  width: 100%;
  height: 100%;
  background: black;
  display: flex;
  color: #ffffff88;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

`;
export default React.memo(MainMoudle);
