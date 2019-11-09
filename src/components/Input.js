import React from 'react';

export default function Input(props) {
	return (
		<div>
			<input
				type="text"
				name="seconds"
				refs="seconds"
				placeholder="enter time in seconds"
				onChange={props.changeTimer}
			/>
		</div>
	);
}
