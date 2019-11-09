import React from 'react';
import styled from 'styled-components';
export default function Input(props) {
	return (
		<div>
			<Clock>
				{props.minutes < 10 ? `0${props.minutes}` : props.minutes}:
				{props.seconds < 10 ? `0${props.seconds}` : props.seconds}
			</Clock>
			<InputSpace>
				<Inputs
					type="text"
					name="minutes"
					onChange={props.changeTimer}
					placeholder="Enter minutes"
				/>

				<Inputs
					type="text"
					name="seconds"
					onChange={props.changeTimer}
					placeholder="Enter seconds"
				/>
			</InputSpace>
		</div>
	);
}
const Clock = styled.div`
	text-align: center;
	font-family: 'Roboto', sans-serif;
	font-size: 10rem;
`;

const Inputs = styled.input`
	border-radius: 10px;
	margin: 0.5em;
	padding: 0.5em;
`;

const InputSpace = styled.div`
	display: flex;
	justify-content: space-evenly;
`;
