import React, { useState } from "react";
import styled from "styled-components";
import { useTimeDispatch } from "../share/TimeProvider";
import TimerBar from "./TimerBar";
import { TimerCardList } from "./TimerCardList";

export const INIT_TIME = 50;

const MainMoudle = () => {
  
  const [time, setTime] = useState(INIT_TIME*10);
  const dispatch = useTimeDispatch();

  const onDrag = (e, data) => {
    setTime(data.x);
    dispatch({type:'SET_TIME', state: Math.ceil(+data.x/10)});
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
