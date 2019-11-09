import React, { Component } from 'react';
import Input from './components/Input';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';
export default class App extends Component {
	state = {
		minutes: '0',
		seconds: '0',
		alert: false
	};

	changeTimer = (e) => {
		e.preventDefault();
		const value = e.target.value;
		this.setState({
			[e.target.name]: value
		});
	};

	startTimer = () => {
		const { minutes, seconds } = this.state;
		if (minutes.length || seconds.length) {
			this.start = setInterval(() => {
				this.countdown();
			}, 1000);
		} else {
			alert('Please enter a time');
		}
	};

	countdown = () => {
		const { minutes, seconds } = this.state;
		if (seconds > 0) {
			this.setState({ seconds: seconds - 1 });
		}

		if (seconds === 0) {
			if (minutes === 0) {
				alert('Countdown done!!');
				clearInterval(this.start);
			} else {
				this.setState({ minutes: minutes - 1, seconds: 59 });
			}
		}
	};

	pauseTimer = () => {
		clearInterval(this.start);
	};

	resumeTimer = () => {
		if (!this.interval) this.startTimer();
	};

	resetTimer = () => {
		clearInterval(this.start);
		this.setState({
			minutes: 0,
			seconds: 0
		});
	};

	render() {
		return (
			<MainBody>
				<Input
					minutes={this.state.minutes}
					seconds={this.state.seconds}
					changeTimer={this.changeTimer}
				/>
				<Buttons>
					<Button variant="primary" size="sm" onClick={this.startTimer}>
						Start Countdown
					</Button>
					<Button variant="warning" size="sm" onClick={this.pauseTimer}>
						Pause Countdown
					</Button>
					<Button variant="secondary" size="sm" onClick={this.resumeTimer}>
						Resume Countdown
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
