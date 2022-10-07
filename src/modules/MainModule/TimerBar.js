import { useEffect, useState } from "react";
import Draggable from "react-draggable";
import styled from "styled-components";
import { INIT_TIME } from "./MainModule";

const TimerBar = ({onDrag}) => {
  return(
  <TimerBarBox>
      <div className="progress-box">
        <div className="progress-bar"></div>
    <Draggable
    axis='x'
    grid={[10, 0]}
    defaultPosition={{x: INIT_TIME*10, y: 0}}
    onDrag={onDrag}
    bounds={{left: 10, right: 600}}>
        <div className="progress-btn"></div>
    </Draggable>
        <div className="progress-num"></div>
      </div>
    
    </TimerBarBox>
  );
}

const TimerBarBox = styled.div`

.progress-box {
     
     width: 600px;
     position: relative;
     height: 30px;
     padding: 5px;
 }

 .progress-bar {

     width: 100%;  /*    100%             15px       100       ;*/
     height: 10px;
     position: absolute;
     background-color: gray;
     border-radius: 10px;
     top: 5px;
 }

 .progress-btn {

     width: 15px;
     height: 15px;
     position: absolute;
     background-color: #666;
     border-radius: 5px;
     top: 2.5px;
     left: 0px;
 }

 .progress-btn:hover {

     background-color: #888;
     cursor: pointer;
 }

 .progress-num {

     /* text-align: center; */
     position: absolute;
     bottom: 0;
     left: 50%;
     font-size: 12px;
     transform: translateX(-50%);
 }`

export default TimerBar;