import styled from "styled-components";
import { TimerCard } from "./TimerCard";

export const TimerCardList = () => {
  const timerList = ["wave", "circle"];
  return (
    <TimerCardListBox>
      {timerList.map((val) => (
        <TimerCard key={val} title={val} />
      ))}
    </TimerCardListBox>
  );
};

const TimerCardListBox = styled.div`
  display: flex;
  flex-direction: row;
`;
