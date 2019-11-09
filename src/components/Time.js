import React from 'react';
import styled from 'styled-components';

export default function Time(props) {
	return (
		<div>
			<Clock>{props.formatTime(props.time)}</Clock>
		</div>
	);
}

const Clock = styled.h1`
	text-align: center;
	font-family: 'Roboto', sans-serif;
	font-size: 10rem;
`;
