function toggleVisibility() {
	const emojisContainer = document.querySelector('#emojis');
	const emojiContainer = document.querySelectorAll('.emoji-container');
	let rootElement = document.documentElement;

	let emojiArr = [...emojiContainer];
	let emojiArrLength = emojiArr.length;
	
	//rootElement.style.setProperty('--pf-number-of-emojis', emojiArrLength);

	// A TODO would be to make this work for any number of emojis
	// Would be easy, setting style from JS itself. I tried a little using 
	// custom props, but that sucked.

	let timerId = setInterval(() => {
		if (emojiArrLength) {
			emojiArr[emojiArrLength - 1].classList.add(
				`right-extreme-${emojiArrLength - 1}`
			);
			emojiArrLength--;
		} else {
			clearInterval(timerId);
		}
	}, 1000);

	emojisContainer.style.display = 'flex';
}
