import { useEffect, useRef, useState } from "react";
import { useClientWidthHeight } from "../../hooks/useClientWidthHeight";
import { Main } from "../share/StyledBox";
import { useTimeState } from "../share/TimeProvider";
import ClockCanvas from "./ClockCanvas";

const ClockModule = () => {
  const mainRef = useRef(null);
  const { time: minutesL, target: maxTime } = useTimeState();
  const [totalTime, setTotalTime] = useState(null);
  const [targetTime, setTargetTime] = useState(null);
  const { width: canvasWidth, height: canvasHeight } =
    useClientWidthHeight(mainRef);

  useEffect(() => {
    setTargetTime(new Date(minutesL));
    if (!window.localStorage.getItem("targetTime")) {
      window.localStorage.setItem("targetTime", minutesL);
      setTargetTime(minutesL);
    } else {
      const target = window.localStorage.getItem("targetTime");
      setTargetTime(target);
    }

    if (!window.localStorage.getItem("totalTime")) {
      window.localStorage.setItem("totalTime", maxTime);
      setTotalTime(maxTime);
    } else {
      const total = window.localStorage.getItem("totalTime");
      setTotalTime(total);
    }
  }, []);

  return (
    <Main ref={mainRef}>
      <ClockCanvas
        canvasWidth={canvasWidth}
        canvasHeight={canvasHeight}
        targetTime={targetTime}
        totalTime={totalTime}
      />
    </Main>
  );
};

export default ClockModule;
