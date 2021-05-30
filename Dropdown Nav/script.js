const darkModeToggle = document.querySelector('#dark-mode-toggle');
const mainBody = document.querySelector('#main-content');
const hamburgerIcon = document.querySelector('.burger');
const navigationPanel = document.querySelector('.navigation-menu');

window.onload = function () {
	if (!document.documentElement.dataset.theme) {
		document.documentElement.dataset.theme = 'light';
	}
};

darkModeToggle.addEventListener('change', () => {
    let appTheme = document.documentElement.dataset.theme;
	if (appTheme === 'light') {
		document.documentElement.dataset.theme = 'dark';
	} else {
		document.documentElement.dataset.theme = 'light';
	}
});

hamburgerIcon.addEventListener("click", () => {
    hamburgerIcon.classList.toggle('active');
    navigationPanel.classList.toggle('active');
	mainBody.classList.toggle('overlay');
})
