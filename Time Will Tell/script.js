import { now } from './util.js';

const getClockTemplate = (id) => `<div id="clock-${id}"" class="clock">
    <div class="hand second-hand" id="clock-${id}-second-hand"></div>
    <div class="hand minute-hand" id="clock-${id}-minute-hand"></div>
    <div class="hand hour-hand" id="clock-${id}-hour-hand"></div>
    <div class="clock-center"></div>
</div>`;

const runClock = () => {
	const { hours, minutes, seconds } = now();
	const secondHand = document.getElementById('clock-0-second-hand');
	const minuteHand = document.getElementById('clock-0-minute-hand');
	const hourHand = document.getElementById('clock-0-hour-hand');

	const hourRotation = 60 * (hours % 12 || 12) + minutes;
	secondHand.style.transform = `rotate(${6 * seconds + 270}deg)`;
	minuteHand.style.transform = `rotate(${6 * minutes + 270}deg)`;
	hourHand.style.transform = `rotate(${0.5 * hourRotation + 270}deg)`;
};

const startClock = () => {
	document.body.innerHTML = getClockTemplate(0);
	runClock();
	let timerId = setInterval(runClock, 1000);
};

startClock();

/*
Description:
    Your job is to fix this broken clock!
    Right now it's only right twice a day.

Skills: 
    CSS Transforms, JavaScript Dates, setTimeout()/setInterval(), HTML/CSS in JavaScript
*/
