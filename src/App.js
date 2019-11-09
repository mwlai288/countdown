import React, { Component } from 'react';
import Input from './components/Input';
import Time from './components/Time';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';

export default class App extends Component {
	state = {
		time: 0
	};

	formatTime = (time) => {
		let sec = time % 60;
		let min = Math.floor(time / 60);
		min = min.toString().length === 1 ? `0${min}` : min;
		sec = sec.toString().length === 1 ? `0${sec}` : sec;
		return `${min}:${sec}`;
	};

	changeTimer = (e) => {
		e.preventDefault();
		this.setState({
			time: e.target.value
		});
	};

	startTimer = () => {
		const { time } = this.state;
		if (time.length) {
			this.start = setInterval(() => {
				this.countdown();
			}, 1000);
		} else {
			alert('Please enter a time');
		}
	};

	countdown = () => {
		const { time } = this.state;
		if (time > 0) {
			this.setState({ time: time - 1 });
		}

		if (time === 0) {
			alert('Countdown done!!');
			clearInterval(this.start);
		}
	};

	pauseTimer = () => {
		clearInterval(this.start);
	};

	resetTimer = () => {
		clearInterval(this.start);
		this.setState({
			time: 0
		});
	};

	render() {
		return (
			<MainBody>
				<Time formatTime={this.formatTime} time={this.state.time} />
				<Input changeTimer={this.changeTimer} />
				<Buttons>
					<Button variant="primary" size="sm" onClick={this.startTimer}>
						Start Countdown
					</Button>
					<Button variant="warning" size="sm" onClick={this.pauseTimer}>
						Pause Countdown
					</Button>
					<Button variant="dark" size="sm" onClick={this.resetTimer}>
						Reset Countdown
					</Button>
				</Buttons>
			</MainBody>
		);
	}
}

const MainBody = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	position: absolute;
	justify-content: center;
	width: 100%;
	height: 100%;
`;

const Buttons = styled.div`
	padding: 1em;
`;
