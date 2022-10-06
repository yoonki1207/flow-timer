import styled from "styled-components";

// TODO: Time card for select format of timer
export const TimerCard = ({ title, onClick }) => {
  return <TimeCardBox onClick={() => onClick()}>{title}</TimeCardBox>;
};

const TimeCardBox = styled.div`
  width: 200px;
  height: 300px;
  color: #ffffff66;
  border: 1px solid #ffffff44;
  border-radius: 25px;
  margin: 15px;
  transition: 0.125s all ease;
  display: flex;
  justify-content: center;
  align-text: center;
  cursor: pointer;
  &:hover {
    transform: translate(0px, -20px);
    border: 1px solid #ffffff88;
    color: #ffffffaa;
  }
`;
