import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useCanvas } from "../../hooks/useCanvas";
import { useClientWidthHeight } from "../../hooks/useClientWidthHeight";
import Clock from "../ClockModule/Clock";
import { Wave } from "../FlowModule/Wave";
import { useTimeDispatch, useTimeState } from "../share/TimeProvider";

const PRIMARY_COLOR = `#333333`;

// TODO: Time card for select format of timer
export const TimerCard = ({ title }) => {
	let dir = 0.1;
	const animate = (ctx) => {
		ctx.clearRect(0, 0, canvasWidth, canvasHeight);
		if (title === "wave") wave.animate(ctx);
		if (title === "circle") {
			clock.animate(ctx);
			clock.angle += dir;
			if (clock.angle >= Math.PI * 1.9) {
				dir = -dir;
				clock.angle += dir;
			} else if (clock.angle <= -2) {
				dir = -dir;
				clock.angle += dir;
			}
		}
	};
	const dispatch = useTimeDispatch();
	const state = useTimeState();
	const navigate = useNavigate();
	const parentRef = useRef(null);
	const canvasWidth = useClientWidthHeight(parentRef).width;
	const canvasHeight = useClientWidthHeight(parentRef).height;
	const canvasRef = useCanvas(canvasWidth, canvasHeight, animate);
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
	let wave = new Wave(
		canvasWidth,
		canvasHeight,
		4,
		canvasHeight / 2,
		PRIMARY_COLOR,
		500
	);
	let clock = new Clock(canvasWidth / 2, canvasHeight / 2, 40, PRIMARY_COLOR);
	return (
		<TimeCardBox ref={parentRef} onClick={onClick}>
			{title}
			<CanvasBox>
				<canvas ref={canvasRef} />
			</CanvasBox>
		</TimeCardBox>
	);
};

const CanvasBox = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	background-color: black;
	display: none;
`;

const TimeCardBox = styled.div`
	display: flex;
	position: relative;
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
		transform: translate(0px, -10px);
		border: 1px solid #ffffff88;
		color: #ffffffaa;
		${CanvasBox} {
			display: initial;
		}
	}
`;
