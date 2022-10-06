import { TimerCard } from "./TimerCard";

export const TimerCardList = ({ onClick }) => {
  const timerList = ["WAVE", "CIRCLE", "BINARY", "SCALED"];
  return (
    <>
      {timerList.map((val) => (
        <TimerCard key={val} title={val} onClick={onClick} />
      ))}
    </>
  );
};
