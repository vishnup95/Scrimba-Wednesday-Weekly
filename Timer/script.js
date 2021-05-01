'use strict';
const timerCountDown = document.querySelector('.timer-countdown');
const timer = document.querySelector('.timer');
const startTimerBtn = document.querySelector('.start-timer-btn');

//timer.innerText = '00:00'

startTimerBtn.addEventListener('click', function () {
	const timerVal = timer.value;
	// const splitTimer = timerVal.split(":");
	let [hoursVal, minutesVal, secondsVal] = timerVal.split(':');
	secondsVal = secondsVal;
	let seconds = document.createElement('p');
	let minutes = document.createElement('p');
	let hours = document.createElement('p');

	seconds.innerText = secondsVal + ' S';
	minutes.innerText = minutesVal + ' M';
	hours.innerText = hoursVal + ' H';

	timerCountDown.appendChild(seconds);
	timerCountDown.appendChild(minutes);
	timerCountDown.appendChild(hours);

	this.timerSeconds = setInterval(() => {
		if (secondsVal === '00') {
			// We can check timer stop here?
			if (minutesVal === '00' && hoursVal === '00') {
				clearInterval(this.timerSeconds);
                return;
			}

			if (minutesVal === '00') {
				minutesVal = '60';
				hoursVal--;
				hoursVal = hoursVal.toString().padStart(2, '0');
			}
			secondsVal = '59';
			minutesVal--;
			minutesVal = minutesVal.toString().padStart(2, '0');
		} else {
			secondsVal--;
			secondsVal = secondsVal.toString().padStart(2, '0');
		}
		seconds.innerText = secondsVal + ' S';
		minutes.innerText = minutesVal + ' M';
		hours.innerText = hoursVal + ' H';
	}, 1000);
});
