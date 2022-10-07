import { createContext, useContext, useReducer, useState } from "react";
import { INIT_TIME } from "../MainModule/MainModule";

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_TIME':
      return action.state;
    default:
      return new Error('Invalid action type')
  }
}

const TimerTimeContext = createContext();
const TimerDispatchContext = createContext();

export const TimeProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, INIT_TIME);
  return (
  <TimerTimeContext.Provider value={state}>
    <TimerDispatchContext.Provider value={dispatch}>
      {children}
    </TimerDispatchContext.Provider>
  </TimerTimeContext.Provider>);
}

export const useTimeState = () => {
  const context = useContext(TimerTimeContext);
  if(context) return context;
  else throw new Error('TimerTimeContext not found');
}

export const useTimeDispatch = () => {
  const context = useContext(TimerDispatchContext);
  if(context) return context;
  else throw new Error('TimerDispatchContext not found');
}