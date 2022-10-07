import { useState } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import styled from "styled-components";
import FlowModule from "../FlowModule/FlowModule";
import { TimerCard } from "./TimerCard";
import { TimerCardList } from "./TimerCardList";

export const MainMoudle = () => {
  const onClick = () => {
  };
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <Main><TimerCardList/></Main>
        }/>
        <Route path='/wave' element={
          <Main>
            <FlowModule/>
          </Main>
        }/>
      </Routes>
    </BrowserRouter>
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
