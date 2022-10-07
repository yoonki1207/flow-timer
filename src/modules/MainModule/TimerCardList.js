import { TimerCard } from "./TimerCard";

export const TimerCardList = () => {
  const timerList = ["wave", "circle", "binary", "scaled"];
  return (
    <>
      {timerList.map((val) => (
        <TimerCard key={val} title={val}/>
      ))}
    </>
  );
};
