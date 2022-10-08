import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useTimeDispatch, useTimeState } from "../share/TimeProvider";

// TODO: Time card for select format of timer
export const TimerCard = ({ title }) => {
  const dispatch = useTimeDispatch();
  const state = useTimeState();
  const navigate = useNavigate();
  const onClick = () => {
    dispatch({
      type: "SET_TIME",
      state: {
        target: state,
        time: new Date().setMinutes(new Date().getMinutes() + Math.ceil(state)),
      },
    });
    navigate(`/${title}`, { state: "wave-state" });
  };
  return <TimeCardBox onClick={onClick}>{title}</TimeCardBox>;
};

const TimeCardBox = styled.div`
  display: flex;
  width: 200px;
  height: 300px;
  color: #ffffff66;
  border: 1px solid #ffffff44;
  border-radius: 0px;
  text-transform: uppercase;
  margin: 15px;
  transition: 0.125s all ease;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    transform: translate(0px, -20px);
    border: 1px solid #ffffff88;
    color: #ffffffaa;
  }
`;
