import styled from "styled-components";

const TimerCircle = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50px;
    background-color: red;
    display: bloak;
`;

export const Timer = () => {
    
    return (<>
        <TimerCircle/>
    </>);
}