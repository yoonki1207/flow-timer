import React from "react";
import styled from "styled-components";
import { TimerCardList } from "./TimerCardList";

const MainMoudle = () => {
  
  return (
    <Main><TimerCardList /></Main>
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
export default React.memo(MainMoudle);
