import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useTimeDispatch, useTimeState } from "../share/TimeProvider";

// TODO: Time card for select format of timer
export const TimerCard = ({ title }) => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate(`/${title}`, {state: 'wave-state'});
  }
  return <TimeCardBox onClick={onClick}>{title}</TimeCardBox>;
};

const TimeCardBox = styled.div`
  display: flex;
  width: 200px;
  height: 300px;
  color: #ffffff66;
  border: 1px solid #ffffff44;
  border-radius: 25px;
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
