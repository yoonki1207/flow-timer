import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ClockModule from "./modules/ClockModule/ClockModule";
import FlowModule from "./modules/FlowModule/FlowModule";
import MainMoudle from "./modules/MainModule/MainModule";
import { TimeProvider } from "./modules/share/TimeProvider";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <TimeProvider>
              <MainMoudle />
            </TimeProvider>
          }
        />
        <Route
          path="/wave"
          element={
            <TimeProvider>
              <FlowModule />
            </TimeProvider>
          }
        />
        <Route
          path="circle"
          element={
            <TimeProvider>
              <ClockModule />
            </TimeProvider>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

// 시간 선택 화면(시간 설정 및 시작 버튼 있음) -> 타이머 화면(바로 시작)
// 나중에 쉬는 시간도..?

export default App;
